import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import { fob2026 } from '../../data/workshops';
import { fob2026Registration } from '../../data/fob2026Content';

export default function Fob2026Registration() {
  return (
    <WorkshopLayout event={fob2026} title="Workshop Registration">
      <p>{fob2026Registration.intro}</p>
      <p>{fob2026Registration.note}</p>

      <p className="text-center" style={{ margin: '2rem 0' }}>
        <a
          className="workshop-button"
          href={fob2026Registration.formUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Now
        </a>
      </p>

      <p>
        If you have questions about registration or encounter issues with the form, feel free to
        contact the organizing committee at:
        <br />
        <strong>
          <a href={`mailto:${fob2026Registration.contactEmail}`}>
            {fob2026Registration.contactEmail}
          </a>
        </strong>
      </p>
    </WorkshopLayout>
  );
}
