import Nast2023SubPage from './Nast2023SubPage';
import { nast2023Content } from '../../data/workshopContent';

export default function Nast2023Speakers() {
  return (
    <Nast2023SubPage title="Invited Speakers">
      <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
        in Alphabetical Order of family name
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
            <th style={{ textAlign: 'left', padding: '0.5rem 0' }}>Invited Speaker</th>
            <th style={{ textAlign: 'left', padding: '0.5rem 0' }}>Institute</th>
          </tr>
        </thead>
        <tbody>
          {nast2023Content.speakers.map((s) => (
            <tr key={s.name} style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: '0.65rem 0', fontWeight: 600 }}>{s.name}</td>
              <td style={{ padding: '0.65rem 0', color: 'var(--color-text-muted)' }}>{s.institution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Nast2023SubPage>
  );
}
