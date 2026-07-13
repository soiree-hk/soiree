import Gwfmd2018SubPage from './Gwfmd2018SubPage';
import { gwfmd2018Content } from '../../data/workshopContent';

export default function Gwfmd2018Hotels() {
  return (
    <Gwfmd2018SubPage title="Hotels">
      <div style={{ whiteSpace: 'pre-line', color: 'var(--color-text-muted)' }}>
        {gwfmd2018Content.hotels}
      </div>
    </Gwfmd2018SubPage>
  );
}
