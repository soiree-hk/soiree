import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import ProgramSchedule from '../../components/workshop/ProgramSchedule';
import { viii2026 } from '../../data/workshops';
import { viii2026Content } from '../../data/viii2026Content';

export default function Viii2026Program() {
  return (
    <WorkshopLayout event={viii2026} title="Program">
      <p style={{ textAlign: 'right', color: 'var(--color-text-muted)' }}>
        {viii2026Content.programDate}
      </p>
      <ProgramSchedule sessions={viii2026Content.program} />
      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
        Sessions III &amp; IV run in parallel across venues LT-G and LT-F, with a shared poster
        session and tea break.
      </p>
    </WorkshopLayout>
  );
}
