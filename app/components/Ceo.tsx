import Image from "next/image";
import "../styles/ceo.css";

// Founder portrait from Unsplash (host allowed in next.config.ts).
// Pre-cropped to the arch's 4:5 shape and zoomed slightly so her face and jewelry sit in the arch.
const FOUNDER_PHOTO =
  "https://images.unsplash.com/photo-1592621385612-4d7129426394?w=1000&h=1250&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.36&fp-z=1.2&q=80";

const STATS = [
  { value: "12", suffix: "+", label: "Years of craft" },
  { value: "300", suffix: "+", label: "Original designs" },
  { value: "15", suffix: "", label: "Boutiques worldwide" },
];

export default function Ceo() {
  return (
    <section id="about" className="ceo" aria-labelledby="ceo-title">
      <div className="ceo__inner">
        {/* Portrait in an arch frame */}
        <div className="ceo__visual">
          <div className="ceo__glow" aria-hidden="true" />
          <div className="ceo__arch">
            <Image
              src={FOUNDER_PHOTO}
              alt="Sofia Laurent, founder of Opal, smiling on a cream sofa wearing a delicate necklace, bracelet and ring"
              fill
              sizes="(max-width: 900px) 90vw, 40vw"
              className="ceo__img"
            />
          </div>
        </div>

        {/* Story */}
        <div className="ceo__content">
          <p className="ceo__eyebrow">Meet the Founder</p>

          <h2 id="ceo-title" className="ceo__title">
            The heart behind
            <br />
            <em>every</em> piece
          </h2>

          <p className="ceo__text">
            Opal began at a small studio table with one belief: fine jewelry should feel personal. Every design is
            sketched by hand, refined over weeks, and finished by artisans who care about the details as much as you
            do.
          </p>

          <blockquote className="ceo__quote">
            <p>I design for the moments you&rsquo;ll want to remember &mdash; the quiet ones as much as the grand ones.</p>
            <footer className="ceo__author">
              <span className="ceo__name">Sofia Laurent</span>
              <span className="ceo__role">Founder &amp; Creative Director</span>
            </footer>
          </blockquote>

          <dl className="ceo__stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="ceo__stat">
                <dt className="ceo__stat-label">{stat.label}</dt>
                <dd className="ceo__stat-value">
                  {stat.value}
                  {stat.suffix && <span className="ceo__stat-suffix">{stat.suffix}</span>}
                </dd>
              </div>
            ))}
          </dl>

          <div className="ceo__actions">
            <a href="#about" className="ceo__btn">
              Read Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
