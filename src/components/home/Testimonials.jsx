import {Section} from '../ui/Section.jsx';import {reviews} from '../../config/business.js';
export default function Testimonials(){if(!reviews.length)return null;return(<Section eyebrow="Customer feedback" title="What customers say" className="bg-brand-mist"><div className="grid gap-6 md:grid-cols-3">
{reviews.map(r=><figure key={r.name+r.date} className="rounded-xl border border-slate-200 bg-white p-6"><blockquote className="text-slate-700">“{r.text}”</blockquote><figcaption className="mt-4 text-sm font-semibold text-brand-purple">{r.name}</figcaption></figure>)}</div></Section>)}
