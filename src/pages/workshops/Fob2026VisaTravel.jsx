import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import { fob2026 } from '../../data/workshops';
import { fob2026VisaTravel } from '../../data/fob2026GeneralInfo';
import { imagePath } from '../../utils/images';

export default function Fob2026VisaTravel() {
  return (
    <WorkshopLayout event={fob2026} title="Visa and Travel">
      {fob2026VisaTravel.sections.map((section) => (
        <div key={section.heading}>
          <h3 className="workshop-section-title">{section.heading}</h3>
          {section.paragraphs?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {section.bullets && (
            <ul>
              {section.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {section.links && (
            <ul>
              {section.links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <h3 className="workshop-section-title">Attractions</h3>
      <div className="photo-grid">
        {fob2026VisaTravel.attractions.map((src, i) => (
          <img key={src} src={imagePath(src)} alt={`Hong Kong attraction ${i + 1}`} loading="lazy" />
        ))}
      </div>
    </WorkshopLayout>
  );
}
