import Image from "next/image";
import commentImg from "../images/comment.webp";
import "../styles/testimonial.css";

function Star() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M12 2.8l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 16.8l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 2.8Z" />
    </svg>
  );
}

export default function Testimonial() {
  return (
    <section className="testimonial" aria-labelledby="testimonial-title">
      <div className="testimonial__inner">
        <figure className="testimonial__media">
          <Image
            src={commentImg}
            alt="Opal pear-cut crystal pendant necklace and matching drop earrings on a pearl stand"
            fill
            sizes="(max-width: 900px) 100vw, 66vw"
            className="testimonial__img"
          />
          <figcaption className="testimonial__tag">
            <span className="testimonial__tag-label">Featured</span>
            <span className="testimonial__tag-name">Lumière Pear Set</span>
          </figcaption>
        </figure>

        <div className="testimonial__card">
          <p id="testimonial-title" className="testimonial__eyebrow">
            Client Love
          </p>

          <div className="testimonial__stars" role="img" aria-label="Rated 5 out of 5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>

          <blockquote className="testimonial__quote">
            <p>
              I wore the pear drop set on my wedding day and caught the <em>light</em> in every single photo. It feels
              like it was made just for me.
            </p>
          </blockquote>

          <div className="testimonial__author">
            <span className="testimonial__avatar" aria-hidden="true">
              AH
            </span>
            <span className="testimonial__who">
              <span className="testimonial__name">Amelia Hart</span>
              <span className="testimonial__meta">Bride &middot; Verified buyer</span>
            </span>
          </div>

          <p className="testimonial__summary">
            <strong>4.9</strong> average from 2,300+ reviews
          </p>
        </div>
      </div>
    </section>
  );
}
