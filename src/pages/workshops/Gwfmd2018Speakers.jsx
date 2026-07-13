import Gwfmd2018SubPage from './Gwfmd2018SubPage';
import { gwfmd2018Content } from '../../data/workshopContent';

export default function Gwfmd2018Speakers() {
  return (
    <Gwfmd2018SubPage title="Invited Speakers (Alphabetical Order)">
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        {gwfmd2018Content.speakers.map((s) => (
          <div key={s.name}>
            <strong>{s.name}</strong>
            <br />
            <span style={{ color: 'var(--color-text-muted)' }}>{s.institution}</span>
          </div>
        ))}
      </div>
    </Gwfmd2018SubPage>
  );
}
