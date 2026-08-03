import { Save } from 'lucide-react'
import { useLocalStorage } from '../hooks/useLocalStorage'
export default function Notes({dayId}){
 const [notes,setNotes]=useLocalStorage('nyc-notes',{})
 return <section className="notes-card"><h3>Eigene Notizen</h3><textarea value={notes[dayId]||''} onChange={e=>setNotes({...notes,[dayId]:e.target.value})} placeholder="Treffpunkt, spontane Idee, Lieblingsessen …"/><small><Save size={13}/> wird automatisch auf diesem Gerät gespeichert</small></section>
}