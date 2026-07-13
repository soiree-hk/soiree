import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Contact Us</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          <div>
            <h3>Address</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              13 Leedon Heights #04-46 D&apos;LEEDON<br />
              Singapore 266224<br />
              Email: <a href="mailto:president.soiree@gmail.com">president.soiree@gmail.com</a>
            </p>
            <h3 style={{ marginTop: '2rem' }}>Location</h3>
            <iframe
              title="SOIRÉE Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.789!2d103.789!3d1.318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDE5JzA0LjgiTiAxMDPCsDQ3JzIwLjQiRQ!5e0!3m2!1sen!2ssg!4v1"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '6px' }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div>
            <h3>Leave a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
