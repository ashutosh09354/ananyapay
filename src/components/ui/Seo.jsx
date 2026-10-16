import {useEffect} from 'react';
import {business} from '../../config/business.js';
export default function Seo({title,description}){useEffect(()=>{
  document.title=title?`${title} | ${business.name}`:`${business.name} | Card & Bill Payment Support`;
  const m=document.querySelector('meta[name="description"]');if(m&&description)m.setAttribute('content',description);},[title,description]);return null}
