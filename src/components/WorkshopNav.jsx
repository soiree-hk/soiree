import { Link, useLocation } from 'react-router-dom';

export default function WorkshopNav({ items }) {
  const location = useLocation();

  return (
    <nav className="workshop-nav" aria-label="Workshop navigation">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={location.pathname === item.path ? 'active' : ''}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
