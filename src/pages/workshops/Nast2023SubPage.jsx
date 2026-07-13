import WorkshopNav from '../../components/WorkshopNav';
import { nast2023 } from '../../data/workshops';

export default function Nast2023SubPage({ title, children }) {
  return (
    <section className="page-section">
      <div className="container prose">
        <h1 className="page-title">{nast2023.title}</h1>
        <WorkshopNav items={nast2023.nav} />
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
