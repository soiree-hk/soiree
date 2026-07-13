import WorkshopNav from '../../components/WorkshopNav';
import { gwfmd2018 } from '../../data/workshops';

export default function Gwfmd2018Home() {
  return (
    <section className="page-section">
      <div className="container prose">
        <h1 className="page-title">{gwfmd2018.title}</h1>
        <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem' }}>{gwfmd2018.subtitle}</p>
        <WorkshopNav items={gwfmd2018.nav} />
        <p>{gwfmd2018.description}</p>
        <div style={{ whiteSpace: 'pre-line', margin: '2rem 0' }}>{gwfmd2018.dates}</div>
        <div style={{ whiteSpace: 'pre-line' }}>{gwfmd2018.contact}</div>
        <h3 style={{ marginTop: '2rem' }}>ORGANIZERS:</h3>
        <h3>SPONSORS:</h3>
        <h3 style={{ marginTop: '2rem' }}>Location</h3>
        <p>Direction to Nanyang Executive Center (NEC)</p>
      </div>
    </section>
  );
}
