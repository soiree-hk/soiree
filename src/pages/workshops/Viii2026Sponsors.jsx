import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import LogoGrid from '../../components/workshop/LogoGrid';
import { viii2026 } from '../../data/workshops';
import { viii2026Content } from '../../data/viii2026Content';
import { imagePath } from '../../utils/images';

export default function Viii2026Sponsors() {
  const { sponsors, posterAwardSponsor } = viii2026Content;
  return (
    <WorkshopLayout event={viii2026} title="Sponsors">
      <LogoGrid logos={sponsors} />

      <h3 className="workshop-section-title">Sponsor for Poster Awards</h3>
      <div className="logo-grid">
        <img src={imagePath(posterAwardSponsor.src)} alt={posterAwardSponsor.alt} />
      </div>
    </WorkshopLayout>
  );
}
