import ResponsiveImage from './ResponsiveImage'

export default function PrintGuide({ days }) {
  return <main className="print-guide" aria-hidden="true">
    {days.map((day, index) => <article className="print-day" key={day.id}>
      <header className="print-day-header">
        <div><p>NEW YORK 2026 · TAG {index + 1}</p><h1>{day.title}</h1><span>{day.date} · {day.sub}</span></div>
        <ResponsiveImage name={day.hero} sizes="180px" loading="eager" alt="" />
      </header>
      <dl className="print-facts">
        <div><dt>Reservierung</dt><dd>{day.reserve}</dd></div>
        <div><dt>Verkehr</dt><dd>{day.transit}</dd></div>
        <div><dt>Laufstrecke</dt><dd>{day.walk}</dd></div>
      </dl>
      <ol className="print-timeline">
        {day.timeline.map((item) => <li key={`${item[0]}-${item[1]}`}><time>{item[0]}</time><div><strong>{item[1]}</strong><p>{item[2]}</p></div></li>)}
      </ol>
      <footer><strong>Food-Ideen</strong><span>{day.food.map((food) => food[0]).join(' · ')}</span></footer>
    </article>)}
  </main>
}
