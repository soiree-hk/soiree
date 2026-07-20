import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import { fob2026 } from '../../data/workshops';

export default function Fob2026Home() {
  return (
    <WorkshopLayout event={fob2026}>
      {fob2026.description.split('\n\n').map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <h3 className="workshop-section-title">Topics include:</h3>
      <ol>
        {fob2026.topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ol>

      <h3 className="workshop-section-title">Quick Details</h3>
      <ul>
        <li>
          <strong>Date:</strong> {fob2026.dates}
        </li>
        <li>
          <strong>Venue:</strong> {fob2026.venue}
        </li>
      </ul>
    </WorkshopLayout>
  );
}
