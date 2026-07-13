import Gwfmd2018SubPage from './Gwfmd2018SubPage';
import { gwfmd2018Content } from '../../data/workshopContent';

export default function Gwfmd2018VisaInfo() {
  return (
    <Gwfmd2018SubPage title="Visa & Info">
      <div style={{ whiteSpace: 'pre-line', color: 'var(--color-text-muted)' }}>
        {gwfmd2018Content.visaInfo}
      </div>
    </Gwfmd2018SubPage>
  );
}
