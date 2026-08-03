import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DayCards from './components/DayCards'
import DayDetail from './components/DayDetail'
import Checklist from './components/Checklist'
import trip from './data/trip.json'
import { useLocalStorage } from './hooks/useLocalStorage'
import PwaUpdate from './components/PwaUpdate'
import PrintGuide from './components/PrintGuide'

export default function App(){
 const [active,setActive]=useState(1)
 const [checklist,setChecklist]=useState(false)
 const [favorites,setFavorites]=useLocalStorage('nyc-favorites',[])
 const select=i=>{setActive(i);setTimeout(()=>document.querySelector('.detail-layout')?.scrollIntoView({behavior:'smooth',block:'start'}),50)}
 return <><div className="app-shell"><Header onOpenChecklist={()=>setChecklist(true)}/><Hero/><DayCards days={trip} active={active} onSelect={select}/><DayDetail day={trip[active]} index={active} total={trip.length} onChange={select} favorites={favorites} setFavorites={setFavorites}/><Checklist open={checklist} onClose={()=>setChecklist(false)}/><PwaUpdate/>
 <footer><div><b>Unterkunft</b><br/>Residence Inn by Marriott<br/>1033 6th Ave</div><div><b>Notfall</b><br/>USA: 911</div><div><b>Reisezeit</b><br/>05.–12. August 2026</div></footer></div><PrintGuide days={trip}/></>
}
