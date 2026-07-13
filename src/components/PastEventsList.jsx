import { Link } from 'react-router-dom';

export default function PastEventsList({ events }) {
  return (
    <div className="past-events-list">
      {events.map((event) => (
        <div key={event.slug} className="past-event-item">
          <img src={event.image} alt="" loading="lazy" />
          <Link to={`/post/${event.slug}`}>{event.title}</Link>
        </div>
      ))}
    </div>
  );
}
