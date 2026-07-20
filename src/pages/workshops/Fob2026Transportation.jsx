import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import { fob2026 } from '../../data/workshops';
import { fob2026Transportation } from '../../data/fob2026GeneralInfo';
import { imagePath } from '../../utils/images';

export default function Fob2026Transportation() {
  const { campusImage, locationMap, intro, routes, publicTransport, note } =
    fob2026Transportation;
  return (
    <WorkshopLayout event={fob2026} title="Getting to HKUST">
      <img
        src={imagePath(campusImage)}
        alt="HKUST campus"
        style={{ width: '100%', borderRadius: '6px', marginBottom: '1rem' }}
      />
      <p>{intro}</p>

      {routes.map((route) => (
        <div key={route.heading}>
          <h3 className="workshop-section-title">{route.heading}</h3>
          <ul>
            {route.options.map((opt) => (
              <li key={opt}>{opt}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3 className="workshop-section-title">Public Transport to HKUST</h3>
      <ul>
        {publicTransport.map((t) => (
          <li key={t.url}>
            {t.label}:{' '}
            <a href={t.url} target="_blank" rel="noopener noreferrer">
              {t.url}
            </a>
          </li>
        ))}
      </ul>
      <p>{note}</p>

      <img
        src={imagePath(locationMap)}
        alt="HKUST location map"
        style={{ width: '100%', borderRadius: '6px', marginTop: '1rem' }}
      />
    </WorkshopLayout>
  );
}
