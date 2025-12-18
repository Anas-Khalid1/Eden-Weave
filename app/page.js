import Home from './Home/home'

export const metadata = {
  title: "Eden Weave Foundation - Islamic Charity Milton Keynes | Friday Prayers & Community Events",
  description: "Eden Weave Foundation (MKEMC) is a registered UK Islamic charity serving the Muslim community in Milton Keynes. Join us for weekly Friday Jumuah prayers, Eid celebrations, Ramadan events, and community programs. Donate Sadaqah & Zakat to support local Muslims.",
  keywords: [
    "Eden Weave Foundation",
    "Islamic charity Milton Keynes",
    "Muslim charity UK",
    "MKEMC",
    "Friday prayer Milton Keynes",
    "Jumuah prayer UK",
    "Eid celebration Milton Keynes",
    "Ramadan events UK",
    "Sadaqah donation",
    "Zakat UK",
    "Muslim community Milton Keynes",
    "Islamic centre UK",
    "Wavendon mosque",
    "Broughton Muslim community",
    "Brooklands Islamic centre",
    "registered charity 1210287",
  ],
  openGraph: {
    title: "Eden Weave Foundation - Islamic Charity Milton Keynes",
    description: "Inspiring Faith, Strengthening Community. Join our Friday prayers, Eid events and donate to support Muslims in Milton Keynes.",
    url: "https://edenweave.org.uk",
  },
  alternates: {
    canonical: "https://edenweave.org.uk",
  },
};

export default function HomePage() {
  return <Home />;
}
