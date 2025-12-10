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
    default: "Eden Weave Foundation - Inspiring Faith, Strengthening Community",
    template: "%s | Eden Weave Foundation"
  },
  description: "The Eden Weave Foundation advances Islamic faith, provides educational and recreational activities, alleviates poverty and promotes community harmony in United Kingdom.",
  keywords: ["Eden Weave Foundation", "Islamic Community", "Milton Keynes", "MKEMC", "Muslim Community", "Charity", "UK"],
  authors: [{ name: "Eden Weave Foundation" }],
  creator: "Eden Weave Foundation",
  publisher: "Eden Weave Foundation",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://edenweavefoundation.org",
    title: "Eden Weave Foundation",
    description: "Inspiring Faith, Strengthening Community",
    siteName: "Eden Weave Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eden Weave Foundation",
    description: "Inspiring Faith, Strengthening Community",
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
