import { Inter } from "next/font/google";
import "./globals.css";
import Backgound from "./components/Backgound";
import Nav from "./components/Nav";
import Lines from "./components/Lines";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ship Design Engineering",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth snap-mandatory snap-y">
      <body className={inter.className + " " + "no-scrollbar"}>
        <Lines />
        <Backgound />
        <Nav />
        <main>
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
