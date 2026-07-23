import { imagePath } from '../../utils/images';

export default function PhotoGrid({ photos, alt = 'Event photo', fit = 'cover' }) {
  return (
    <div className={`photo-grid${fit === 'contain' ? ' photo-grid--contain' : ''}`}>
      {photos.map((src, i) => (
        <img key={src} src={imagePath(src)} alt={`${alt} ${i + 1}`} loading="lazy" />
      ))}
    </div>
  );
}
