import { Dancing_Script, Raleway, Cormorant } from "next/font/google";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Banky vs Babe",
  description: "Have you heard what happened to Banky?",
};

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});
const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dancing.variable} ${raleway.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
