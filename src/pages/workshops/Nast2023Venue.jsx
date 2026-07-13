import Nast2023SubPage from './Nast2023SubPage';
import { nast2023Content } from '../../data/workshopContent';

export default function Nast2023Venue() {
  return (
    <Nast2023SubPage title="Venue">
      <h4>Location</h4>
      <p style={{ color: 'var(--color-text-muted)' }}>{nast2023Content.venue}</p>
    </Nast2023SubPage>
  );
}
