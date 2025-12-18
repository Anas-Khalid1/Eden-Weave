import { Jost } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/reusableComponents/floatingWhatsapp";
import ChatbotWidget from "@/reusableComponents/aiChatbot/ChatbotWidget";
import { Toaster } from 'react-hot-toast';

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap", // Better font loading performance
  preload: true,
});

export const metadata = {
  title: {
    default: "Eden Weave Foundation - Islamic Charity Milton Keynes | Muslim Community UK",
    template: "%s | Eden Weave Foundation"
  },
  description: "Eden Weave Foundation (MKEMC) is a registered UK Islamic charity serving the Muslim community in Milton Keynes. Join us for Friday prayers, Eid celebrations, community events, Sadaqah, Zakat donations and volunteer opportunities.",
  keywords: [
    "Eden Weave Foundation",
    "Islamic charity UK",
    "Muslim charity Milton Keynes",
    "MKEMC",
    "Milton Keynes East Muslim Community",
    "Islamic community centre",
    "Friday prayer Milton Keynes",
    "Jumuah prayer",
    "Muslim community UK",
    "Sadaqah",
    "Zakat",
    "Islamic charity",
    "Eid celebrations Milton Keynes",
    "Ramadan events UK",
    "Islamic education",
    "Muslim volunteer UK",
    "charity donation UK",
    "registered charity 1210287",
    "Broughton mosque",
    "Brooklands Muslim community",
    "Glebe Farm Islamic centre",
    "Wavendon community hub",
  ],
  authors: [{ name: "Eden Weave Foundation" }],
  creator: "Eden Weave Foundation",
  publisher: "Eden Weave Foundation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://edenweave.org.uk",
    title: "Eden Weave Foundation - Islamic Charity Milton Keynes",
    description: "Inspiring Faith, Strengthening Community. Registered UK charity serving Muslims in Milton Keynes.",
    siteName: "Eden Weave Foundation",
  },
 
  alternates: {
    canonical: "https://edenweave.org.uk",
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.emailjs.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Theme color */}
        <meta name="theme-color" content="#f59e0b" />
      </head>
      <body
        className={`${jost.variable} font-sans antialiased`}
      >
        {children}
        <FloatingWhatsApp />
        <ChatbotWidget />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
