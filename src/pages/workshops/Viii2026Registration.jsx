import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import { viii2026 } from '../../data/workshops';
import { viii2026Content } from '../../data/viii2026Content';

export default function Viii2026Registration() {
  const { registration } = viii2026Content;
  return (
    <WorkshopLayout event={viii2026} title="Registration">
      <p>{registration.intro}</p>
      <p>{registration.fee}</p>
      <p>{registration.deadline}</p>

      <p className="text-center" style={{ margin: '2rem 0' }}>
        <a
          className="workshop-button"
          href={registration.formUrl}
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
          <a href={`mailto:${registration.contactEmail}`}>{registration.contactEmail}</a>
        </strong>
      </p>
    </WorkshopLayout>
  );
}
