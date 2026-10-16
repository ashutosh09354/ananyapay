import {Link} from 'react-router-dom';
import Icon from './Icon.jsx';
import {enquiry,telLink,business} from '../../config/business.js';
const base='inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition';
const V={red:'bg-brand-red text-white hover:bg-red-700',purple:'bg-brand-purple text-white hover:bg-brand-deep',outline:'border border-brand-purple/30 text-brand-purple hover:bg-brand-mist',light:'border border-white/40 text-white hover:bg-white/10',white:'bg-white text-brand-purple hover:bg-brand-mist'};
export function Button({to,href,variant='red',className='',children,...rest}){
  const c=`${base} ${V[variant]} ${className}`;
  if(to)return <Link to={to} className={c} {...rest}>{children}</Link>;
  const ext=/^https?:/.test(href||'');
  return <a href={href} className={c} {...(ext?{target:'_blank',rel:'noopener noreferrer'}:{})} {...rest}>{children}</a>}
export const WhatsAppButton=({msg='Hello Ananya Enterprise, I would like to make an enquiry.',variant='red',className,children='WhatsApp us'})=>
  <Button href={enquiry(msg)} variant={variant} className={className}><Icon n="wa" size={18}/>{children}</Button>;
export const CallButton=({variant='purple',className,children})=>
  <Button href={telLink} variant={variant} className={className}><Icon n="phone" size={18}/>{children||`Call ${business.phoneDisplay}`}</Button>;
