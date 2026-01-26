import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, } from 'lucide-react';
import logo from '/footer-logo.png';
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Service', path: '/service' },
    // { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61586845988983', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/provol_promotions/', label: 'Instagram' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };



  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-gray-300">
      {/* ================= STICKY ACTION BUTTONS ================= */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919621195498"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 
               flex items-center justify-center shadow-2xl 
               animate-bounce-slow transition-transform hover:scale-110"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-white w-9 h-9" />
        </a>

        {/* Call Button */}
        <a
          href="tel:+919026476490"
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 
               flex items-center justify-center shadow-2xl 
               transition-transform hover:scale-110"
          aria-label="Call Now"
        >
          <Phone className="text-white w-7 h-7" />
        </a>

      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">

          {/* About Section with Logo */}
          <motion.div variants={itemVariants} className="space-y-4 flex items-center justify-center flex-col">
            {/* <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="ProVol Programs Logo" 
                className="h-12 w-auto"
              />
            </div> */}
            <h3 className="text-2xl font-bold text-white font-heading">About ProVol Promotions</h3>
            <p className="text-gray-400 leading-relaxed font-description">
              ProVol Promotions: Partner with us to unlock your volunteer potential and achieve sustainable community growth. Go Beyond. Contact us.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4 flex items-center justify-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-blue-600 hover:bg-orange-500 flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                  target='_blank'
                >
                  <social.icon size={20} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-200 
             flex items-center justify-center group font-description"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-orange-500 transition-colors duration-200 font-description"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4 justify-center">
            <h3 className="text-2xl font-bold text-white font-heading">Contact</h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center justify-center space-x-3 
             text-gray-400 hover:text-orange-500 transition-colors duration-200 text-center"
              >
                <MapPin size={20} className="mt-1 flex-shrink-0 text-blue-600 font-description" />
                <p>
                  Prayagraj, Uttar Pradesh, India
                </p>
              </motion.div>

              <motion.a
                href="mailto:provolpromotions@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center justify-center space-x-3 
             text-gray-400 hover:text-orange-500 transition-colors duration-200 text-center"
              >
                <Mail size={20} className="flex-shrink-0 text-blue-600 font-description" />
                <span>provolpromotions@gmail.com</span>
              </motion.a>

              <motion.a
                href="tel:+919026476490"
                whileHover={{ x: 5 }}
                className="flex items-center justify-center space-x-3 
             text-gray-400 hover:text-orange-500 transition-colors duration-200 text-center"
              >
                <Phone size={20} className="flex-shrink-0 text-blue-600" />
                <span className='font-description'>+91 9026476490</span>
              </motion.a>

              <motion.a
                href="tel:+919621195498"
                whileHover={{ x: 5 }}
                className="flex items-center justify-center space-x-3 
             text-gray-400 hover:text-orange-500 transition-colors duration-200 text-center"
              >
                <Phone size={20} className="flex-shrink-0 text-blue-600" />
                <span className='font-description'>+91 9621195498</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 mt-12 pt-4 text-center"
        >
          <p className="text-gray-400 font-description">
            © 2026 ProVol Promotions, All Rights Reserved. Developed By <a href="https://aditya-kumar-2511.vercel.app/" target='_blank' className='text-orange-400'> Aditya Kumar </a>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
