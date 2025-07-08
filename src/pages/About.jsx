import React from 'react'
import Banner from '../components/Banner';
import AboutSection1 from '../components/AboutSection1';
import AboutSection2 from '../components/AboutSection2';
import Button from '../components/Button';
import MeetOurTeam from '../components/MeetOurTeam';
import CallToAction from '../components/CallToAction';

const About = () => {
  const aboutSlides = [
    {
      src: "/images/bg4.jpg",
      heading: "About Seat Of Wisdom Private School",
      subheading:
        "We are dedicated to shaping the future through holistic education, integrity, and innovation.",
    },
    {
      src: "/images/bg2.jpg",
      heading: "Our Mission",
      subheading:
        "To provide an environment where students thrive academically, spiritually, and socially.",
    },
    {
      src: "/images/bg3.jpg",
      heading: "Empowering Nation Builders",
      subheading:
        "Our focus on scientific innovation and moral values equips students to change the world.",
    },
  ];
  return (
    <>
  <Banner slides={aboutSlides} button={<Button text='Enrol Now' bgColor='bg-secondary' textColor='text-primary' />} />
  <AboutSection1 />
  <AboutSection2 />
  <MeetOurTeam />
  <CallToAction />
    </>
  )
}

export default About