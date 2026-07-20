import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import SpeakerGrid from '../../components/workshop/SpeakerGrid';
import { viii2026 } from '../../data/workshops';
import { viii2026Content } from '../../data/viii2026Content';

export default function Viii2026Speakers() {
  return (
    <WorkshopLayout event={viii2026} title="Keynote Speakers">
      <SpeakerGrid speakers={viii2026Content.keynoteSpeakers} keynote />

      <h2 className="workshop-section-title">
        Invited Speakers{' '}
        <span style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--color-text-muted)' }}>
          (in alphabetical order)
        </span>
      </h2>
      <SpeakerGrid speakers={viii2026Content.invitedSpeakers} />
    </WorkshopLayout>
  );
}
