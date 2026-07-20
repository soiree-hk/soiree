import { imagePath } from '../../utils/images';

export default function CommitteeGrid({ members }) {
  return (
    <div className="committee-grid">
      {members.map((m) => (
        <div className="committee-card" key={m.name}>
          <img src={imagePath(m.img)} alt={m.name} loading="lazy" />
          <span>
            <strong>{m.name}</strong>
            <br />
            {m.role}
            <br />
            {m.org}
          </span>
        </div>
      ))}
    </div>
  );
}
