import { imagePath } from '../../utils/images';

export default function SpeakerGrid({ speakers, keynote = false }) {
  return (
    <div className={`speaker-grid${keynote ? ' keynote' : ''}`}>
      {speakers.map((s) => (
        <div className="speaker-card" key={s.name}>
          <img src={imagePath(s.img)} alt={s.name} loading="lazy" />
          <span className="speaker-name">
            {s.title ? `${s.title} ${s.name}` : s.name}
          </span>
          <span className="speaker-affil">{s.affiliation || s.affil}</span>
        </div>
      ))}
    </div>
  );
}
