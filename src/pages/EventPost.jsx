import { useParams, Link } from 'react-router-dom';
import events from '../data/events.json';

export default function EventPost() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <section className="page-section">
        <div className="container prose">
          <h1>Event not found</h1>
          <Link to="/events-dialogs-lectures">← Back to Dialogues/Lectures</Link>
        </div>
      </section>
    );
  }

  const content = event.content
    ?.replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#38;/g, '&');

  return (
    <section className="page-section">
      <div className="container prose">
        <Link to="/events-dialogs-lectures" style={{ fontSize: '0.9rem' }}>
          ← Back to Dialogues/Lectures
        </Link>
        <h1 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>{event.title}</h1>
        <p className="post-meta">{event.pubDate} · {event.category}</p>
        <div className="post-hero">
          <img src={event.image} alt={event.title} />
        </div>
        <div className="post-content">{content}</div>
      </div>
    </section>
  );
}
