import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const links = [
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Calendario', href: '#calendario' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'News', href: '#news' },
  { label: 'Shop', href: '#shop' },
  { label: 'Download', href: '#download' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} ref={menuRef} id="navbar">
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo" aria-label="Gradino61 home">
          <img src="./logo_principale.png" alt="Gradino61 logo" height="36" />
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="navbar__link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} color="var(--black)" /> : <Menu size={24} color="var(--black)" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} role="dialog" aria-label="Menu mobile">
        <ul role="list">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="navbar__mobile-link" onClick={handleLinkClick}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
