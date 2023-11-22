import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ink House - реплики картин",
  description:
    "Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.",
};

const raleway = Raleway({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-raleway",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} scroll-smooth`}>
      <body className="font-raleway text-main-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
