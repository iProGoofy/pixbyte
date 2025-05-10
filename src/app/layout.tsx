import type { Metadata } from "next";
import { Archivo, Archivo_Narrow, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
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
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${archivo.variable} ${archivoNarrow.variable} ${bebasNeue.variable}`}>
      <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        
      </body>
    </html>
  );
}
