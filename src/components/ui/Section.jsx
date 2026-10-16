import {Link} from 'react-router-dom';
export const Section=({id,eyebrow,title,intro,children,className='bg-white'})=>(
  <section id={id} className={`py-14 md:py-20 ${className}`}><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {title&&<div className="mb-10 max-w-2xl">{eyebrow&&<p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-red">{eyebrow}</p>}
      <h2 className="text-2xl font-bold text-brand-purple md:text-3xl">{title}</h2>{intro&&<p className="mt-3 text-slate-600">{intro}</p>}</div>}
    {children}</div></section>);
export const PageHeader=({title,intro,crumbs=[]})=>(
  <div className="bg-brand-deep text-white"><div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-purple-200"><Link to="/" className="hover:text-white">Home</Link>{crumbs.map(([l,to])=><span key={l}> / {to?<Link to={to} className="hover:text-white">{l}</Link>:<span aria-current="page">{l}</span>}</span>)}</nav>
    <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>{intro&&<p className="mt-3 max-w-2xl text-purple-100">{intro}</p>}</div></div>);
