"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import collection1 from "../images/collection1.png";
import collection2 from "../images/collection2.png";
import collection3 from "../images/collection3.png";
import collection4 from "../images/collection4.png";
import collection5 from "../images/collection5.png";
import collection6 from "../images/collection6.png";
import "../styles/collections.css";

type Product = {
  name: string;
  price: string;
  image: StaticImageData;
  alt: string;
};

const PRODUCTS: Product[] = [
  {
    name: "Aurora Chain Earring",
    price: "$38.95",
    image: collection1,
    alt: "Gold stud earring with a round crystal, double chain and marquise leaf cuff",
  },
  {
    name: "Twist Pavé Ring",
    price: "$39.00",
    image: collection2,
    alt: "Gold twisted ring with a pavé crystal band",
  },
  {
    name: "Laurel Wrap Ring",
    price: "$41.40",
    image: collection3,
    alt: "Gold double-band wrap ring with pavé crystals and a marquise leaf",
  },
  {
    name: "Marquise Hoop Earrings",
    price: "$65.00",
    image: collection4,
    alt: "Pair of gold open hoop earrings set with marquise crystals",
  },
  {
    name: "Lumière Drop Earrings",
    price: "$58.00",
    image: collection5,
    alt: "Pair of gold pavé huggie earrings with crystal leaf and pear drops",
  },
  {
    name: "Petal Station Bracelet",
    price: "$72.00",
    image: collection6,
    alt: "Gold beaded chain bracelet with a marquise crystal flower",
  },
];

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {direction === "left" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
    </svg>
  );
}

export default function Collections() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(".collections__item");
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <section id="shop" className="collections" aria-labelledby="collections-title">
      <header className="collections__header">
        <h2 id="collections-title" className="collections__title">
          Explore <em>Our</em> Collections
        </h2>
        <p className="collections__subtitle">Discover the perfect jewelry to complement your style.</p>
      </header>

      <div className="collections__slider">
        <ul ref={trackRef} className="collections__track" onScroll={updateArrows}>
          {PRODUCTS.map((product) => (
            <li key={product.name} className="collections__item">
              <a href="#shop" className="collections__card">
                <div className="collections__media">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 40vw, 24vw"
                    className="collections__img"
                  />
                  <span className="collections__cta">View Piece</span>
                </div>
                <span className="collections__name">{product.name}</span>
                <span className="collections__price">{product.price}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="collections__nav">
          <button
            type="button"
            className="collections__arrow"
            aria-label="Previous products"
            disabled={!canPrev}
            onClick={() => scrollByCard(-1)}
          >
            <Arrow direction="left" />
          </button>
          <button
            type="button"
            className="collections__arrow"
            aria-label="Next products"
            disabled={!canNext}
            onClick={() => scrollByCard(1)}
          >
            <Arrow direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
