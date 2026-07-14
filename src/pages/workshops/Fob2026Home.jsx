import { fob2026 } from '../../data/workshops';

export default function Fob2026Home() {
  return (
    <section className="page-section">
      <div className="container prose">
        <h1 className="page-title">{fob2026.title}</h1>
        {fob2026.description.split('\n\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <h3 style={{ marginTop: '2rem' }}>Topics include:</h3>
        <ol>
          {fob2026.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ol>
        <h3 style={{ marginTop: '2rem' }}>Quick Details</h3>
        <ul>
          <li>
            <strong>Date:</strong> {fob2026.dates}
          </li>
          <li>
            <strong>Venue:</strong> {fob2026.venue}
          </li>
        </ul>
        <p style={{ marginTop: '2rem' }}>
          <a
            href={fob2026.moreInfoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            More info
          </a>
        </p>
      </div>
    </section>
  );
}
