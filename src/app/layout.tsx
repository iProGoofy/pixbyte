import type { Metadata } from "next";
import { Archivo, Archivo_Narrow, Bebas_Neue, Manrope, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next"

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo-narrow",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "PixByte - IT Solutions",
  description: "Uw partner in digitale oplossingen",
  keywords: "IT, oplossingen, software, ontwikkeling, webdesign, digitale marketing",
  authors: [{ name: "PixByte" }],
  creator: "PixByte",
  publisher: "PixByte",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${archivo.variable} ${archivoNarrow.variable} ${bebasNeue.variable} ${manrope.variable} ${roboto.variable}`}>
      <body>
          <Navbar />
          <main>{children}</main>
          <Analytics />
          <Footer />
        
      </body>
    </html>
  );
}
