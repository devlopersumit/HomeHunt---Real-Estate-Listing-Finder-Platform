import React from 'react'

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        minHeight: '70vh',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto flex flex-col items-center justify-center h-full py-24 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Discover Your Perfect Home
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Search through thousands of listings to find the perfect property for you. Whether you're looking to buy or rent, we've got you covered.
        </p>
        <div className="w-full max-w-3xl">
          <form className="bg-white rounded-lg p-4 shadow-lg flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Enter an address, city, or ZIP code"
              className="flex-grow p-3 border rounded-md text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md w-full md:w-auto"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero
