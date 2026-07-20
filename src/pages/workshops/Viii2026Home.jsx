import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import { viii2026 } from '../../data/workshops';
import { viii2026Content } from '../../data/viii2026Content';
import { imagePath } from '../../utils/images';

export default function Viii2026Home() {
  return (
    <WorkshopLayout event={viii2026}>
      {viii2026.description.split('\n\n').map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <h3 className="workshop-section-title">Quick Details</h3>
      <ul>
        <li>
          <strong>Date:</strong> {viii2026.date}
        </li>
        <li>
          <strong>Venue:</strong> {viii2026.venue}
        </li>
      </ul>

      <p>
        <a href={viii2026Content.venueMapLink} target="_blank" rel="noopener noreferrer">
          <img
            src={imagePath(viii2026Content.venueMap)}
            alt="Venue map"
            style={{ width: '300px', maxWidth: '100%', borderRadius: '6px' }}
          />
        </a>
        <br />
        <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
          Click the map to get the high resolution version
        </span>
      </p>

      <p>
        <strong>Contact Email:</strong>{' '}
        <a href={`mailto:${viii2026.contactEmail}`}>{viii2026.contactEmail}</a>
      </p>
    </WorkshopLayout>
  );
}
