import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyHomehunt from '../components/WhyHomehunt'
import FeaturedProperties from '../components/FeaturedProperties'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <WhyHomehunt />
    <FeaturedProperties />
    <AboutUs />
    <Footer />
    </>
  )
}

export default Home
