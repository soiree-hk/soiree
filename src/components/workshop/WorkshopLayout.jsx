import WorkshopNav from '../WorkshopNav';
import { imagePath } from '../../utils/images';
import '../../styles/workshop.css';

export default function WorkshopLayout({ event, title, children }) {
  return (
    <section className="page-section">
      <div className="container prose">
        {event.banner && (
          <img className="workshop-banner" src={imagePath(event.banner)} alt={event.title} />
        )}
        <h1 className="page-title">{event.title}</h1>
        {event.subtitle && <p className="workshop-subtitle">{event.subtitle}</p>}
        <WorkshopNav items={event.nav} />
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
}
