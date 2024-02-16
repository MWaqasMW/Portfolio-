import AboutSec from "@/componets/about_sec/AboutSec";
import Baner from "@/componets/baner/Baner";
import Header from "@/componets/nav/header/Header";
import Projects from "@/componets/projects/Projects";
import ContactSec from "@/componets/contect_sec/ContactSec";
import Footer from "@/componets/nav/footer/Footer";
import Arrow from "@/componets/arrow/Arrow";


export default function Page() {
 return(
    <>
      <Header/>
    <Baner/>
    <Projects type={"home"}/>
    <AboutSec/>
    <ContactSec/>
    <Footer/>
    <Arrow/>
    </>
 )
}
