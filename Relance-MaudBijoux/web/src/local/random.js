export default function random({length=24}={}) {
 const bytes=new Uint8Array(length);crypto.getRandomValues(bytes);
 return Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('').slice(0,length);
}
