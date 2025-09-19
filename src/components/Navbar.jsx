import React, { useState } from "react";
import { Menu, X, Home, Building2, Info, Phone } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex shadow-md py-4 px-6 bg-white fixed w-full top-0 left-0 z-50">
            <div className="flex items-center justify-between w-full">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Home className="w-7 h-7 text-blue-600" />
                    <span className="text-2xl font-bold">HomeHunt</span>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex gap-6 items-center">
                    <a href="#home" className="flex items-center gap-1 hover:text-blue-600">
                        <Home size={18} /> Home
                    </a>
                    <a
                        href="#properties"
                        className="flex items-center gap-1 hover:text-blue-600"
                    >
                        <Building2 size={18} /> Properties
                    </a>
                    <a href="#about" className="flex items-center gap-1 hover:text-blue-600">
                        <Info size={18} /> About
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-1 hover:text-blue-600"
                    >
                        <Phone size={18} /> Contact
                    </a>
                </nav>

                {/* Buttons */}
                <div className="hidden lg:flex gap-3">
                    <button className="px-4 py-2 border rounded-full bg-black text-white hover:bg-black-300">
                        Login
                    </button>
                    <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <h2 className="text-xl font-bold text-blue-600">Menu</h2>
                    <button onClick={() => setIsOpen(false)}>
                        <X size={28} />
                    </button>
                </div>

                <nav className="flex flex-col gap-4 mt-6 px-6">
                    <a
                        href="#home"
                        className="flex items-center gap-2 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <Home size={20} /> Home
                    </a>
                    <a
                        href="#properties"
                        className="flex items-center gap-2 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <Building2 size={20} /> Properties
                    </a>
                    <a
                        href="#about"
                        className="flex items-center gap-2 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <Info size={20} /> About
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-2 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <Phone size={20} /> Contact
                    </a>
                </nav>

                <div className="mt-8 flex flex-col gap-3 px-6">
                    <button className="px-4 py-2 border rounded-full hover:bg-gray-100">
                        Login
                    </button>
                    <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    );
};

export default Navbar;
