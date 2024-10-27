import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import ThemeProvider from "../context/ThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { CartProvider } from "../context/CartContext";
import CustomCursor from "../components/CustomCursor"; 
import MapSection from "../components/MapSection"; 

export const metadata = {
  title: "Create Next App",
  description: "This is a sample Next.js application.",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
          <ThemeProvider>
            <Header />
            <CustomCursor />
            <ScrollToTopButton />
            <main>{children}</main>

            <MapSection />
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </CartProvider>
  );
}
