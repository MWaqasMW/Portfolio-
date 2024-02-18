import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import Header from "@/componets/nav/header/Header";
import Footer from "@/componets/nav/footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
