import {useState} from 'react';import Icon from './ui/Icon.jsx';
export default function FaqAccordion({items}){const [o,setO]=useState(0);
return(<div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">{items.map(([q,a],i)=>(<div key={q}>
<h3><button id={`fq${i}`} aria-expanded={o===i} aria-controls={`fa${i}`} onClick={()=>setO(o===i?-1:i)} className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-3 text-left font-semibold text-brand-purple">{q}<Icon n={o===i?'minus':'plus'} size={18} className="shrink-0 text-brand-red"/></button></h3>
<div id={`fa${i}`} role="region" aria-labelledby={`fq${i}`} hidden={o!==i} className="px-5 pb-5 text-slate-600">{a}</div></div>))}</div>)}
