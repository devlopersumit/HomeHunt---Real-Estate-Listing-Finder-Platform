import React from 'react'
import logo from '../assets/homehunt.png'

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About HomeHunt
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Your trusted partner in real estate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img 
              src={logo} 
              alt="HomeHunt Logo" 
              className="rounded-lg shadow-lg max-h-80"
            />
          </div>

          {/* Text Content Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Simplifying Your Home Search
            </h3>
            <p className="text-gray-600 mb-4">
              At HomeHunt, our mission is to simplify the process of finding your perfect home. We are a dedicated team of real estate professionals and tech enthusiasts committed to providing a seamless and transparent experience for buyers, sellers, and renters.
            </p>
            <p className="text-gray-600 mb-4">
              Our platform is built on the principles of trust, integrity, and innovation. We believe that everyone deserves a place they can call home, and we are passionate about making that dream a reality.
            </p>
            <p className="text-gray-600">
              Whether you're looking for a cozy apartment in the city or a spacious family house in the suburbs, HomeHunt is your trusted partner in every step of your real estate journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;