import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import SpeakerGrid from '../../components/workshop/SpeakerGrid';
import { fob2026 } from '../../data/workshops';
import { fob2026Speakers, fob2026AffiliationReference } from '../../data/fob2026Content';

export default function Fob2026Speakers() {
  return (
    <WorkshopLayout event={fob2026} title="Invited Speakers">
      <p style={{ marginTop: '-0.75rem', color: 'var(--color-text-muted)' }}>
        in alphabetical order
      </p>
      <SpeakerGrid speakers={fob2026Speakers} />

      <div className="affil-reference">
        <h3>Affiliation Reference (in alphabetical order)</h3>
        {fob2026AffiliationReference.map(([short, full]) => (
          <div className="affil-item" key={short}>
            <span className="affil-short">{short}</span>
            <span className="affil-full">{full}</span>
          </div>
        ))}
      </div>
    </WorkshopLayout>
  );
}
