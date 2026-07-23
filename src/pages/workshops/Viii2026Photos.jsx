import WorkshopLayout from '../../components/workshop/WorkshopLayout';
import PhotoGrid from '../../components/workshop/PhotoGrid';
import { viii2026 } from '../../data/workshops';
import { viii2026Content } from '../../data/viii2026Content';

export default function Viii2026Photos() {
  const { photos } = viii2026Content;
  return (
    <WorkshopLayout event={viii2026} title="Symposium Photos">
      <p>{photos.intro}</p>

      <h3 className="workshop-section-title">Posters</h3>
      <PhotoGrid
        photos={photos.posters}
        alt="8th Biophysics Symposium poster"
        fit="contain"
      />

      <h3 className="workshop-section-title">Event Photos</h3>
      <PhotoGrid photos={photos.list} alt="8th Biophysics Symposium photo" />
    </WorkshopLayout>
  );
}
