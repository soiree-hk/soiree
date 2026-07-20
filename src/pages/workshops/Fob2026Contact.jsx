import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import { fob2026 } from '../../data/workshops';
import { fob2026Contact } from '../../data/fob2026Content';

export default function Fob2026Contact() {
  return (
    <WorkshopLayout event={fob2026} title="Contact Us">
      <p>If you have any questions about the workshop, feel free to get in touch with us:</p>
      <h3 className="workshop-section-title">Contact</h3>
      <p>
        <strong>{fob2026Contact.name}</strong>
        <br />
        Email: <a href={`mailto:${fob2026Contact.email}`}>{fob2026Contact.email}</a>
      </p>
    </WorkshopLayout>
  );
}
