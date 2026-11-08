import Image from "next/image";
import modelSide from "../images/model-side.webp";
import earrings1 from "../images/earrings-1.webp";
import earrings2 from "../images/earrings-2.webp";
import "../styles/lookbook.css";

export default function Lookbook() {
  return (
    <section className="lookbook" aria-label="Lumière Drop Earrings lookbook">
      <div className="lookbook__grid">
        <figure className="lookbook__tile lookbook__tile--model">
          <Image
            src={modelSide}
            alt="Model in profile wearing Opal gold drop earrings"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="lookbook__img lookbook__img--model"
          />
        </figure>

        <figure className="lookbook__tile">
          <Image
            src={earrings1}
            alt="Pair of gold pavé huggie earrings with crystal leaf and pear drops"
            fill
            sizes="50vw"
            className="lookbook__img"
          />
        </figure>

        <figure className="lookbook__tile">
          <Image
            src={earrings2}
            alt="Close-up of the pavé hoop and pear-cut crystal drop"
            fill
            sizes="50vw"
            className="lookbook__img"
          />
        </figure>
      </div>
    </section>
  );
}
