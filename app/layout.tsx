import { Raleway } from "next/font/google";
import Header from "./components/Header/Header";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

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
      <body>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
