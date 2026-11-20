export const CART_KEY = 'maud-bijoux-local-cart-v1';
export const CART_EVENT = 'maud-local-cart-changed';
let scope='';
const key=()=>scope?CART_KEY+':'+scope:CART_KEY;
export function setCartScope(id){const next=id||'';if(next!==scope){scope=next;publish();}}
export function importGuestCart(){if(!scope)throw Error('Connectez-vous d’abord.');const guest=localStorage.getItem(CART_KEY);if(!guest)throw Error('Aucun panier invité à importer.');const cart=validateCart(JSON.parse(guest));if(readCart().items.length)throw Error('Votre panier doit être vide avant cet import.');cart.requestId=crypto.randomUUID();writeCart(cart);localStorage.removeItem(CART_KEY);return cart;}
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export function emptyCart() { return {version:1,requestId:crypto.randomUUID(),clientLabel:'Client démo',note:'',items:[]}; }
export function validateCart(cart) {
 if (!cart || cart.version!==1 || !uuid.test(cart.requestId) || !Array.isArray(cart.items) || cart.items.length>50 || typeof cart.clientLabel!=='string' || cart.clientLabel.length>80 || typeof cart.note!=='string' || cart.note.length>1000)
  throw Error('Le panier enregistré est illisible. Il a été conservé sans modification.');
 const ids=new Set();
 for(const item of cart.items){
  if(!item || !Number.isInteger(item.articleId) || item.articleId<1 || ids.has(item.articleId) || !Number.isInteger(item.quantity) || item.quantity<1 || item.quantity>999 || typeof item.note!=='string' || item.note.length>1000)
   throw Error('Le panier enregistré contient une ligne invalide. Il a été conservé sans modification.');
  ids.add(item.articleId);
 }
 return cart;
}
export function readCart(storage=localStorage) {
 const raw=storage.getItem(key()); if(raw===null)return emptyCart();
 try{return validateCart(JSON.parse(raw));}catch{throw Error('Le panier enregistré est illisible. Il a été conservé sans modification.');}
}
function publish(){if(typeof window!=='undefined')window.dispatchEvent(new Event(CART_EVENT));}
export function writeCart(cart,storage=localStorage){
 validateCart(cart);
 try{storage.setItem(key(),JSON.stringify(cart));}catch{throw Error('Le navigateur ne peut pas sauvegarder le panier. Votre dernière sauvegarde est conservée.');}
 publish();return cart;
}
function change(update,storage){const cart=readCart(storage);update(cart);cart.requestId=crypto.randomUUID();return writeCart(cart,storage);}
export function addItem(articleId,storage=localStorage){
 if(!Number.isInteger(articleId)||articleId<1)throw Error('Référence de bijou invalide.');
 return change(cart=>{const line=cart.items.find(item=>item.articleId===articleId);
  if(line){if(line.quantity===999)throw Error('La quantité maximale est de 999 pièces.');line.quantity++;}
  else{if(cart.items.length===50)throw Error('Le panier peut contenir au maximum 50 bijoux différents.');cart.items.push({articleId,quantity:1,note:''});}
 },storage);
}
export function updateItem(articleId,values,storage=localStorage){return change(cart=>{
 const item=cart.items.find(item=>item.articleId===articleId);if(!item)throw Error('Ce bijou n’est plus dans le panier.');
 if('quantity' in values)item.quantity=values.quantity;if('note' in values)item.note=values.note;
},storage);}
export function removeItem(articleId,storage=localStorage){return change(cart=>{cart.items=cart.items.filter(item=>item.articleId!==articleId);},storage);}
export function updateDetails(values,storage=localStorage){return change(cart=>{if('clientLabel' in values)cart.clientLabel=values.clientLabel;if('note' in values)cart.note=values.note;},storage);}
export function clearIfUnchanged(requestId,storage=localStorage){
 const cart=readCart(storage);if(cart.requestId!==requestId)return false;
 writeCart(emptyCart(),storage);return true;
}
export function announce(message){window.dispatchEvent(new CustomEvent('maud-cart-message',{detail:message}));}
