"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for initial dark mode preference
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);

    // Listen for dark mode changes
    const listener = window.matchMedia('(prefers-color-scheme: dark)');
    listener.addEventListener('change', (e) => setIsDarkMode(e.matches));
    return () => listener.removeEventListener('change', (e) => setIsDarkMode(e.matches));
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // (Optional) Persist preference in storage for future visits
  };

  const socialLinks = [
    { icon: 'fa-brands fa-twitter', url: 'https://twitter.com/' },
    { icon: 'fa-brands fa-facebook', url: 'https://facebook.com/' },
    { icon: 'fa-brands fa-instagram', url: 'https://instagram.com/' },
    // Add more social links as needed
  ];

  const footerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.footer
      className={`text-center py-8 px-4 bg-gray-100 dark:bg-slate-900 text-slate-800 dark:text-white`}
      variants={footerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto space-y-4">
        <p className="text-base font-medium">© {new Date().getFullYear()} Crypto uncle</p>
        <nav className="flex justify-center space-x-4">
          <a href="/" className="text-sm underline hover:text-sky-500">About Us</a>
          <a href="/contact" className="text-sm underline hover:text-sky-500">Contact Us</a>
          <a href="/terms" className="text-sm underline hover:text-sky-500">Terms & Conditions</a>
        </nav>
        <div className="flex justify-center items-center space-x-4">
          {socialLinks.map((link) => (
            <a key={link.icon} href={link.url} target="_blank" rel="noreferrer" className="text-2xl hover:text-sky-500">
              <i className={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
