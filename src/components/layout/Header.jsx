import {useState,useEffect} from 'react';import {Link,NavLink,useLocation} from 'react-router-dom';
import Icon from '../ui/Icon.jsx';import {WhatsAppButton} from '../ui/Button.jsx';import {business,telLink} from '../../config/business.js';
const nav=[['Home','/'],['About','/about'],['Services','/services'],['FAQs','/faqs'],['Contact','/contact']];
export default function Header(){const [open,setOpen]=useState(false);const {pathname}=useLocation();useEffect(()=>setOpen(false),[pathname]);
const cls=({isActive})=>`rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive?'bg-brand-mist text-brand-red shadow-sm':'text-brand-purple hover:bg-brand-mist hover:text-brand-red'}`;
return(<header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
<div className="hidden bg-brand-deep text-xs text-purple-100 lg:block"><div className="mx-auto flex max-w-7xl justify-end px-8 py-1.5"><span className="flex items-center gap-4"><span className="flex items-center gap-1.5"><Icon n="clock" size={14}/>{business.hours}</span><span className="h-3 border-l border-white/25"/><a href={telLink} className="font-semibold text-white transition hover:text-brand-gold">{business.phoneDisplay}</a></span></div></div>
<div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<Link to="/" className="flex items-center rounded-lg transition hover:scale-105" aria-label={business.name}><img src="/logo.png" alt={business.name} width="64" height="64"/></Link>
<nav aria-label="Primary" className="hidden items-center gap-1 rounded-xl border border-slate-100 bg-white p-1 shadow-sm lg:flex">{nav.map(([l,to])=><NavLink key={to} to={to} end={to==='/'} className={cls}>{l}</NavLink>)}</nav>
<div className="hidden lg:block"><WhatsAppButton variant="red" className="!rounded-xl !px-5 !py-2.5 shadow-md shadow-red-200">WhatsApp us</WhatsAppButton></div>
<button className="flex h-11 w-11 items-center justify-center text-brand-purple lg:hidden" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mnav" onClick={()=>setOpen(!open)}><Icon n={open?'x':'menu'} size={26}/></button></div>
{open&&<nav id="mnav" aria-label="Mobile" className="border-t border-slate-200 bg-white px-4 pb-4 lg:hidden">{nav.map(([l,to])=><NavLink key={to} to={to} end={to==='/'} className={({isActive})=>`block border-b border-slate-100 py-3 text-base font-medium ${isActive?'text-brand-red':'text-brand-purple'}`}>{l}</NavLink>)}</nav>}</header>)}
