import { Rajdhani } from "next/font/google";
import "./globals.css";

// components
import CartProvider from "@/components/CartProvider";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import { Toaster } from "@/components/UI/toaster";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rajdhani.variable}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Toaster />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
