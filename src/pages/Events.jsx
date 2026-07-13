import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Events</h1>
        <div className="events-grid" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Link to="/events-dialogs-lectures" className="event-card">
            <div className="event-card-body" style={{ padding: '2rem' }}>
              <h3>Dialogues/Lectures</h3>
              <p>SOIRÉE Dialogue with Distinguished Scientists and lecture series.</p>
            </div>
          </Link>
          <Link to="/workshops" className="event-card">
            <div className="event-card-body" style={{ padding: '2rem' }}>
              <h3>Workshops</h3>
              <p>International workshops on functional materials, nucleic acids, and more.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
