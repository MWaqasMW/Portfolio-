'use client'

import ContactSec from "@/componets/contect_sec/ContactSec"
import FeedbackForm from "@/componets/feedback/FeedBack"
import FeedBack from "@/componets/feedback/FeedBack"
import Footer from "@/componets/nav/footer/Footer"
import Header from "@/componets/nav/header/Header"
import Projects from "@/componets/projects/Projects"
import Review from "@/componets/reviews/Review"

const page = () => {
  return (
    <>
      <Header />
      <Projects />
      <Review />
      <FeedbackForm />
      <ContactSec />
      <Footer />
    </>
  )
}

export default page