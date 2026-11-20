import React,{createContext,useContext,useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {setCartScope} from './cart-store';
import './accounts.css';
export async function api(path,data){
 const response=await fetch('/api/'+path,{credentials:'same-origin',cache:'no-store',signal:AbortSignal.timeout(20000),...(data===undefined?{}:{method:'POST',headers:{'Content-Type':'application/json','X-Maud-Local':'1'},body:JSON.stringify(data)})});
 const body=await response.json();if(!response.ok){const error=Error(body.error||(response.status===429?'Trop de tentatives. Réessayez dans une minute.':'Action indisponible.'));error.status=response.status;throw error;}return body;
}
const Auth=createContext(null);
export function AuthProvider({children}){
 const [state,setState]=useState({user:null,loading:true,requiresSetup:false,error:''});
 async function reload(){try{const data=await api('auth/me');setCartScope(data.user?.id);setState({...data,loading:false,error:''});}catch(error){setState({user:null,requiresSetup:false,loading:false,error:error.message});}}
 useEffect(()=>{reload();const refresh=()=>reload();window.addEventListener('focus',refresh);return()=>window.removeEventListener('focus',refresh);},[]);
 return <Auth.Provider value={{...state,reload,async logout(){await api('auth/logout',{});await reload();}}}>{children}</Auth.Provider>;
}
export const useAuth=()=>useContext(Auth);
export function DemoButton(){const auth=useAuth(),[busy,setBusy]=useState(false),[error,setError]=useState('');return <><button className="quote-primary" type="button" disabled={busy||auth.loading} onClick={async()=>{setBusy(true);setError('');try{if(!auth.user)await api('auth/demo',{});await auth.reload();window.location.assign('/Command');}catch(e){setError(e.message);setBusy(false);}}}>{busy?'Ouverture…':auth.user?'Ouvrir mon panier':'Essayer la démo sans inscription'}</button>{error&&<p className="quote-error" role="alert">{error}</p>}</>;}
export function AccountLink(){const {user}=useAuth();return <div className="local-account-links"><Link to={user?'/Profile':'/InscriptionConnection2'}>{user?user.name:'Connexion / Inscription'}</Link>{user?.role==='Admin'&&<Link to="/Administration">Administration</Link>}</div>;}
export function LoginGate({admin=false,children}){const auth=useAuth();if(auth.loading)return <p role="status">Chargement du compte…</p>;if(auth.error)return <p role="alert">{auth.error} <button onClick={auth.reload}>Réessayer</button></p>;if(!auth.user)return <div className="maud-quick-demo"><p>{admin?'Connectez-vous avec le compte administrateur pour gérer le projet.':'Découvrez le panier et les devis avec une session visiteur, sans données personnelles.'} <Link to="/InscriptionConnection2">Connexion / espace de gestion</Link></p>{!admin&&<DemoButton/>}</div>;if(admin&&auth.user.role!=='Admin')return <p>Accès réservé à l’administrateur.</p>;return children;}
export function Panel({title,children}){return <main className="local-panel"><p className="quote-kicker">MAUD BIJOUX · MODE LOCAL</p><h1>{title}</h1>{children}</main>;}
export function Message({error,message}){return <>{error&&<p className="quote-error" role="alert">{error}</p>}{message&&<p className="local-success" role="status">{message}</p>}</>;}
