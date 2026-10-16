import {Link} from 'react-router-dom';import {business,services} from '../../config/business.js';
const L='hover:text-white hover:underline';
export default function Footer(){return(<footer className="bg-brand-deep pb-24 pt-10 text-sm text-purple-200 lg:pb-8">
<div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
<div><img src="/logo.png" alt={business.name} width="80" height="80"/><p className="mt-3">{business.hours}</p></div>
<nav aria-label="Quick links"><p className="mb-3 font-semibold text-white">Quick links</p><ul className="space-y-2">{[['Home','/'],['About us','/about'],['Services','/services'],['FAQs','/faqs'],['Contact','/contact']].map(([l,t])=><li key={t}><Link className={L} to={t}>{l}</Link></li>)}</ul></nav>
<nav aria-label="Services"><p className="mb-3 font-semibold text-white">Services</p><ul className="space-y-2">{services.map(s=><li key={s.slug}><Link className={L} to={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul></nav>
<nav aria-label="Legal"><p className="mb-3 font-semibold text-white">Legal</p><ul className="space-y-2">{[['Privacy Policy','/privacy'],['Terms & Conditions','/terms'],['Service Disclaimer','/disclaimer']].map(([l,t])=><li key={t}><Link className={L} to={t}>{l}</Link></li>)}</ul></nav></div>
<div className="mx-auto mt-7 max-w-7xl border-t border-white/10 px-4 pt-5 text-xs sm:px-6 lg:px-8"><p>We never ask for your OTP, PIN, CVV or banking passwords. We do not guarantee transaction success, credit approval or financial outcomes.</p><p className="mt-2">© {new Date().getFullYear()} {business.name}. All rights reserved.</p></div></footer>)}
