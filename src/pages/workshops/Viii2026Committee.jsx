import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import CommitteeGrid from '../../components/workshop/CommitteeGrid';
import LogoGrid from '../../components/workshop/LogoGrid';
import { viii2026 } from '../../data/workshops';
import { viii2026Content } from '../../data/viii2026Content';
import { imagePath } from '../../utils/images';

export default function Viii2026Committee() {
  const { committee } = viii2026Content;
  return (
    <WorkshopLayout event={viii2026} title="Organizing Committee">
      <CommitteeGrid members={committee.members} />
      <LogoGrid logos={committee.orgLogos} />

      {committee.notes.map((note) => (
        <p key={note} style={{ fontSize: '0.85rem', fontStyle: 'italic', margin: '0.25rem 0' }}>
          Note: {note}
        </p>
      ))}

      <h3 className="workshop-section-title">Event Secretary</h3>
      <ul>
        <li>{committee.secretary}</li>
      </ul>

      <h3 className="workshop-section-title">Supporting Team</h3>
      <ul style={{ columns: 2 }}>
        {committee.supportingTeam.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>

      <img
        src={imagePath(committee.soireeLogo)}
        alt="SOIRÉE"
        style={{ width: '200px', marginTop: '1.5rem' }}
      />
    </WorkshopLayout>
  );
}
