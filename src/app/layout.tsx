import type { Metadata } from "next";
import { Inter, Cairo, Montserrat } from "next/font/google";

import "./globals.css";
import Nav from "@/components/Nav";
import MouseGlow from "@/components/MouseGlow";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R-link",
  description:
    "Elevate your brand with top-notch digital marketing, design, and development services. Tailored solutions for growth. Contact us for a consultation today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/RLink_Logo1.png" sizes="any" />
      </head>
      <body className={cairo.className}>
        <main className="relative flex flex-col min-h-screen ">
          <Nav />
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
