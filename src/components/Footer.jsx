import React from 'react'
import { Home, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Home className="w-7 h-7 text-blue-500" />
              <span className="text-2xl font-bold text-white">HomeHunt</span>
            </div>
            <p className="text-sm">
              Your partner in finding the perfect home. We provide a complete service for the sale, purchase, or rental of real estate.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#properties" className="hover:text-white">Properties</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Buy a Home</a></li>
              <li><a href="#" className="hover:text-white">Sell a Home</a></li>
              <li><a href="#" className="hover:text-white">Rent a Home</a></li>
              <li><a href="#" className="hover:text-white">Property Management</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-1">&#x1F4CD;</span>
                <span>123 Real Estate St, Suite 100, City, State 12345</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">&#x260E;</span>
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">&#x2709;</span>
                <span>contact@homehunt.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} HomeHunt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;