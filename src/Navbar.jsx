import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/Logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className="bg-black py-2 text-gold text-sm text-center">
        Free shipping on orders over $500 • 30-day returns
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur'}`}>
        <div className="flex justify-between items-center mx-auto px-4 h-36 container">
          <Link to="/">
            <motion.img
              src={logo}
              alt="Logo"
              className="h-32"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Link>

          <nav className="hidden lg:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium uppercase tracking-wide py-1 ${pathname === link.path ? 'text-gold-600' : 'text-gray-800 hover:text-gold-500'}`}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.span
                    layoutId="underline"
                    className="bottom-0 left-0 absolute bg-gold-600 w-full h-0.5"
                    transition={{ type: 'spring', bounce: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/account" className="text-gray-700 hover:text-gold-600">
              <FaUser size={18} />
            </Link>
            <Link to="/wishlist" className="relative text-gray-700 hover:text-gold-600">
              <FaHeart size={18} />
              <span className="-top-2 -right-2 absolute flex justify-center items-center bg-gold-600 rounded-full w-5 h-5 text-white text-xs">3</span>
            </Link>
            <Link to="/cart" className="relative text-gray-700 hover:text-gold-600">
              <FaShoppingBag size={18} />
              <span className="-top-2 -right-2 absolute flex justify-center items-center bg-gold-600 rounded-full w-5 h-5 text-white text-xs">2</span>
            </Link>
            <button onClick={toggleMenu} className="lg:hidden text-gray-700 hover:text-gold-600">
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="lg:hidden z-40 fixed inset-0 bg-white px-6 pt-24 pb-12 overflow-y-auto"
            >
              <div className="flex flex-col space-y-8">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`text-2xl font-medium border-b py-2 ${pathname === link.path ? 'text-gold-600 border-gold-600' : 'text-gray-800 border-gray-100'}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex space-x-6 pt-8">
                  <Link to="/account" onClick={closeMenu} className="text-gray-700 hover:text-gold-600">
                    <FaUser size={24} />
                  </Link>
                  <Link to="/wishlist" onClick={closeMenu} className="relative text-gray-700 hover:text-gold-600">
                    <FaHeart size={24} />
                    <span className="-top-2 -right-2 absolute flex justify-center items-center bg-gold-600 rounded-full w-5 h-5 text-white text-xs">3</span>
                  </Link>
                  <Link to="/cart" onClick={closeMenu} className="relative text-gray-700 hover:text-gold-600">
                    <FaShoppingBag size={24} />
                    <span className="-top-2 -right-2 absolute flex justify-center items-center bg-gold-600 rounded-full w-5 h-5 text-white text-xs">2</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
