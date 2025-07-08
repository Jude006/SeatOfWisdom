import React from 'react'
import LandingPage from '../components/LandingPage'
import HomeSection1 from '../components/HomeSection1'
import Mission from "../components/Mission";
import HomeSection2 from '../components/HomeSection2';
import HomeSection3 from '../components/HomeSection3';
import HomeSection4 from '../components/HomeSection4';
import CallToAction from '../components/CallToAction';


const Home = () => {
  return (
    <>
    <div className='relative'>
    <LandingPage />
    <Mission />
    </div>
    <HomeSection1 />
    <HomeSection2 />
    <HomeSection3 />
    <HomeSection4 />
    <CallToAction />
    </>
  )
}

export default Home