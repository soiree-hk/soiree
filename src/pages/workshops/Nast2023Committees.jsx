import Nast2023SubPage from './Nast2023SubPage';
import { nast2023Content } from '../../data/workshopContent';

export default function Nast2023Committees() {
  const c = nast2023Content.committees;
  return (
    <Nast2023SubPage title="Committees">
      <h4>Organising Committee:</h4>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
        {c.organising.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <h4>Treasurer:</h4>
      <p>{c.treasurer}</p>
    </Nast2023SubPage>
  );
}
