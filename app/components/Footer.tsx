"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import ring from "../images/footer.png";
import logo from "../images/logo.png";
import "../styles/footer.css";

const SHOP_LINKS = [
  { label: "New Arrivals", href: "#shop" },
  { label: "Rings", href: "#shop" },
  { label: "Earrings", href: "#shop" },
  { label: "Bracelets", href: "#shop" },
  { label: "Gift Cards", href: "#shop" },
];

const CARE_LINKS = [
  { label: "Our Story", href: "#about" },
  { label: "Boutiques", href: "#stores" },
  { label: "Shipping & Returns", href: "#contact" },
  { label: "Ring Size Guide", href: "#contact" },
  { label: "Jewelry Care", href: "#contact" },
];

const LEGAL_LINKS = ["Privacy", "Terms", "Cookies"];

function Sparkle({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 0C53 30 70 47 100 50C70 53 53 70 50 100C47 70 30 53 0 50C30 47 47 30 50 0Z" />
    </svg>
  );
}

const socialIcon = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  // Portfolio demo: no backend, just confirm on screen
  const onSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setJoined(true);
    setEmail("");
  };

  return (
    <footer id="contact" className="footer">
      {/* ---------- Seasonal promo banner ---------- */}
      <div className="promo">
        <div className="promo__content">
          <p className="promo__eyebrow">Limited Season</p>
          <h2 className="promo__title">
            The <em>Winter Glow</em> Edit
          </h2>
          <p className="promo__text">
            Hand-picked pieces for the season of celebrations, now 20% off for a few weeks only.
          </p>
          <div className="promo__actions">
            <a href="#shop" className="promo__btn">
              Shop the Edit
            </a>
            <span className="promo__code">
              Code <strong>GLOW20</strong>
            </span>
          </div>
        </div>

        <div className="promo__visual" aria-hidden="true">
          <div className="promo__glow" />
          <Sparkle className="promo__sparkle promo__sparkle--1" />
          <Sparkle className="promo__sparkle promo__sparkle--2" />
          <Sparkle className="promo__sparkle promo__sparkle--3" />
          <Image src={ring} alt="" sizes="(max-width: 860px) 80vw, 40vw" className="promo__ring" />
        </div>
      </div>

      {/* ---------- Footer links ---------- */}
      <div className="footer__main">
        <div className="footer__brand">
          <Image src={logo} alt="Opal" className="footer__logo" />
          <p className="footer__tagline">Fine jewelry with an iridescent soul, designed to be worn every day.</p>

          <form className="footer__form" onSubmit={onSubscribe}>
            <label htmlFor="footer-email" className="footer__form-label">
              Join the Opal circle for early access and 10% off your first order
            </label>
            {joined ? (
              <p className="footer__form-thanks" role="status">
                Thank you! You&rsquo;re on the list.
              </p>
            ) : (
              <div className="footer__form-row">
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer__input"
                />
                <button type="submit" className="footer__submit" aria-label="Subscribe">
                  <svg {...socialIcon}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            )}
          </form>
        </div>

        <nav className="footer__col" aria-label="Shop">
          <h3 className="footer__heading">Shop</h3>
          <ul className="footer__list">
            {SHOP_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Client care">
          <h3 className="footer__heading">Client Care</h3>
          <ul className="footer__list">
            {CARE_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3 className="footer__heading">Concierge</h3>
          <ul className="footer__list footer__list--contact">
            <li>
              <a href="mailto:concierge@opal-jewelry.com">concierge@opal-jewelry.com</a>
            </li>
            <li>
              <a href="tel:+33140001818">+33 1 40 00 18 18</a>
            </li>
            <li className="footer__hours">
              Mon – Sat · 10:00 – 19:30
              <br />
              Sunday · by appointment
            </li>
          </ul>

          <div className="footer__social">
            <a href="#contact" aria-label="Instagram">
              <svg {...socialIcon}>
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
              </svg>
            </a>
            <a href="#contact" aria-label="Pinterest">
              <svg {...socialIcon}>
                <circle cx="12" cy="12" r="8.5" />
                <path d="M11 8.5c2.5-.6 4.5.8 4.5 3 0 2.3-1.6 3.8-3.3 3.3-.9-.3-1.2-1-1.2-1M11.8 9.5 9.5 20" />
              </svg>
            </a>
            <a href="#contact" aria-label="Facebook">
              <svg {...socialIcon}>
                <path d="M14.5 8.5h2V5h-2.5A3.5 3.5 0 0 0 10.5 8.5V11H8v3.5h2.5V21H14v-6.5h2.5L17 11h-3V9a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="footer__bottom">
        <p className="footer__copy">&copy; 2026 Opal Fine Jewelry. All rights reserved.</p>
        <ul className="footer__legal">
          {LEGAL_LINKS.map((label) => (
            <li key={label}>
              <a href="#contact">{label}</a>
            </li>
          ))}
        </ul>
        <ul className="footer__pay" aria-label="Accepted payments">
          {["Visa", "Mastercard", "Amex", "PayPal"].map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
