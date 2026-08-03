import { useRegisterSW } from 'virtual:pwa-register/react'
import { Download, RefreshCw, X } from 'lucide-react'

export default function PwaUpdate() {
  const { needRefresh, offlineReady, updateServiceWorker } = useRegisterSW()
  const [needsUpdate, setNeedsUpdate] = needRefresh
  const [readyOffline, setReadyOffline] = offlineReady
  const visible = needsUpdate || readyOffline

  if (!visible) return null

  const close = () => {
    setNeedsUpdate(false)
    setReadyOffline(false)
  }

  return <aside className="pwa-update" role="status">
    <div>{needsUpdate ? <RefreshCw size={18} /> : <Download size={18} />}<span>{needsUpdate ? 'Eine neue Version ist verfügbar.' : 'Dieser Guide ist jetzt offline verfügbar.'}</span></div>
    {needsUpdate && <button onClick={() => updateServiceWorker(true)}>Aktualisieren</button>}
    <button className="pwa-close" aria-label="Hinweis schließen" onClick={close}><X size={17} /></button>
  </aside>
}
