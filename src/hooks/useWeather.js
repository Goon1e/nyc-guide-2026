import { useEffect, useState } from 'react'
export function useWeather() {
  const [weather, setWeather] = useState({loading:true})
  useEffect(() => {
    const url='https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current=temperature_2m,weather_code,wind_speed_10m&timezone=America%2FNew_York'
    fetch(url).then(r=>r.json()).then(d=>setWeather({
      loading:false,temp:Math.round(d.current.temperature_2m),
      wind:Math.round(d.current.wind_speed_10m),code:d.current.weather_code
    })).catch(()=>setWeather({loading:false,error:true}))
  },[])
  return weather
}
