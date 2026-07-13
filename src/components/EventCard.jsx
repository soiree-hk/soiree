import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  const excerpt = event.excerpt?.replace(/&#38;/g, '&') || '';

  return (
    <Link to={`/post/${event.slug}`} className="event-card">
      <img src={event.image} alt="" loading="lazy" />
      <div className="event-card-body">
        <h3>{event.title}</h3>
        <p>{excerpt}</p>
      </div>
    </Link>
  );
}
