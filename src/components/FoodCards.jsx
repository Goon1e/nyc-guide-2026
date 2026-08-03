import { ExternalLink, DollarSign, Star } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'
export default function FoodCards({food}){
 return <div className="food-grid">{food.map((f,i)=><article className="food-card" key={f[0]}>
  <ResponsiveImage name={f[2]} sizes="105px" alt={f[0]}/>
  <div><h4>{f[0]}</h4><p>{f[1]}</p><span className="food-meta"><span><Star size={14} fill="currentColor"/> Tipp</span><span><DollarSign size={14}/> preiswert</span></span>
  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(f[0]+' '+f[1]+' New York')}`} target="_blank" rel="noreferrer">In Maps öffnen <ExternalLink size={14}/></a></div>
 </article>)}</div>
}
