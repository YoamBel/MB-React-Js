import {useEffect,useState} from 'react';
import {readCart,CART_KEY,CART_EVENT} from './cart-store';
function snapshot(){try{return {cart:readCart(),error:''};}catch(error){return {cart:null,error:error.message};}}
export default function useCart(){
 const [state,setState]=useState(snapshot);
 useEffect(()=>{const refresh=()=>setState(snapshot());const storage=event=>{if(event.key?.startsWith(CART_KEY)||event.key===null)refresh();};
  refresh();window.addEventListener(CART_EVENT,refresh);window.addEventListener('storage',storage);
  return()=>{window.removeEventListener(CART_EVENT,refresh);window.removeEventListener('storage',storage);};
 },[]);return state;
}
