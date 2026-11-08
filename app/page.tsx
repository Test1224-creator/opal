import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Lookbook from "./components/Lookbook";
import Ceo from "./components/Ceo";
import Testimonial from "./components/Testimonial";
import Reviews from "./components/Reviews";
import Stores from "./components/Stores";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Lookbook />
        <Ceo />
        <Testimonial />
        <Reviews />
        <Stores />
      </main>
      <Footer />
    </>
  );
}
