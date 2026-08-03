import { X } from 'lucide-react'
import { useLocalStorage } from '../hooks/useLocalStorage'
const items=['Reisepässe','ESTA offline gespeichert','Go City Pass','Reservierungen/Screenshots','Trade Republic Visa','Commerzbank Mastercard Backup','OMNY-Plan','USA-Adapter','Powerbank','Medikamente','Sonnencreme','Badesachen','Kamera & Speicherkarten']
export default function Checklist({open,onClose}){
 const [checked,setChecked]=useLocalStorage('nyc-checklist',[])
 if(!open)return null
 const toggle=i=>setChecked(checked.includes(i)?checked.filter(x=>x!==i):[...checked,i])
 return <div className="modal-backdrop" onClick={onClose}><section className="modal" onClick={e=>e.stopPropagation()}>
  <button className="modal-close" onClick={onClose}><X/></button><h2>Checkliste vor Abflug</h2>
  <p>{checked.length} von {items.length} erledigt</p>
  <div className="progress"><span style={{width:`${checked.length/items.length*100}%`}}/></div>
  {items.map((x,i)=><label key={x}><input type="checkbox" checked={checked.includes(i)} onChange={()=>toggle(i)}/><span>{x}</span></label>)}
 </section></div>
}