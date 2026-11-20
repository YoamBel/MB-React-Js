import {defineConfig} from 'vite';
import {transform} from 'esbuild';
import {fileURLToPath} from 'node:url';
export default defineConfig({
 plugins:[{name:'legacy-jsx',enforce:'pre',async transform(code,id){if(id.includes('/src/')&&id.endsWith('.js'))return transform(code,{loader:'jsx',jsx:'transform',sourcemap:true,sourcefile:id});}}],
 resolve:{alias:{'react-loading':fileURLToPath(new URL('./src/local/LoadingIndicator.js',import.meta.url)),'emailjs-com':fileURLToPath(new URL('./src/local/email-disabled.js',import.meta.url)),'crypto-random-string':fileURLToPath(new URL('./src/local/random.js',import.meta.url))}},
 define:{'process.env':{}},
 server:{proxy:{'/api':'http://127.0.0.1:8771','/images':'http://127.0.0.1:8771'}},
 build:{chunkSizeWarningLimit:1500}
});
