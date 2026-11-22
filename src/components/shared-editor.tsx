import {normalizeSite} from '@/lib/site-model';
import {SiteManager} from './site-manager';
import {createContext,useContext,useCallback,useEffect,useMemo,useState,createElement,type ReactNode} from 'react';
import {toast} from 'sonner';
import {useSharedProject} from '@/lib/use-shared-project';
import {contentKey} from '@/lib/document';
import {api,editToken,uploadMedia} from '@/lib/online';
import {Button} from './ui/button';
type TextField={key:string;original:string};
type MediaField={id:string;kind:'img'|'video';src:string;alt:string};
type EditorContextValue={texts:Record<string,string>;media:Record<string,string>;editing:boolean;select:(v:TextField)=>void;registerMedia:(m:MediaField)=>void};
const Context=createContext<EditorContextValue>({texts:{},media:{},editing:false,select:()=>{},registerMedia:()=>{}});
export function EditableText({id,value}:{id:string;value:ReactNode}) {
 const ctx=useContext(Context);if(typeof value!=='string')return <>{value}</>;
 const key=contentKey(id,value),display=ctx.texts[key] ?? value;
 return <span data-editor-key={key} className={ctx.editing?'editable-copy':undefined} role={ctx.editing?'button':undefined} tabIndex={ctx.editing?0:undefined} aria-label={ctx.editing?'Text bearbeiten: '+display.slice(0,65):undefined} onClick={e=>{if(ctx.editing){e.preventDefault();e.stopPropagation();ctx.select({key,original:value});}}} onKeyDown={e=>{if(ctx.editing && ['Enter',' '].includes(e.key)){e.preventDefault();e.stopPropagation();ctx.select({key,original:value});}}}>{display}</span>;
}
export function SharedMedia({kind,contentId,src='',alt='',...props}:{kind:'img'|'video';contentId:string;src?:string;alt?:string;[key:string]:unknown}) {
 const ctx=useContext(Context);const {registerMedia}=ctx;
 useEffect(()=>registerMedia({id:contentId,kind,src,alt}),[contentId,kind,src,alt,registerMedia]);
 return createElement(kind,{...props,src:ctx.media[contentId] || src,...(kind==='img'?{alt}:{}),referrerPolicy:'no-referrer'});
}
export function SharedProject({children}:{children:ReactNode}){
 const shared=useSharedProject();const {state,setState,canEdit,loaded,status,error,conflict,resolve,sync}=shared;
 const [editing,setEditing]=useState(true),[selection,setSelection]=useState<TextField|null>(null),[mediaPanel,setMediaPanel]=useState(false),[busy,setBusy]=useState(''),[versions,setVersions]=useState<{revision:number;updated_at:string}[]>([]);
 const [mediaFields,setMediaFields]=useState<Record<string,MediaField>>({});
 const registerMedia=useCallback((m:MediaField)=>setMediaFields(s=>s[m.id]?.src===m.src?s:{...s,[m.id]:m}),[]);
 const context=useMemo(()=>({texts:state.texts,media:state.media,editing:canEdit&&editing&&!conflict,select:setSelection,registerMedia}),[state,canEdit,editing,conflict,registerMedia]);
 const copy=async(edit=false)=>{const url=new URL(location.href);url.hash=edit?'edit='+editToken():'';try{await navigator.clipboard.writeText(url.href);toast('Link kopiert');}catch{window.prompt('Link kopieren:',url.href);}};
 const upload=async(id:string,file?:File)=>{if(!file)return;setBusy(id);try{const url=await uploadMedia(file);setState(s=>({...s,media:{...s.media,[id]:url}}));toast('Medium hochgeladen · Änderung wird gespeichert');}catch(e){toast.error((e as Error).message);}finally{setBusy('');}};
 const history=async()=>{try{const data=await(await api('/api/history')).json();setVersions(data.versions);if(!data.versions.length)toast('Noch keine früheren Versionen vorhanden.');}catch(e){toast.error((e as Error).message);}};
 const restore=async(revision:number)=>{if(!window.confirm('Diese Version für alle wiederherstellen?'))return;try{const data=await(await api('/api/history/'+revision)).json();setState({...data.state,site:normalizeSite(data.state.site)});setVersions([]);}catch(e){toast.error((e as Error).message);}};
 if(!loaded)return <div className="mx-auto max-w-5xl p-8"><p role="status">{error||'Gemeinsame Lunapark-Version wird geladen …'}</p><Button onClick={()=>void sync()}>Erneut versuchen</Button></div>;
 return <Context.Provider value={context}>
  <aside className="editor-bar print:hidden" aria-label="Gemeinsames Projekt">
   <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-5 py-3"><strong>{canEdit?'Lunapark · gemeinsam bearbeiten':'Lunapark · gemeinsame Ansicht'}</strong><span role="status" className="text-sm">{status}</span><Button variant="outline" onClick={()=>void copy()}>Ansichtslink</Button>{canEdit&&<><Button variant="outline" onClick={()=>void copy(true)}>Bearbeitungslink</Button><Button aria-pressed={editing} onClick={()=>{setEditing(v=>!v);setSelection(null);}}>{editing?'Bearbeitung ausblenden':'Texte bearbeiten'}</Button><Button variant="outline" onClick={()=>setMediaPanel(v=>!v)}>Bilder & Video</Button><Button variant="outline" onClick={()=>void history()}>Versionsverlauf</Button></>}</div>
   {canEdit&&editing&&<p className="mx-auto max-w-6xl px-5 pb-3 text-sm">Klicken Sie auf einen markierten Text, um ihn zu bearbeiten. Bilder und Video ändern Sie unter „Bilder & Video“. Änderungen werden für alle gespeichert.</p>}
   {error&&<p className="mx-auto max-w-6xl px-5 pb-3" role="alert">{error} <Button onClick={()=>void sync()}>Erneut versuchen</Button></p>}
   {conflict&&<div className="mx-auto max-w-6xl p-5" role="alert"><p>Jemand hat dieselben Inhalte geändert. Ihre Eingaben bleiben erhalten; bitte wählen Sie die gemeinsame Version oder übernehmen Sie Ihre betroffenen Felder.</p><Button onClick={()=>resolve('remote')}>Gemeinsame Version laden</Button> <Button onClick={()=>resolve('local')}>Meine betroffenen Felder übernehmen</Button></div>}
  </aside>
  {selection&&canEdit&&editing&&!conflict&&<section className="editor-panel print:hidden" aria-label="Text bearbeiten"><div className="mb-3 flex justify-between gap-4"><h2 className="text-2xl">Text bearbeiten</h2><Button variant="outline" onClick={()=>setSelection(null)}>Schliessen</Button></div><label className="block">Text für alle sichtbar<textarea autoFocus rows={8} maxLength={50000} className="mt-2 w-full rounded border bg-background p-3" value={state.texts[selection.key]??selection.original} onChange={e=>{const value=e.target.value;setState(s=>({...s,texts:{...s.texts,[selection.key]:value}}));}}/></label><p className="my-3 text-sm" role="status">{status}</p><Button variant="outline" onClick={()=>setState(s=>{const texts={...s.texts};delete texts[selection.key];return {...s,texts};})}>Originaltext wiederherstellen</Button></section>}
  {mediaPanel&&canEdit&&<section className="mx-auto my-6 max-w-6xl border p-5 print:hidden" aria-label="Bilder und Video bearbeiten"><div className="mb-5 flex justify-between"><h2 className="text-2xl">Bilder & Video</h2><Button onClick={()=>setMediaPanel(false)}>Schliessen</Button></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{Object.values(mediaFields).map(m=><figure key={m.id} className="min-w-0 border p-3">{m.kind==='img'?<img className="h-36 w-full object-contain" src={state.media[m.id]||m.src} alt={m.alt}/>:<video className="h-36 w-full" controls preload="metadata" src={state.media[m.id]||m.src}/>}<figcaption className="my-3 text-sm">{m.alt||'Rathausvideo'}</figcaption><label className="block text-sm">{busy===m.id?'Wird hochgeladen …':'Datei ersetzen'}<input aria-label={'Datei ersetzen: '+(m.alt||'Rathausvideo')} type="file" className="mt-2 w-full text-sm" disabled={!!busy||!!conflict} accept={m.kind==='img'?'image/jpeg,image/png,image/webp,image/gif,image/avif':'video/mp4,video/webm,video/quicktime,video/ogg'} onChange={e=>{void upload(m.id,e.target.files?.[0]);e.target.value='';}}/></label>{state.media[m.id]&&<Button variant="outline" className="mt-3" onClick={()=>setState(s=>{const media={...s.media};delete media[m.id];return {...s,media};})}>Originalmedium wiederherstellen</Button>}</figure>)}</div><p className="mt-4 text-sm">Bilder bis 15 MB, Videos bis 60 MB. Ergänzen Sie die Quellenangaben im Text der Webseite.</p></section>}
  {versions.length>0&&<section className="mx-auto my-6 max-w-6xl border p-5 print:hidden" aria-label="Versionsverlauf"><h2 className="mb-3 text-2xl">Frühere Version wiederherstellen</h2>{versions.map(v=><Button key={v.revision} className="m-1" onClick={()=>void restore(v.revision)}>Version {v.revision} · {new Date(v.updated_at).toLocaleString('de-CH')}</Button>)}<Button variant="outline" onClick={()=>setVersions([])}>Schliessen</Button></section>}
  <SiteManager value={state.site} onChange={change=>setState(s=>({...s,site:change(s.site)}))} canEdit={canEdit} blocked={!!conflict} status={status}>{children}</SiteManager>
 </Context.Provider>;
}
