import { Check, MapPin, Navigation } from 'lucide-react'
import { motion } from 'motion/react'
export default function Timeline({items,done,onToggle}){
 return <div className="timeline">
  {items.map((x,i)=><motion.article key={i} className={`timeline-row ${done.includes(i)?'done':''}`} initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}} transition={{delay:i*.04}}>
   <button className="check" onClick={()=>onToggle(i)} aria-label="Erledigt">{done.includes(i)?<Check/>:<span/>}</button>
   <time>{x[0]}</time><div className="timeline-copy"><h4><MapPin size={16}/>{x[1]}</h4><p>{x[2]}</p></div>
   <a className="mini-map" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(x[1]+' New York')}`} target="_blank" rel="noreferrer"><Navigation size={16}/></a>
  </motion.article>)}
 </div>
}