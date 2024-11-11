import React, { useState } from "react";
import { FaBars, FaTimes, FaEnvelope, FaPhoneAlt, FaHome, FaInfoCircle, FaLightbulb, FaPhone, FaSignInAlt } from "react-icons/fa"; // Added FaSignInAlt for Login icon
import { Link } from 'react-router-dom';
import logo from '../assets/images/qto logo_new.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="text-gray-100">
      {/* Top section for contact details */}
      <div className="flex items-center justify-end space-x-6 px-4 md:px-10 bg-gray-700 text-yellow-400 py-2">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-lg" />
          <a href="mailto:info@qtosol.com" className="hover:underline">info@qtosol.com</a>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-lg" />
          <a href="tel:+13125440023" className="hover:underline">(312)-544-0023</a>
        </div>
        {/* Login Button */}
        <div className="flex items-center space-x-2">
          <FaSignInAlt className="text-lg" />
          <Link to="/login" className="hover:underline text-yellow-400">Login</Link>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <img src={logo} alt="logo" className="h-12 md:h-20 w-auto cursor-pointer" />
          </Link>
          <button 
            className="md:hidden text-yellow-400 focus:outline-none" 
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex flex-col md:flex-row items-center text-gray-900 md:bg-transparent space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <div className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer transition duration-300">
            <FaHome />
            <Link to="/" className="text-lg">Home</Link>
          </div>
          <div className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer transition duration-300">
            <FaInfoCircle />
            <Link to="/about" className="text-lg">About Us</Link>
          </div>
          <div className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer transition duration-300">
            <FaLightbulb />
            <Link to="/solutions" className="text-lg">Solutions</Link>
          </div>
          <div className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer transition duration-300">
            <FaPhone />
            <Link to="/contact" className="text-lg">Contact Us</Link>
          </div>
        </div>

        {/* Button wrapped in Link */}
        <div className={`${isMobileMenuOpen ? "block mt-4" : "hidden md:block"} md:mt-0`}>
          <Link to="/quote">
            <button className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300 ease-in-out">
              Get Free Quote
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
