import {Link} from 'react-router-dom';import Icon from './ui/Icon.jsx';import {WhatsAppButton} from './ui/Button.jsx';
export default function ServiceCard({s}){return(<article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:border-brand-purple/30 hover:shadow-lg">
<span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-mist text-brand-purple"><Icon n={s.icon}/></span>
<h3 className="text-lg font-bold text-brand-purple">{s.title}</h3><p className="mt-2 flex-1 text-sm text-slate-600">{s.short}</p>
<Link to={`/services/${s.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red hover:underline">Learn more <Icon n="arrow" size={16}/></Link>
<WhatsAppButton msg={s.msg} variant="outline" className="mt-4 w-full">Enquire on WhatsApp</WhatsAppButton></article>)}
