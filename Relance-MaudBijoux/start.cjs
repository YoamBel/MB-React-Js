const {spawn}=require('node:child_process');
const path=require('node:path');
const base='http://127.0.0.1:8771';
const apiRoot=path.resolve(__dirname,'..','..','Project-MB-ReactJs','Relance-API');
const env={...process.env,MAUD_WEB_DIR:path.join(__dirname,'web','dist'),MAUD_IMAGES_DIR:path.resolve(apiRoot,'..','site test 2','Project Maud Bijoux fin Annee Novembre','Images Site MB paris')};
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
let api;
async function healthy(){try{const response=await fetch(base+'/api/health',{signal:AbortSignal.timeout(1500)});const data=await response.json();return response.ok&&data.project==='maud-bijoux-local'&&data.readOnly===true&&data.localQuotesEnabled===true&&data.featuresVersion===2;}catch{return false;}}
function open(){spawn(process.env.ComSpec||'cmd.exe',['/d','/c','start','',base],{windowsHide:true,stdio:'ignore'}).unref();console.log('Maud Bijoux est prêt : '+base);}
process.on('exit',()=>{if(api)api.kill();});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>process.exit(0));
(async()=>{
 if(await healthy()){open();return;}
 api=spawn('dotnet',[path.join(apiRoot,'bin','Debug','net10.0','Maud.LocalApi.dll')],{cwd:apiRoot,env,stdio:'inherit',windowsHide:true});
 api.on('error',error=>{console.error(error.message);process.exit(1);});
 api.on('exit',code=>{process.exit(code??1);});
 for(let attempt=0;attempt<40;attempt++){if(await healthy()){open();return;}await pause(500);}
 console.error('Le catalogue local n’est pas prêt. Vérifiez que MaudBijouxArchiveLocal existe et est en lecture seule.');process.exit(1);
})().catch(error=>{console.error(error.message);process.exit(1);});
