import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import { viii2026 } from '../../data/workshops';
import { viii2026Content } from '../../data/viii2026Content';

export default function Viii2026Photos() {
  const { photos } = viii2026Content;
  return (
    <WorkshopLayout event={viii2026} title="Symposium Photos">
      <p>{photos.intro}</p>
      <p className="text-center" style={{ margin: '2rem 0' }}>
        <a
          className="workshop-button"
          href={photos.driveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Photos
        </a>
      </p>
    </WorkshopLayout>
  );
}
