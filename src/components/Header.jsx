import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Service', path: '/service' },
    // { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          {/* <div className="flex items-center gap-3 cursor-pointer  transition-opacity">
            <a href="/" className="flex items-center gap-3">
              <img 
                src="/logo.png"
                alt="ProVol Programs Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-gray-800 font-heading text-3xl font-bold"><span className="text-blue-600 font-heading text-3xl font-bold">Pro</span><span className="text-orange-500 font-heading text-3xl font-bold">Vol</span> Programs</h1>
              </div>
            </a>
          </div> */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer transition-opacity">
            <a href="/" className="flex items-center gap-2 sm:gap-3">
              <img
                src="/logo.png"
                alt="ProVol Programs Logo"
                className="h-10 sm:h-12 w-auto"
              />
              <div className="flex flex-col">
                <h1 className="font-heading font-bold text-lg sm:text-2xl  md:text-2xl text-gray-800 leading-3">
                  <span className="text-blue-600 text-lg sm:text-2xl  md:text-2xl">Pro</span>
                  <span className="text-orange-500 text-lg sm:text-2xl  md:text-2xl">Vol</span>{' '}
                  Promotions
                </h1>
              </div>
            </a>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-semibold font-description text-md"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/join"
              className="ml-4 px-6 py-2 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors duration-200 shadow-md hover:shadow-lg font-description"
            >
              Join as Volunteer
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-semibold font-description"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/join"
              className="block w-full px-4 py-2 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors duration-200 mt-2 text-center font-description"
            >
              Join as Volunteer
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;