import React from 'react'
import Banner from '../components/Banner'
import Button from '../components/Button'
import ContactSection from '../components/ContactSection';

const Contact = () => {

  const contactSlides = [
    {
      src: "/images/bg4.jpg",
      heading: "Get in Touch with Us",
      subheading:
        "We are always happy to hear from you. Reach out with any questions or inquiries!",
    },
    {
      src: "/images/bg2.jpg",
      heading: "Our Location",
      subheading:
        "Visit us at Seat Of Wisdom Private School. We are located at  Location : 8/10, Modupe Akinrinade Str, Off Amoke Are Street, Adalemo Sango-Ota. Ogun state.",
    },  
    {
      src: "/images/bg3.jpg",
      heading: "Contact Information",
      subheading:
        "For more information, please contact us at Seatofwisdomprivateschools@gmail.com.",
    },
  ];

  return (
    <>
      <Banner slides={contactSlides} button={<Button text='Contact Us' bgColor='bg-secondary' textColor='text-primary' />} />
      <ContactSection />
    </>
  )
}

export default Contact
