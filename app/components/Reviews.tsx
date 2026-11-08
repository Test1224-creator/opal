"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import "../styles/reviews.css";

type Review = {
  name: string;
  location: string;
  product: string;
  quote: string;
  photo: string;
};

const unsplash = (id: string) => `https://images.unsplash.com/${id}?w=240&h=240&fit=crop&crop=faces&q=75`;

const REVIEWS: Review[] = [
  {
    name: "Clara Whitmore",
    location: "London",
    product: "Laurel Wrap Ring",
    quote:
      "Three months of wearing it every single day and it still shines like the morning it arrived. It has quietly become my signature piece.",
    photo: unsplash("photo-1438761681033-6461ffad8d80"),
  },
  {
    name: "Isabella Moreno",
    location: "Madrid",
    product: "Marquise Hoop Earrings",
    quote:
      "I bought these for my sister's birthday and ordered a second pair for myself the very next day. Pure, effortless elegance.",
    photo: unsplash("photo-1494790108377-be9c29b29330"),
  },
  {
    name: "Daniel Park",
    location: "Seoul",
    product: "Lumière Drop Earrings",
    quote:
      "I'm hopeless at choosing gifts, but the Opal team guided me patiently. My wife hasn't taken them off since our anniversary.",
    photo: unsplash("photo-1507003211169-0a1dd7228f2d"),
  },
  {
    name: "Amara Okafor",
    location: "Lagos",
    product: "Petal Station Bracelet",
    quote:
      "Customer care resized my bracelet in just two days, with a handwritten note in the box. It's rare to find a brand this thoughtful.",
    photo: unsplash("photo-1531123897727-8f129e1688ce"),
  },
  {
    name: "Elena Rossi",
    location: "Milan",
    product: "Aurora Chain Earring",
    quote:
      "Delicate, but far sturdier than it looks. The packaging alone felt like opening a gift, and the compliments haven't stopped.",
    photo: unsplash("photo-1544005313-94ddf0286df2"),
  },
  {
    name: "Nadia Hassan",
    location: "Dubai",
    product: "Twist Pavé Ring",
    quote:
      "Fine jewelry that finally feels within reach. The pavé catches the light from every angle, even under the softest lamp.",
    photo: unsplash("photo-1580489944761-15a19d654956"),
  },
];

const AUTOPLAY_MS = 6000;

function Star() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path d="M12 2.8l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 16.8l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 2.8Z" />
    </svg>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {direction === "left" ? <path d="M19 12H5M11 6l-6 6 6 6" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
    </svg>
  );
}

/** Position of a card relative to the active one, wrapped so the carousel loops. */
function relativePosition(index: number, active: number, total: number) {
  let offset = (((index - active) % total) + total) % total;
  if (offset > total / 2) offset -= total;
  return offset;
}

export default function Reviews() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = REVIEWS.length;

  const go = useCallback((step: number) => setActive((current) => (current + step + total) % total), [total]);

  // Autoplay, paused on hover/focus and for people who prefer reduced motion
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, go, active]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <section className="reviews" aria-labelledby="reviews-title">
      <header className="reviews__header">
        <p className="reviews__eyebrow">Kind Words</p>
        <h2 id="reviews-title" className="reviews__title">
          Loved by the <em>Opal</em> circle
        </h2>
        <p className="reviews__subtitle">Real stories from the people who wear Opal every day.</p>
      </header>

      <div
        className="reviews__stage"
        role="region"
        aria-roledescription="carousel"
        aria-label="Customer reviews"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {REVIEWS.map((review, i) => {
          const pos = relativePosition(i, active, total);
          const isActive = pos === 0;
          const isSide = Math.abs(pos) === 1;

          return (
            <article
              key={review.name}
              className="reviews__card"
              data-pos={Math.max(-2, Math.min(2, pos))}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
              aria-hidden={!isActive}
              onClick={isSide ? () => go(pos) : undefined}
            >
              <div className="reviews__card-top">
                <span className="reviews__avatar">
                  <Image src={review.photo} alt={review.name} width={72} height={72} className="reviews__avatar-img" />
                </span>
                <div className="reviews__person">
                  <span className="reviews__name">{review.name}</span>
                  <span className="reviews__location">{review.location}</span>
                </div>
                <div className="reviews__stars" role="img" aria-label="Rated 5 out of 5">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>

              <blockquote className="reviews__quote">
                <p>{review.quote}</p>
              </blockquote>

              <p className="reviews__product">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                Verified purchase &middot; <span>{review.product}</span>
              </p>
            </article>
          );
        })}
      </div>

      <div className="reviews__controls">
        <button type="button" className="reviews__arrow" aria-label="Previous review" onClick={() => go(-1)}>
          <Arrow direction="left" />
        </button>

        <div className="reviews__dots">
          {REVIEWS.map((review, i) => (
            <button
              key={review.name}
              type="button"
              className={`reviews__dot${i === active ? " reviews__dot--active" : ""}`}
              aria-label={`Show review ${i + 1}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <button type="button" className="reviews__arrow" aria-label="Next review" onClick={() => go(1)}>
          <Arrow direction="right" />
        </button>
      </div>
    </section>
  );
}
