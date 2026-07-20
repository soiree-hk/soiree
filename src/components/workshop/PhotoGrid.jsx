import { imagePath } from '../../utils/images';

export default function PhotoGrid({ photos, alt = 'Event photo' }) {
  return (
    <div className="photo-grid">
      {photos.map((src, i) => (
        <img key={src} src={imagePath(src)} alt={`${alt} ${i + 1}`} loading="lazy" />
      ))}
    </div>
  );
}
