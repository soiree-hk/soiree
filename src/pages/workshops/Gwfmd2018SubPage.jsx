import WorkshopNav from '../../components/WorkshopNav';
import { gwfmd2018 } from '../../data/workshops';

export default function Gwfmd2018SubPage({ title, children }) {
  return (
    <section className="page-section">
      <div className="container prose">
        <h1 className="page-title">{gwfmd2018.title}</h1>
        <WorkshopNav items={gwfmd2018.nav} />
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
