export const API = 'https://lunapark-berlin-gemeinsam.patrick-fischer.workers.dev';
export function editToken() {
 const hash=new URLSearchParams(location.hash.slice(1));const token=hash.get('edit');
 if(token) sessionStorage.setItem('lunapark-berlin-edit-token',token);
 return token || sessionStorage.getItem('lunapark-berlin-edit-token') || '';
}
export async function api(path:string,init:RequestInit={}) {
 const response=await fetch(API+path,{...init,headers:{...(init.body && typeof init.body==='string'?{'Content-Type':'application/json'}:{}),...(editToken()?{Authorization:'Bearer '+editToken()}:{}),...init.headers}});
 if(!response.ok){const body=await response.json().catch(()=>({}));throw Object.assign(new Error(body.error || 'Verbindung fehlgeschlagen'),{status:response.status});}
 return response;
}
export async function uploadMedia(file:File):Promise<string> {
 const response=await api('/api/upload',{method:'POST',headers:{'Content-Type':file.type},body:file});return (await response.json()).url;
}

