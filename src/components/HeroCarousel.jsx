import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { imagePath } from '../utils/images';
import '../styles/components.css';

export default function HeroCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const decode = (text) => text?.replace(/&#38;/g, '&').replace(/&amp;/g, '&') || '';

  return (
    <section className="hero-carousel" aria-label="Featured events">
      <div className="hero-track">
        {slides.map((slide, index) => (
          <div
            key={slide.slug}
            className={`hero-slide ${index === current ? 'active' : ''}`}
            aria-hidden={index !== current}
          >
            <img src={imagePath(slide.image)} alt={slide.title} />
            <div className="hero-overlay">
              <div className="hero-caption">
                <h2>{slide.title}</h2>
                <p>{decode(slide.excerpt).slice(0, 200)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="hero-arrow hero-arrow-left" onClick={prev} aria-label="Previous slide">
        ‹
      </button>
      <button type="button" className="hero-arrow hero-arrow-right" onClick={next} aria-label="Next slide">
        ›
      </button>

      <div className="hero-counter">{current + 1}/{total}</div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-dot ${index === current ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}

export function PastEventsGrid({ events }) {
  return (
    <div className="past-events-grid">
      {events.map((event) => (
        <Link key={event.slug} to={`/post/${event.slug}`} className="past-event-card">
          <div className="past-event-image">
            <img src={imagePath(event.image)} alt="" loading="lazy" />
          </div>
          <p className="past-event-title">{event.title}</p>
        </Link>
      ))}
    </div>
  );
}
