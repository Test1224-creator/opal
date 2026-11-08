import Image from "next/image";
import heroModel from "../images/hero-model.png";
import heroScene from "../images/herosection.png";
import "../styles/hero.css";

function Sparkle({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 0C53 30 70 47 100 50C70 53 53 70 50 100C47 70 30 53 0 50C30 47 47 30 50 0Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__ring" aria-hidden="true" />
      <Sparkle className="hero__sparkle hero__sparkle--soft" />
      <Sparkle className="hero__sparkle hero__sparkle--gold" />

      <h1 id="hero-title" className="hero__title">
        Jewellery
      </h1>

      <div className="hero__model">
        <Image
          src={heroModel}
          alt="Model wearing an Opal diamond necklace, earrings, ring and bracelet"
          priority
          sizes="(max-width: 768px) 90vw, 50vw"
          className="hero__model-img"
        />
      </div>

      <div className="hero__price">
        <span className="hero__amount">199.00</span>
        <span className="hero__label">Luxury Jewellery</span>
      </div>

      <button type="button" className="hero__play">
        <span className="hero__play-btn" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
          </svg>
        </span>
        <span className="hero__play-text">
          Play
          <br />
          Overview
        </span>
      </button>

      <div className="hero__card">
        <div className="hero__card-img">
          <Image
            src={heroScene}
            alt="Model in a pearl satin drape wearing Opal diamonds"
            sizes="180px"
            fill
            className="hero__card-photo"
          />
        </div>
        <p className="hero__card-text">
          Time to make
          <br />
          somebody
          <br />
          happy
        </p>
      </div>
    </section>
  );
}
