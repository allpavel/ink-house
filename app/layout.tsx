import { Raleway } from "next/font/google";
import Header from "./components/Header/Header";
import "./globals.css";
import Footer from "./components/Footer/Footer";

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
    <html lang="en" className={raleway.variable}>
      <body className="font-raleway text-main-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
