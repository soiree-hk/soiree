import { newsItems } from '../data/news';

export default function News() {
  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">News</h1>
        {newsItems.map((item) => (
          <article key={item.title} className="news-item">
            <p className="news-date">{item.date}</p>
            <h3>{item.title}</h3>
            <div className="prose">
              {item.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
