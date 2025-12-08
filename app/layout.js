import { Jost } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/reusableComponents/floatingWhatsapp";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata = {
  title: "Eden Weave Foundation",
  description: "Inspiring Faith, Strengthening Community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} font-sans antialiased`}
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
