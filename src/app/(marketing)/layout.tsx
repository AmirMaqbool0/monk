import type { Metadata } from "next";
import "../../app/globals.css";
import Header from "@/components/layout/Header";
import { Inter, Roboto } from "next/font/google";
import Footer from "@/components/layout/Footer";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  variable: "--font-inter",      
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});


export const metadata: Metadata = {
  title: "Your Client Website Title",
  description: "Short description for SEO.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} ${roboto.variable} antialiase`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
