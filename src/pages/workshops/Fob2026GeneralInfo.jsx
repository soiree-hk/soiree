import { Link } from 'react-router-dom';
import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import { fob2026 } from '../../data/workshops';

export default function Fob2026GeneralInfo() {
  return (
    <WorkshopLayout event={fob2026} title="General Information">
      <p>
        For visa requirements and travel information:{' '}
        <Link to="/2026-fob-visa-travel">Visa and Travel</Link>
      </p>
      <p>
        Explore accommodation options near HKUST:{' '}
        <Link to="/2026-fob-accommodation">Accommodation</Link>
      </p>
      <p>
        Find directions to HKUST for your convenience:{' '}
        <Link to="/2026-fob-transportation">Direction to HKUST</Link>
      </p>
    </WorkshopLayout>
  );
}
