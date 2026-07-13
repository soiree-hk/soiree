import Nast2023SubPage from './Nast2023SubPage';
import { nast2023Content } from '../../data/workshopContent';

export default function Nast2023VisaInfo() {
  return (
    <Nast2023SubPage title="Visa & Info">
      <div style={{ whiteSpace: 'pre-line', color: 'var(--color-text-muted)' }}>
        {nast2023Content.visaInfo}
      </div>
    </Nast2023SubPage>
  );
}
