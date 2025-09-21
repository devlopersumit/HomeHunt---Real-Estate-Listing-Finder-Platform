import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyHomehunt from '../components/WhyHomehunt'
import FeaturedProperties from '../components/FeaturedProperties'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <WhyHomehunt />
    <FeaturedProperties />
    <AboutUs />
    <ContactUs />
    <Footer />
    </>
  )
}

export default Home
