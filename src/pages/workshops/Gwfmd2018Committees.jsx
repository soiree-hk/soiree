import Gwfmd2018SubPage from './Gwfmd2018SubPage';
import { gwfmd2018Content } from '../../data/workshopContent';

export default function Gwfmd2018Committees() {
  const c = gwfmd2018Content.committees;
  return (
    <Gwfmd2018SubPage title="Committees">
      <h4>Honorary Chairs:</h4>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
        {c.honoraryChairs.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <h4>International Advisory Committee:</h4>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
        {c.advisory.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <h4>Organising Committee:</h4>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
        {c.organising.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <h4>Treasurer:</h4>
      <p>{c.treasurer}</p>
    </Gwfmd2018SubPage>
  );
}
