import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import { useEffect } from 'react'
const icon=L.divIcon({className:'route-marker',html:'<span></span>',iconSize:[20,20],iconAnchor:[10,10]})
function Fit({points}){const map=useMap();useEffect(()=>{if(points.length)map.fitBounds(points.map(p=>[p.lat,p.lng]),{padding:[28,28]})},[map,points]);return null}
export default function RouteMap({points}){
 return <div className="map-wrap" id="map"><MapContainer center={[40.75,-73.98]} zoom={12} scrollWheelZoom={false}>
  <TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
  <Fit points={points}/><Polyline positions={points.map(p=>[p.lat,p.lng])} pathOptions={{color:'#ef4444',weight:4,opacity:.8}}/>
  {points.map((p,i)=><Marker key={i} position={[p.lat,p.lng]} icon={icon}><Popup><b>{i+1}. {p.label}</b></Popup></Marker>)}
 </MapContainer></div>
}