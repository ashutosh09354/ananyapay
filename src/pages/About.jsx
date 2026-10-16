import Seo from '../components/ui/Seo.jsx';import {PageHeader} from '../components/ui/Section.jsx';import Icon from '../components/ui/Icon.jsx';import CtaBand from '../components/home/CtaBand.jsx';import {business,commonNotes} from '../config/business.js';
export default function About(){return(<><Seo title="About Us" description="About Ananya Enterprise and its payment-support services."/>
<PageHeader title="About Ananya Enterprise" intro="A local business helping customers with card and payment needs." crumbs={[['About']]}/>
<section className="py-10 md:py-14"><div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
<div className="space-y-4 text-slate-600 lg:col-span-2"><h2 className="text-2xl font-bold text-brand-purple">Who we are</h2>
<p>{business.name} helps customers understand and complete card payments, credit card bill payments and bank transfers, and shares general information on credit cards and EMI.</p>
<p>Our approach is simple: explain the process, tell you the charges before you proceed, and answer questions in plain language. Every customer's situation is different, so we listen first.</p>
<h2 className="pt-4 text-2xl font-bold text-brand-purple">What to expect</h2>
<ul className="space-y-3">{commonNotes.map(n=><li key={n} className="flex gap-3"><Icon n="check" size={20} className="mt-0.5 shrink-0 text-brand-red"/>{n}</li>)}</ul></div>
<aside className="h-fit rounded-xl border border-slate-200 bg-brand-mist p-6"><h2 className="font-bold text-brand-purple">Business information</h2><dl className="mt-4 space-y-3 text-sm"><div><dt className="font-semibold text-brand-purple">Name</dt><dd>{business.name}</dd></div><div><dt className="font-semibold text-brand-purple">Hours</dt><dd>{business.hours}</dd></div><div><dt className="font-semibold text-brand-purple">Phone</dt><dd>{business.phoneDisplay}</dd></div></dl></aside></div></section><CtaBand/></>)}
