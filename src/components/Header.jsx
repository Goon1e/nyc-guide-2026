import { Heart, Printer, Menu, X } from 'lucide-react'
import { useState } from 'react'
export default function Header({onOpenChecklist}) {
  const [open,setOpen]=useState(false)
  return <header className="topbar">
    <a className="brand" href="#home"><Heart size={20} fill="currentColor"/> NEW YORK 2026</a>
    <button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label="Menü">{open?<X/>:<Menu/>}</button>
    <nav className={open?'open':''}>
      <a href="#days" onClick={()=>setOpen(false)}>Tage</a>
      <a href="#map" onClick={()=>setOpen(false)}>Karte</a>
      <button className="navlink" onClick={onOpenChecklist}>Checkliste</button>
    </nav>
    <button className="print-btn" onClick={()=>window.print()}><Printer size={17}/> PDF</button>
  </header>
}