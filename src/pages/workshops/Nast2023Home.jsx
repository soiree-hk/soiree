import WorkshopNav from '../../components/WorkshopNav';
import { nast2023 } from '../../data/workshops';

export default function Nast2023Home() {
  return (
    <section className="page-section">
      <div className="container prose">
        <h1 className="page-title">{nast2023.title}</h1>
        <WorkshopNav items={nast2023.nav} />
        {nast2023.description.split('\n\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <h3 style={{ marginTop: '2rem' }}>Important Dates</h3>
        <div style={{ whiteSpace: 'pre-line' }}>{nast2023.dates}</div>
        <h3 style={{ marginTop: '2rem' }}>ORGANIZERS:</h3>
        <h3>SPONSORS:</h3>
        <h3 style={{ marginTop: '2rem' }}>{nast2023.venue}</h3>
      </div>
    </section>
  );
}
