import { Roboto_Condensed, Luckiest_Guy } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiest-guy",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Osazuwa Manuela",
  description: "I Craft Designs & Grow Brands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${luckiestGuy.variable} ${robotoCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
