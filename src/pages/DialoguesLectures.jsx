import EventCard from '../components/EventCard';
import events from '../data/events.json';

export default function DialoguesLectures() {
  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Dialogues/Lectures</h1>
        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
