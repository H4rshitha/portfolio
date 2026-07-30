import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { content } from '@/data/content';
import './styles/Navbar.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          {content.identity.name}
        </Link>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) =>
            onHome ? (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} to={`/${link.href}`} onClick={closeMenu}>
                {link.label}
              </Link>
            ),
          )}
          <Link to="/my-works" onClick={closeMenu}>
            My Works
          </Link>
        </nav>

        <a
          className="btn btn-primary navbar__resume"
          href={content.identity.resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
