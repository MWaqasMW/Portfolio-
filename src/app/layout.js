import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "aos/dist/aos.css";
import "sweetalert2/src/sweetalert2.scss";
import Header from "@/componets/nav/header/Header";
import Footer from "@/componets/nav/footer/Footer";
import Arrow from "@/componets/arrow/Arrow";
import Head from "next/head";
export const metadata = {
  title: "MWaqas",
  description: "Muhammad Waqas MERN Stack Developer Portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icons/log.png" sizes="any" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9412596009611935"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className="main_body">
        <Header />
        {children}
        <Arrow />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
