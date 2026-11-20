const disabled=()=>Promise.reject(new Error('Envoi d’email désactivé dans la relance locale.'));
export const send=disabled;
export const sendForm=disabled;
export default {send,sendForm};
