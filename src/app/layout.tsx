import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Early Bird Academy — In God We Excel | Pre-Primary, Primary & JSS",
  description:
    "Early Bird Academy is a leading Pre-Primary, Primary, and Junior Secondary School dedicated to academic excellence, moral values, and holistic child development. In God We Excel.",
  keywords:
    "Early Bird Academy, school, pre-primary, primary school, junior secondary, JSS, education, Nigeria, nursery, kindergarten, admissions",
  openGraph: {
    title: "Early Bird Academy — In God We Excel",
    description:
      "Nurturing Young Minds, Building Bright Futures. Pre-Primary, Primary & Junior Secondary School.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
