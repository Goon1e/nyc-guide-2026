import { motion } from 'motion/react'
import { Plane, MapPin, CloudSun, WifiOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useWeather } from '../hooks/useWeather'
import ResponsiveImage from './ResponsiveImage'
function Countdown(){
  const [text,setText]=useState('')
  useEffect(()=>{ const tick=()=>{const ms=new Date('2026-08-05T09:05:00+02:00')-new Date();if(ms<=0){setText('Willkommen in New York');return}const hours=Math.floor(ms/3600000),days=Math.floor(hours/24),remainingHours=hours%24;setText(days?`${days} Tage · ${remainingHours} Std. bis Abflug`:`${remainingHours} Std. bis Abflug`)};tick();const id=setInterval(tick,60000);return()=>clearInterval(id)},[])
  return text
}
export default function Hero(){
  const w=useWeather()
  return <section className="hero" id="home">
    <ResponsiveImage name="toprock.png" sizes="100vw" alt="New Yorker Skyline"/>
    <div className="hero-overlay"/>
    <motion.div className="hero-content" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
      <p className="kicker">FAMILIENREISE · 05.–12. AUGUST 2026</p>
      <h1>NEW YORK</h1><h2>Unser persönlicher Reiseguide</h2>
      <div className="hero-pills">
        <span><Plane size={16}/><Countdown/></span>
        <span><MapPin size={16}/>Manhattan</span>
        <span>{w.loading?<CloudSun size={16}/>:w.error?<WifiOff size={16}/>:<CloudSun size={16}/>} {w.loading?'Wetter…':w.error?'offline':`${w.temp} °C · ${w.wind} km/h`}</span>
      </div>
    </motion.div>
  </section>
}
