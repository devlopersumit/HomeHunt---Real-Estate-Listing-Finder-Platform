import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyHomehunt from '../components/WhyHomehunt'
import FeaturedProperties from '../components/FeaturedProperties'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <WhyHomehunt />
    <FeaturedProperties />
    <Footer />
    </>
  )
}

export default Home
