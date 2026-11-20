import React,{useEffect,useState} from 'react';
import './relaunch.css';
export default function LocalNotice(){
 const [message,setMessage]=useState('');
 useEffect(()=>{const notify=event=>setMessage(String(event.detail||''));window.addEventListener('maud-cart-message',notify);return()=>window.removeEventListener('maud-cart-message',notify);},[]);
 return <aside className="local-notice"><strong>MAUD BIJOUX · PROJET VITRINE</strong><span>Démonstration interactive · Aucun achat ni email réel</span><a href="/">Découvrir la démo</a><span className="local-cart-message" role="status" aria-live="polite">{message}</span></aside>;
}
