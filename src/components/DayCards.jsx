import { motion } from 'motion/react'
import ResponsiveImage from './ResponsiveImage'
export default function DayCards({days,active,onSelect}){
 return <section id="days" className="day-scroll">
  {days.map((d,i)=><motion.button key={d.id} whileHover={{y:-4}} className={`day-card ${i===active?'active':''}`} onClick={()=>onSelect(i)}>
   <ResponsiveImage name={d.hero} sizes="(max-width: 960px) 180px, 16vw" style={{objectPosition:d.heroPosition}} alt=""/>
   <div><span className="day-number">{i+1}</span><small>{d.date}</small><strong>{d.title}</strong><em>{d.sub}</em></div>
  </motion.button>)}
 </section>
}
