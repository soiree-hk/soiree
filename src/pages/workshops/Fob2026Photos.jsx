import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import PhotoGrid from '../../components/workshop/PhotoGrid';
import { fob2026 } from '../../data/workshops';
import { fob2026Photos } from '../../data/fob2026Content';

export default function Fob2026Photos() {
  return (
    <WorkshopLayout event={fob2026} title="Photos">
      <p>{fob2026Photos.intro}</p>

      <h3 className="workshop-section-title">Day 1 Photos</h3>
      <PhotoGrid photos={fob2026Photos.day1} alt="FOB 2026 Day 1 photo" />

      <h3 className="workshop-section-title">Day 2 Photos</h3>
      <PhotoGrid photos={fob2026Photos.day2} alt="FOB 2026 Day 2 photo" />

      <p className="text-center" style={{ margin: '2rem 0' }}>
        <a
          className="workshop-button"
          href={fob2026Photos.driveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View More Photos
        </a>
      </p>

      <p>
        If you have trouble viewing any photo, please contact the organizing committee at:
        <br />
        <strong>
          <a href={`mailto:${fob2026Photos.contactEmail}`}>{fob2026Photos.contactEmail}</a>
        </strong>
      </p>
    </WorkshopLayout>
  );
}
