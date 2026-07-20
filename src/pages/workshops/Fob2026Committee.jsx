import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import CommitteeGrid from '../../components/workshop/CommitteeGrid';
import LogoGrid from '../../components/workshop/LogoGrid';
import { fob2026 } from '../../data/workshops';
import { fob2026Committee } from '../../data/fob2026Content';
import { imagePath } from '../../utils/images';

export default function Fob2026Committee() {
  return (
    <WorkshopLayout event={fob2026} title="Organizing Committee">
      <CommitteeGrid members={fob2026Committee.members} />
      <LogoGrid logos={fob2026Committee.orgLogos} />

      <h3 className="workshop-section-title">Event Secretary</h3>
      <ul>
        <li>{fob2026Committee.secretary}</li>
      </ul>

      <h3 className="workshop-section-title">Supporting Team</h3>
      <ul style={{ columns: 2 }}>
        {fob2026Committee.supportingTeam.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>

      <img
        src={imagePath(fob2026Committee.soireeLogo)}
        alt="SOIRÉE"
        style={{ width: '200px', marginTop: '1.5rem' }}
      />
    </WorkshopLayout>
  );
}
