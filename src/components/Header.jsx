import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data/navigation';
import '../styles/header.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="site-header">
      <div className="header-top">
        <Link to="/" className="logo-link" onClick={() => setMobileOpen(false)}>
          <img src="/images/logo.jpg" alt="SOIRÉE" className="logo-img" />
          <span className="logo-text">Society of Interdisciplinary Research</span>
        </Link>
      </div>

      <div className="header-mobile-bar">
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className="header-nav-bar nav-desktop" aria-label="Main navigation">
        {navItems.map((item) => (
          <div key={item.path} className="nav-item">
            <Link
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
            {item.children && (
              <div className="nav-dropdown">
                {item.children.map((child) => (
                  <Link key={child.path} to={child.path}>
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <nav className={`nav-mobile ${mobileOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        {navItems.map((item) => (
          <div key={item.path}>
            <Link to={item.path} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
            {item.children?.map((child) => (
              <Link
                key={child.path}
                to={child.path}
                className="sub-link"
                onClick={() => setMobileOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </header>
  );
}
