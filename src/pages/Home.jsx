import {Link} from 'react-router-dom';import Seo from '../components/ui/Seo.jsx';import {Section} from '../components/ui/Section.jsx';
import Hero from '../components/home/Hero.jsx';import TrustStrip from '../components/home/TrustStrip.jsx';import HowItWorks from '../components/home/HowItWorks.jsx';
import Testimonials from '../components/home/Testimonials.jsx';import CtaBand from '../components/home/CtaBand.jsx';import ServiceCard from '../components/ServiceCard.jsx';import FaqAccordion from '../components/FaqAccordion.jsx';
import {services,reasons,faqs} from '../config/business.js';
export default function Home(){return(<><Seo description="Ananya Enterprise offers card payment assistance, credit card bill payment support, bank transfer support and credit card guidance."/>
<Hero/><TrustStrip/>
<Section eyebrow="What we do" title="Our services" intro="Practical help with everyday card and payment needs." className="bg-white"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{services.map(s=><ServiceCard key={s.slug} s={s}/>)}</div></Section>
<Section eyebrow="Why Ananya Enterprise" title="How we work with you" className="bg-brand-mist"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{reasons.map(([t,d])=><div key={t} className="border-l-4 border-brand-gold bg-white p-5"><h3 className="font-bold text-brand-purple">{t}</h3><p className="mt-1 text-sm text-slate-600">{d}</p></div>)}</div></Section>
<HowItWorks/><Testimonials/>
<Section eyebrow="FAQs" title="Common questions" className="bg-brand-mist"><div className="max-w-3xl"><FaqAccordion items={faqs.slice(0,4)}/><Link to="/faqs" className="mt-5 inline-block font-semibold text-brand-red hover:underline">See all FAQs</Link></div></Section>
<CtaBand/></>)}
