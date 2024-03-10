import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "aos/dist/aos.css";
import "sweetalert2/src/sweetalert2.scss";
import Header from "@/componets/nav/header/Header";
import Footer from "@/componets/nav/footer/Footer";
import Arrow from "@/componets/arrow/Arrow";

export const metadata = {
  title: "MWaqas",
  description: "Muhammad Waqas MERN Stack Developer Portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="main_body">
        <link rel="icon" href="/icons/log.png" sizes="any" />
        <Header />
        {children}
        <Arrow />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
