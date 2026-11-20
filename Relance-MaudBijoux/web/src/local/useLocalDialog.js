import {useEffect} from 'react';
export default function useLocalDialog(open,close,selector){
 useEffect(()=>{
  if(!open)return;
  const element=document.querySelector(selector);if(!element)return;
  const previous=document.activeElement,overflow=document.body.style.overflow;
  element.setAttribute('role','dialog');element.setAttribute('aria-modal','true');element.setAttribute('aria-label','Détails du bijou');element.tabIndex=-1;
  const button=element.querySelector('button');if(button)button.setAttribute('aria-label','Fermer la fiche');
  document.body.style.overflow='hidden';(button||element).focus();
  const controls=()=>[...element.querySelectorAll('button:not([disabled]),a[href],[tabindex="0"]')].filter(e=>e.getClientRects().length);
  const key=e=>{
   if(e.key==='Escape'){e.preventDefault();close();}
   if(e.key==='Tab'){const all=controls(),first=all[0],last=all[all.length-1];
    if(!first){e.preventDefault();element.focus();}
    else if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
   }
  };
  document.addEventListener('keydown',key);
  return()=>{document.body.style.overflow=overflow;document.removeEventListener('keydown',key);if(previous?.isConnected)previous.focus();};
 },[open,selector]);
}
