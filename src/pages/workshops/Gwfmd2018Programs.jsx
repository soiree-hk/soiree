import Gwfmd2018SubPage from './Gwfmd2018SubPage';
import { gwfmd2018Content } from '../../data/workshopContent';

export default function Gwfmd2018Programs() {
  return (
    <Gwfmd2018SubPage title="Program">
      <p style={{ color: 'var(--color-text-muted)' }}>{gwfmd2018Content.programs}</p>
    </Gwfmd2018SubPage>
  );
}
