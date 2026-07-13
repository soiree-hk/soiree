import { Link } from 'react-router-dom';

export default function Centers() {
  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Centers</h1>
        <div className="events-grid" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Link to="/centers/aiforce" className="event-card">
            <div className="event-card-body" style={{ padding: '2rem' }}>
              <h3>AiForce</h3>
              <p>AI-driven research in chemistry, biology, and technology.</p>
            </div>
          </Link>
          <Link to="/art-center" className="event-card">
            <div className="event-card-body" style={{ padding: '2rem' }}>
              <h3>Art</h3>
              <p>Watercolor paintings and photography gallery.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
