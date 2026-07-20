import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import ProgramSchedule from '../../components/workshop/ProgramSchedule';
import { fob2026 } from '../../data/workshops';
import { fob2026Program } from '../../data/fob2026Content';

export default function Fob2026Program() {
  return (
    <WorkshopLayout event={fob2026} title="Program">
      <p style={{ marginTop: '-0.75rem', color: 'var(--color-text-muted)' }}>June 28 – 30, 2026</p>
      {fob2026Program.map((day) => (
        <div key={day.day}>
          <h3 className="program-day-title">{day.day}</h3>
          <ProgramSchedule sessions={day.sessions} />
        </div>
      ))}
    </WorkshopLayout>
  );
}
