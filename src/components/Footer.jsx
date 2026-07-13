import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/logo.jpg" alt="SOIRÉE" />
            <p>Promoting interdisciplinary activities across continents</p>
          </div>

          <div>
            <h4 className="footer-heading">Stay connected</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/news">News</Link>
              <Link to="/events">Events</Link>
              <Link to="/centers">Centers</Link>
              <Link to="/membership">Membership</Link>
            </div>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Feel free to contact us.</h4>
            <a href="mailto:president.soiree@gmail.com">president.soiree@gmail.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>These images are subject to copyright. Please contact Soiree for permission and licensing information.</p>
          <p>© Society of Interdisciplinary Research - SOIRÉE</p>
        </div>
      </div>
    </footer>
  );
}
