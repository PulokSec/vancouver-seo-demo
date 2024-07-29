import "@/faust.config.js";
import "./globals.css";
import { Rubik } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
const rubik = Rubik({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
