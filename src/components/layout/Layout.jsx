import {Outlet,useLocation} from 'react-router-dom';import {useEffect} from 'react';
import Header from './Header.jsx';import Footer from './Footer.jsx';import MobileBar from './MobileBar.jsx';
export default function Layout(){const {pathname,hash}=useLocation();
useEffect(()=>{if(hash){document.querySelector(hash)?.scrollIntoView();}else window.scrollTo(0,0);},[pathname,hash]);
return(<><a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:p-3">Skip to content</a>
<Header/><main id="main"><Outlet/></main><Footer/><MobileBar/></>)}
