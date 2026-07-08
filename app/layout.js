// import { Syne, Karla } from "next/font/google";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Expo Digital Group | Exhibition Stand Builder",
  description:
    "Expo Digital Group delivers bespoke exhibition stands, modular systems, quick build booths, and turnkey event solutions across the Middle East.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} font-sans bg-white text-zinc-900 antialiased`}
        // className={`${syne.variable} ${karla.variable} font-sans bg-white text-zinc-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
