"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../images/logo.webp";
import "../styles/navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "#shop" },
  { label: "Rings", href: "#shop" },
  { label: "Earrings", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function SearchIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="11" cy="11" r="7.5" />
      <path d="m20.5 20.5-4.2-4.2" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.7 3.8 4.5 7.2 4.5c2 0 3.5 1.1 4.8 2.9 1.3-1.8 2.8-2.9 4.8-2.9 3.4 0 5.6 3.2 4.4 6.6-1.7 4.8-9.2 9.4-9.2 9.4Z" />
    </svg>
  );
}

function CompareIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 8.5h14.5M15 5l3.5 3.5L15 12" />
      <path d="M20 15.5H5.5M9 12l-3.5 3.5L9 19" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3.5 9h17l-1.6 10.2a2 2 0 0 1-2 1.8H7.1a2 2 0 0 1-2-1.8L3.5 9Z" />
      <path d="M8.5 9 11 3.5M15.5 9 13 3.5" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20.5c.8-3.6 3.8-5.5 7.5-5.5s6.7 1.9 7.5 5.5" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <Link href="/" className="navbar__logo" aria-label="Opal home">
          <Image src={logo} alt="Opal" priority className="navbar__logo-img" />
        </Link>

        <ul className={`navbar__links${menuOpen ? " navbar__links--open" : ""}`}>
          {NAV_LINKS.map((link, i) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`navbar__link${i === 0 ? " navbar__link--active" : ""}`}
                aria-current={i === 0 ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button type="button" className="navbar__icon" aria-label="Search">
            <SearchIcon />
          </button>
          <button type="button" className="navbar__icon navbar__icon--hide-sm" aria-label="Wishlist, 5 items">
            <HeartIcon />
            <span className="navbar__badge">5</span>
          </button>
          <button type="button" className="navbar__icon navbar__icon--hide-sm" aria-label="Compare">
            <CompareIcon />
          </button>
          <button type="button" className="navbar__icon" aria-label="Cart, 5 items">
            <BagIcon />
            <span className="navbar__badge">5</span>
          </button>
          <button type="button" className="navbar__icon navbar__icon--hide-sm" aria-label="Account">
            <UserIcon />
          </button>
          <button
            type="button"
            className={`navbar__toggle${menuOpen ? " navbar__toggle--open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
