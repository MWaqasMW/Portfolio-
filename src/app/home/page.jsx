import AboutSec from "@/componets/about_sec/AboutSec";
import Baner from "@/componets/baner/Baner";
import Projects from "@/componets/projects/Projects";
import ContactSec from "@/componets/contect_sec/ContactSec";
import Test from "@/componets/animation/Test";



export default function Home() {

    return (
        <>
            <Baner />
            <Test />
            <Projects type={"home"} />
            <AboutSec />
            <ContactSec />
        </>
    )
}
