import { Link } from 'react-router-dom';
import { workshops } from '../data/workshops';
import { imagePath } from '../utils/images';

export default function Workshops() {
  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Workshops</h1>
        <div className="events-grid">
          {workshops.map((ws) => (
            <Link key={ws.id} to={ws.path} className="event-card">
              <img src={imagePath(ws.image)} alt={ws.title} loading="lazy" />
              <div className="event-card-body">
                <h3>{ws.title}</h3>
                <p>{ws.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
