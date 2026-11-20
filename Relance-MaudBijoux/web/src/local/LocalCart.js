import {useAuth,LoginGate} from './Auth';
import React,{useEffect,useState} from 'react';
import {Link,useHistory,useLocation} from 'react-router-dom';
import useCart from './useCart';
import {readCart,updateItem,removeItem,updateDetails,clearIfUnchanged,announce,importGuestCart} from './cart-store';
import './cart.css';

const reference=id=>'DEV-'+id.replaceAll('-','').slice(0,12).toUpperCase();
const date=value=>new Intl.DateTimeFormat('fr-FR',{dateStyle:'medium',timeStyle:'short'}).format(new Date(value));
async function request(url,options={}){
 const response=await fetch(url,{...options,signal:options.signal||AbortSignal.timeout(20000)});
 const body=await response.json();if(!response.ok)throw Error(body.error||'Le serveur local est indisponible.');return body;
}
function Quantity({item,disabled,onError,onValidity}){
 const [value,setValue]=useState(String(item.quantity));
 useEffect(()=>setValue(String(item.quantity)),[item.quantity]);
 return <label className="quote-quantity">Quantité<input type="number" min="1" max="999" step="1" required disabled={disabled} value={value} aria-label={`Quantité du bijou ${item.articleId}`} onChange={event=>{
  const raw=event.target.value;setValue(raw);const quantity=Number(raw),valid=raw!==''&&Number.isInteger(quantity)&&quantity>=1&&quantity<=999;
  onValidity(item.articleId,valid);if(valid)try{updateItem(item.articleId,{quantity});onError('');}catch(error){onError(error.message);onValidity(item.articleId,false);}
 }}/></label>;
}
function SavedQuote({quote}){return <section className="saved-quote" aria-label="Devis enregistré">
 <div className="quote-title"><div><p className="quote-kicker">DEVIS LOCAL</p><h2>{reference(quote.id)}</h2></div><button type="button" className="quote-no-print" onClick={()=>window.print()}>Imprimer / Enregistrer en PDF</button></div>
 <p>{quote.status} · {date(quote.createdUtc)}</p><p><strong>{quote.clientLabel}</strong></p>
 <p className="quote-context">Demande préparée sur cet ordinateur, non envoyée. Montant à chiffrer.</p>
 <ol className="quote-saved-lines">{quote.lines.map(line=><li key={line.articleId}><strong>{line.label||line.reference}</strong><span>Réf. {line.reference} · Quantité : {line.quantity}</span>{line.unitPrice!=null&&<span>Prix unitaire HT : {line.unitPrice.toLocaleString('fr-FR',{minimumFractionDigits:2,maximumFractionDigits:4})} {quote.currency}</span>}{line.note&&<p>{line.note}</p>}</li>)}</ol>
 {quote.subtotal!=null&&<p><strong>Total HT : {quote.subtotal.toFixed(2)} {quote.currency}</strong></p>}{quote.tax!=null&&<p>TVA ({quote.vatPercent} %) : {quote.tax.toFixed(2)} {quote.currency}</p>}{quote.total!=null?<p><strong>Total TTC : {quote.total.toFixed(2)} {quote.currency}</strong></p>:<p>Montant à chiffrer.</p>}
 {quote.note&&<div className="quote-note"><h3>Remarque générale</h3><p>{quote.note}</p></div>}
 <small>Identifiant complet : {quote.id}</small>
 </section>}
export default function LocalCart(){
 const {user}=useAuth();
 const {cart,error:storageError}=useCart();const history=useHistory(),location=useLocation();
 const [catalogue,setCatalogue]=useState(null),[catalogueError,setCatalogueError]=useState('');
 const [error,setError]=useState(''),[saving,setSaving]=useState(false),[invalid,setInvalid]=useState(new Set());
 const [quotes,setQuotes]=useState([]),[historyError,setHistoryError]=useState(''),[refresh,setRefresh]=useState(0);
 const [selected,setSelected]=useState(null),[quoteError,setQuoteError]=useState(''),[loadingQuote,setLoadingQuote]=useState(false);
 useEffect(()=>{const controller=new AbortController();request('/api/Articles',{signal:controller.signal}).then(data=>{
  if(!Array.isArray(data))throw Error('Le catalogue n’est pas disponible.');setCatalogue(new Map(data.map(item=>[item.Art_Num_ID,item])));setCatalogueError('');
 }).catch(error=>{if(!controller.signal.aborted)setCatalogueError(error.message);});return()=>controller.abort();},[refresh]);
 useEffect(()=>{setQuotes([]);if(!user)return;const controller=new AbortController();request('/api/local-quotes',{signal:controller.signal}).then(data=>{setQuotes(data);setHistoryError('');}).catch(error=>{if(!controller.signal.aborted)setHistoryError(error.message);});return()=>controller.abort();},[refresh,user?.id]);
 useEffect(()=>{
  setSelected(null);if(!user)return;
  const id=new URLSearchParams(location.search).get('devis');setQuoteError('');
  if(!id){setSelected(null);setLoadingQuote(false);return;}
  const controller=new AbortController();setLoadingQuote(true);
  request('/api/local-quotes/'+encodeURIComponent(id),{signal:controller.signal}).then(quote=>{setSelected(quote);setLoadingQuote(false);}).catch(error=>{if(!controller.signal.aborted){setSelected(null);setQuoteError(error.message);setLoadingQuote(false);}});
  return()=>controller.abort();
 },[location.search,refresh,user?.id]);
 const validity=(id,valid)=>setInvalid(previous=>{const next=new Set(previous);valid?next.delete(id):next.add(id);return next;});
 const mutate=action=>{try{action();setError('');}catch(error){setError(error.message);}};
 const missing=cart&&catalogue&&cart.items.some(item=>!catalogue.has(item.articleId));
 const submit=async event=>{
  event.preventDefault();if(saving||invalid.size||missing||!cart?.items.length||!user)return;
  setSaving(true);setError('');
  try{
   const draft=readCart();
   const quote=await request('/api/local-quotes',{method:'POST',headers:{'Content-Type':'application/json','X-Maud-Local':'1'},body:JSON.stringify({requestId:draft.requestId,clientLabel:draft.clientLabel,note:draft.note,lines:draft.items})});
   setSelected(quote);history.replace('/Command?devis='+quote.id);setRefresh(value=>value+1);
   try{clearIfUnchanged(draft.requestId);}catch{setError('Le devis est enregistré, mais le navigateur n’a pas pu vider le panier. Réessayer le même panier ne créera pas de doublon.');}
   announce('Devis enregistré sur cet ordinateur.');
  }catch(error){setError(error.message+' Votre panier reste sauvegardé.');}
  finally{setSaving(false);}
 };
 return <main className="local-commerce">
  <header className="quote-no-print"><p className="quote-kicker">MAUD BIJOUX · MODE LOCAL</p><h1>Panier et devis</h1><p>Prépare ta sélection et conserve tes demandes sur cet ordinateur.</p><Link to="/FilterSearch">Continuer à choisir des bijoux →</Link></header>
  <LoginGate><p>Ton panier et tes devis sont associés à ton compte. <button type="button" onClick={()=>mutate(()=>importGuestCart())}>Importer mon panier invité dans mon compte vide</button></p></LoginGate>
  <section className="quote-cart quote-no-print" aria-label="Votre panier">
   <h2>Votre panier {cart&&`· ${cart.items.reduce((sum,item)=>sum+item.quantity,0)} pièces`}</h2>
   {(storageError||error)&&<p className="quote-error" role="alert">{storageError||error}</p>}
   {catalogueError&&<p className="quote-error" role="alert">{catalogueError} <button type="button" onClick={()=>setRefresh(value=>value+1)}>Réessayer</button></p>}
   {!storageError&&cart?.items.length===0&&<p className="quote-empty">Le panier est vide. Ajoute un bijou depuis sa fiche ou une catégorie.</p>}
   {!storageError&&!!cart?.items.length&&<form onSubmit={submit}>
    {!catalogue&&!catalogueError&&<p role="status">Chargement des bijoux…</p>}
    <fieldset disabled={saving} className="quote-fields">
     {cart.items.map(item=>{const article=catalogue?.get(item.articleId);return <article key={item.articleId} className="quote-cart-line">
      {article&&<img src={'/images/'+article.Art_Fic_Img1} alt={article.Art_Libelle||'Bijou du panier'}/>}
      <div className="quote-line-details"><h3>{article?.Art_Libelle||(catalogue?'Bijou indisponible':'Chargement…')}</h3><p>Réf. {article?.Art_Ref||item.articleId}</p>
       <label>Remarque pour ce bijou<textarea rows="2" maxLength="1000" value={item.note} onChange={event=>mutate(()=>updateItem(item.articleId,{note:event.target.value}))}/></label>
      </div>
      <div className="quote-line-actions"><Quantity item={item} disabled={saving} onError={setError} onValidity={validity}/>
       <button type="button" onClick={()=>{if(window.confirm('Retirer ce bijou du panier ?')){mutate(()=>removeItem(item.articleId));validity(item.articleId,true);}}}>Retirer</button>
      </div>
     </article>})}
     {invalid.size>0&&<p className="quote-error" role="alert">Chaque quantité doit être un entier entre 1 et 999. Les valeurs invalides ne sont pas sauvegardées.</p>}
     {missing&&<p className="quote-error" role="alert">Retire les bijoux indisponibles avant d’enregistrer la demande.</p>}
     <div className="quote-draft-details"><label>Nom du brouillon<input maxLength="80" value={cart.clientLabel} placeholder="Client démo" onChange={event=>mutate(()=>updateDetails({clientLabel:event.target.value}))}/></label>
      <label>Remarque générale<textarea rows="3" maxLength="1000" value={cart.note} onChange={event=>mutate(()=>updateDetails({note:event.target.value}))}/></label></div>
     <p>Les quantités et remarques sont sauvegardées automatiquement dans ce navigateur. Le devis enregistré est conservé dans la base SQL locale, sans envoi d’email.</p>
     <button className="quote-primary" type="submit" disabled={saving||invalid.size>0||!catalogue||missing||!user}>{saving?'Enregistrement…':'Enregistrer le devis local'}</button>
    </fieldset>
   </form>}
  </section>
  <section className="quote-history quote-no-print"><LoginGate><div className="quote-title"><h2>Devis enregistrés</h2><button type="button" disabled={saving} onClick={()=>setRefresh(value=>value+1)}>Actualiser l’historique</button></div>
   {historyError&&<p role="alert" className="quote-error">{historyError}</p>}
   {!historyError&&!quotes.length&&<p>Aucun devis local enregistré pour le moment.</p>}
   <ul>{quotes.map(quote=><li key={quote.id}><Link to={'/Command?devis='+quote.id}>{reference(quote.id)} · {quote.clientLabel}</Link><span>{date(quote.createdUtc)} · {quote.lineCount} bijoux · {quote.totalQuantity} pièces</span></li>)}</ul>
   {quotes.length===100&&<p>Les 100 derniers devis sont affichés.</p>}
  </LoginGate></section>
  {loadingQuote&&<p role="status">Chargement du devis…</p>}
  {quoteError&&<p role="alert" className="quote-error">{quoteError}</p>}
  {selected&&!loadingQuote&&<SavedQuote quote={selected}/>}
 </main>;
}
