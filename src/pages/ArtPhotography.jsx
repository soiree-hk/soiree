import { artPhotography } from '../data/centers';
import { imagePath } from '../utils/images';
import '../styles/gallery.css';

export default function ArtPhotography() {
  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Photo Gallery</h1>
        {artPhotography.map((item) => (
          <article key={item.title} className="art-gallery-item">
            <img src={imagePath(item.image)} alt={item.title} className="art-gallery-image" loading="lazy" />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </article>
        ))}
        <p className="art-copyright">
          These images are subject to copyright. Please contact Soiree for permission and licensing information.
        </p>
      </div>
    </section>
  );
}
