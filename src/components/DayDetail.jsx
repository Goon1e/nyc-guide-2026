import { lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, Heart, Map } from 'lucide-react'
import InfoBadges from './InfoBadges'
import Timeline from './Timeline'
import FoodCards from './FoodCards'
import Notes from './Notes'
import { useLocalStorage } from '../hooks/useLocalStorage'
import ResponsiveImage from './ResponsiveImage'
const RouteMap = lazy(() => import('./RouteMap'))
export default function DayDetail({day,index,total,onChange,favorites,setFavorites}){
 const [done,setDone]=useLocalStorage(`nyc-done-${day.id}`,[])
 const toggle=i=>setDone(done.includes(i)?done.filter(x=>x!==i):[...done,i])
 const fav=favorites.includes(day.id)
 const google=`https://www.google.com/maps/dir/${day.coordinates.map(point=>`${point.lat},${point.lng}`).join('/')}`
 return <AnimatePresence mode="wait"><motion.section key={day.id} className="detail-layout" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>
  <main className="detail-main">
   <div className="day-hero"><ResponsiveImage name={day.hero} sizes="(max-width: 960px) 100vw, 66vw" style={{objectPosition:day.heroPosition}} alt={day.title}/><div/><div className="day-title"><small>TAG {index+1} · {day.date}</small><h2>{day.title}</h2><p>{day.sub}</p></div>
   <button className={`favorite ${fav?'active':''}`} onClick={()=>setFavorites(fav?favorites.filter(x=>x!==day.id):[...favorites,day.id])} aria-label={fav?'Aus Favoriten entfernen':'Zu Favoriten hinzufügen'} aria-pressed={fav}><Heart fill={fav?'currentColor':'none'}/></button></div>
   <InfoBadges day={day}/><Timeline items={day.timeline} points={day.coordinates} done={done} onToggle={toggle}/>
  </main>
  <aside className="detail-side">
   <section className="side-card map-card"><div className="section-head"><h3><Map/> Tageskarte</h3><a href={google} target="_blank" rel="noreferrer">Route öffnen</a></div><Suspense fallback={<div className="map-loading">Karte wird geladen …</div>}><RouteMap points={day.coordinates}/></Suspense></section>
   <section className="side-card"><h3>Food-Ideen</h3><FoodCards food={day.food}/></section>
   <Notes dayId={day.id}/>
  </aside>
  <div className="day-nav"><button disabled={index===0} onClick={()=>onChange(index-1)}><ChevronLeft/> Vorheriger Tag</button><span>{index+1} / {total}</span><button disabled={index===total-1} onClick={()=>onChange(index+1)}>Nächster Tag <ChevronRight/></button></div>
 </motion.section></AnimatePresence>
}
