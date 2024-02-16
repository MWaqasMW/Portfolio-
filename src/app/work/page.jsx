'use client'

import ContactSec from "@/componets/contect_sec/ContactSec"
import Footer from "@/componets/nav/footer/Footer"
import Header from "@/componets/nav/header/Header"
import Projects from "@/componets/projects/Projects"

const page = () => {
  return (
    <>
      <Header />
      <Projects />
      <ContactSec />
      <Footer />
    </>
  )
}

export default page