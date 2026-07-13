import MembershipForm from '../components/MembershipForm';

export default function Membership() {
  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Membership Application</h1>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <MembershipForm />
        </div>
      </div>
    </section>
  );
}
