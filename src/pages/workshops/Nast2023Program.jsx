import Nast2023SubPage from './Nast2023SubPage';
import { nast2023Content } from '../../data/workshopContent';

export default function Nast2023Program() {
  return (
    <Nast2023SubPage title="Program">
      <p style={{ color: 'var(--color-text-muted)' }}>{nast2023Content.program}</p>
    </Nast2023SubPage>
  );
}
