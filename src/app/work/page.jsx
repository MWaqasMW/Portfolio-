'use client'

import AddUser from "@/componets/user/AddUser"
import ContactSec from "@/componets/contect_sec/ContactSec"
import FeedbackForm from "@/componets/feedback/FeedBack"

import Projects from "@/componets/projects/Projects"
import Review from "@/componets/reviews/Review"

const page = () => {
  return (
    <>
      <Projects />
      <Review />
      <AddUser />
      <FeedbackForm />
      <ContactSec />
    </>
  )
}

export default page