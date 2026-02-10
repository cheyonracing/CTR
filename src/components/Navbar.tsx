'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/team', label: 'Team' },
    { href: '/schedule', label: 'Calendar' },
    { href: '/news', label: 'News' },
    { href: '/sponsors', label: 'Partners' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="nav-logo" onClick={closeMenu}>
        <Image
          src="/images/logos/CTR_yellow.png"
          alt="Chennai Turbo Riders"
          width={160}
          height={60}
          priority
          style={{ width: '100%', height: 'auto' }}
        />
      </Link>

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((link, i) => (
          <li key={link.href} style={{ animationDelay: menuOpen ? `${i * 0.06}s` : '0s' }}>
            <Link href={link.href} className="nav-link" onClick={closeMenu}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className={`nav-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
