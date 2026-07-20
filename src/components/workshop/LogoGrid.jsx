import { imagePath } from '../../utils/images';

export default function LogoGrid({ logos }) {
  return (
    <div className="logo-grid">
      {logos.map((logo) => (
        <img
          key={logo.src}
          src={imagePath(logo.src)}
          alt={logo.alt}
          className={logo.wide ? 'logo-wide' : undefined}
          loading="lazy"
        />
      ))}
    </div>
  );
}
