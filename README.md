# NYC Family Guide 2026

React/Vite-Version des privaten Reiseguides.

## Lokal starten

```powershell
npm install
npm run dev
```

## Produktions-Build prüfen

```powershell
npm run build
npm run preview
```

Vor jedem Produktions-Build werden die Bilder aus `assets/source-images/` automatisch als responsive WebP-Varianten nach `public/images/` erzeugt. Manuell: `npm run images:optimize`.

## Veröffentlichung

Der Workflow `.github/workflows/deploy.yml` baut und veröffentlicht die App automatisch bei jedem Push auf `main`.

Unter **Repository → Settings → Pages** als Source **GitHub Actions** auswählen.

## Inhalte ändern

- Reiseplan: `src/data/trip.json`
- Komponenten: `src/components/`
- Design: `src/styles.css`
- Bilder: `public/images/`

Notizen, Favoriten, Checkliste und erledigte Tagesstationen werden ausschließlich lokal im jeweiligen Browser gespeichert.
