import "../styles/stores.css";

type Store = {
  city: string;
  country: string;
  address: string[];
  hours: string;
  phone: string;
  flagship?: boolean;
};

// Placeholder boutiques for the portfolio
const STORES: Store[] = [
  {
    city: "Paris",
    country: "France",
    address: ["18 Rue Saint-Honoré", "75001 Paris"],
    hours: "Mon – Sat · 10:00 – 19:30",
    phone: "+33 1 40 00 18 18",
    flagship: true,
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    address: ["The Atrium, Level 2", "Downtown Dubai"],
    hours: "Daily · 10:00 – 22:00",
    phone: "+971 4 000 2020",
  },
  {
    city: "New York",
    country: "United States",
    address: ["Madison Avenue", "New York, NY 10022"],
    hours: "Mon – Sun · 11:00 – 19:00",
    phone: "+1 212 000 0640",
  },
  {
    city: "Tokyo",
    country: "Japan",
    address: ["Ginza 5-chome", "Chuo City, Tokyo"],
    hours: "Daily · 11:00 – 20:00",
    phone: "+81 3 0000 5210",
  },
];

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5.5 3.5h3l1.5 4-2 1.3a11 11 0 0 0 5.2 5.2l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export default function Stores() {
  return (
    <section id="stores" className="stores" aria-labelledby="stores-title">
      <div className="stores__inner">
        <header className="stores__header">
          <div>
            <p className="stores__eyebrow">Our Boutiques</p>
            <h2 id="stores-title" className="stores__title">
              Come see them <em>shine</em>
            </h2>
          </div>
          <p className="stores__intro">
            Try every piece in person, get expert sizing, and enjoy a glass of champagne while you choose. Private
            appointments are available at every boutique.
          </p>
        </header>

        <ul className="stores__grid">
          {STORES.map((store, i) => (
            <li key={store.city} className={`stores__card${store.flagship ? " stores__card--flagship" : ""}`}>
              <div className="stores__card-top">
                <span className="stores__index">{String(i + 1).padStart(2, "0")}</span>
                {store.flagship && <span className="stores__badge">Flagship</span>}
              </div>

              <h3 className="stores__city">{store.city}</h3>
              <p className="stores__country">{store.country}</p>

              <div className="stores__details">
                <address className="stores__row">
                  <PinIcon />
                  <span>
                    {store.address[0]}
                    <br />
                    {store.address[1]}
                  </span>
                </address>
                <p className="stores__row">
                  <ClockIcon />
                  <span>{store.hours}</span>
                </p>
                <p className="stores__row">
                  <PhoneIcon />
                  <a href={`tel:${store.phone.replace(/\s/g, "")}`}>{store.phone}</a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
