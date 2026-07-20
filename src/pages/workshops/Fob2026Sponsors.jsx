import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import LogoGrid from '../../components/workshop/LogoGrid';
import { fob2026 } from '../../data/workshops';
import { fob2026Sponsors } from '../../data/fob2026Content';

export default function Fob2026Sponsors() {
  return (
    <WorkshopLayout event={fob2026} title="Sponsors">
      {fob2026Sponsors.rows.map((row, i) => (
        <LogoGrid key={i} logos={row} />
      ))}
    </WorkshopLayout>
  );
}
