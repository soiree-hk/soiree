import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import { fob2026 } from '../../data/workshops';
import { fob2026Accommodation } from '../../data/fob2026GeneralInfo';
import { imagePath } from '../../utils/images';

export default function Fob2026Accommodation() {
  const { intro, onCampus, offCampus, moreUrl } = fob2026Accommodation;
  return (
    <WorkshopLayout event={fob2026} title="Accommodations">
      <p>{intro}</p>

      <h3 className="workshop-section-title">On Campus</h3>
      <img
        src={imagePath(onCampus.image)}
        alt="Conference Lodge"
        style={{ width: '100%', maxWidth: '480px', borderRadius: '6px' }}
      />
      <p>{onCampus.description}</p>
      <p>
        <strong style={{ marginRight: '1rem' }}>{onCampus.price}</strong>
        <a
          className="workshop-button"
          href={onCampus.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </p>
      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{onCampus.declaration}</p>

      <h3 className="workshop-section-title">Off-campus</h3>
      <ul>
        {offCampus.map((hotel) => (
          <li key={hotel}>{hotel}</li>
        ))}
      </ul>
      <p>
        More hotel options can be found at the{' '}
        <a href={moreUrl} target="_blank" rel="noopener noreferrer">
          Hong Kong Tourism Board's website
        </a>
        .
      </p>
    </WorkshopLayout>
  );
}
