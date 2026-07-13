import { Link } from 'react-router-dom';

export default function ArtCenter() {
  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Welcome to Center of Art</h1>
        <div className="events-grid" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Link to="/art-watercolor" className="event-card">
            <div className="event-card-body" style={{ padding: '2rem' }}>
              <h3>Watercolor</h3>
              <p>Watercolor Painting Gallery</p>
            </div>
          </Link>
          <Link to="/art-photography" className="event-card">
            <div className="event-card-body" style={{ padding: '2rem' }}>
              <h3>Photography</h3>
              <p>Photo Gallery</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
