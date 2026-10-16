// import { Syne, Karla } from "next/font/google";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";
import LenisSmoothScroll from "@/components/LenisSmoothScroll";

// const syne = Syne({
//   variable: "--font-syne",
//   subsets: ["latin"],
// });

// const karla = Karla({
//   variable: "--font-karla",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://expodigitalgroup.com"),
  title: "Exhibition Stand Builders in Dubai & UAE | Expo Digital Group",
  description:
    "Exhibition stand builders in Dubai & UAE. Custom stands, modular booths and exhibition rentals, built in-house in Al Quoz. Get a free design quote.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  verification: {
    google: "ycQL85vYtroSuEWrrPuQdeoBFxY88w2mzc5zrjfjR6w",
  },
  openGraph: {
    title: "Exhibition Stand Builders in Dubai & UAE | Expo Digital Group",
    description:
      "Custom & modular exhibition stands, rentals and turnkey event fabrication in Dubai, UAE and the GCC.",
    type: "website",
    url: "https://expodigitalgroup.com/",
    images: ["https://expodigitalgroup.com/banners/banner1.webp"],
  },
  icons: "/fav-icon.png",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://expodigitalgroup.com/#business",
  name: "Expo Digital Group",
  url: "https://expodigitalgroup.com/",
  logo: "https://expodigitalgroup.com/expo-digital-logo.png",
  image: "https://expodigitalgroup.com/banners/banner1.webp",
  description:
    "Exhibition stand builders and contractors in Dubai and the UAE offering custom stands, modular systems, exhibition rentals and turnkey event fabrication.",
  telephone: "+971563760187",
  email: "sales@expodigitalgroup.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Capital Compound, Al Quoz Industrial Area 2",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: ["Dubai", "United Arab Emirates", "Saudi Arabia", "GCC"],
  sameAs: [
    "https://www.facebook.com/ExhibitionsEventsActivationsBespokefurniture/",
    "https://www.linkedin.com/in/expo-digital-llc-b09950210",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Exhibition Stand Design & Build",
      },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Modular Exhibition Stands" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Exhibition Rentals" },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} font-sans bg-white text-zinc-900 antialiased`}
        // className={`${syne.variable} ${karla.variable} font-sans bg-white text-zinc-900 antialiased`}
      >
        <LenisSmoothScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        {children}
      </body>
    </html>
  );
}
