import HeroCarousel, { PastEventsGrid } from '../components/HeroCarousel';
import events from '../data/events.json';
import '../styles/home.css';

export default function Home() {
  const carouselSlides = events.slice(0, 9);

  return (
    <div className="home-page">
      <section className="home-welcome">
        <h1>Welcome to SOIRÉE!</h1>
      </section>

      <HeroCarousel slides={carouselSlides} />

      <section className="home-section">
        <div className="container">
          <h2 className="home-section-title">Upcoming Events</h2>
          <div className="upcoming-box">
            <h3>Please stay tuned</h3>
          </div>
        </div>
      </section>

      <section className="home-section home-section-alt">
        <div className="container">
          <h2 className="home-section-title">Past Events</h2>
          <PastEventsGrid events={events} />
        </div>
      </section>
    </div>
  );
}
