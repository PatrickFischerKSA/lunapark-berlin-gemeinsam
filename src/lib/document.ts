export type DocumentState={texts:Record<string,string>;media:Record<string,string>};
export const createDefaultState=():DocumentState=>({texts:{},media:{}});
export function normalizeState(value:unknown):DocumentState {
 const s=value && typeof value==='object'?value as Partial<DocumentState>:{};
 const strings=(r:unknown):Record<string,string>=>Object.fromEntries(Object.entries(r && typeof r==='object' && !Array.isArray(r)?r:{}).filter(([,v])=>typeof v==='string'));
 return {texts:strings(s.texts),media:strings(s.media)};
}
export function contentKey(id:string,original:string){let hash=2166136261;for(const ch of original){hash^=ch.charCodeAt(0);hash=Math.imul(hash,16777619);}return id+'-'+(hash>>>0).toString(16);}
