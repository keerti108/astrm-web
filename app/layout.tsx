import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "astrm · Wellbeing. Longevity. Performance.",
    template: "%s · astrm",
  },
  description: "Biomechanical insoles engineered to let your foot move the way it was designed to.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23F0EEE9'/><text x='16' y='25' text-anchor='middle' font-family='Georgia,serif' font-size='24' font-style='italic' fill='%2315171A'>a</text></svg>",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
