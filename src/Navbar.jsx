import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {CiHeart} from 'react-icons/ci';
import {IoIosCart} from 'react-icons/io';

const socialLinks = [
  {icon: <CiHeart size={24} />, href: '#'},
  {icon: <IoIosCart size={24} />, href: '#'},
];

const navLinks = [
  {name: 'About us', path: '/about'},
  // {name: 'Products', path: '/about'},
  // {name: 'About us', path: '/about'},
  {name: 'Contact Us', path: '/contact'},
  // {name: 'Log in', path: '/contact'},
];

const Navbar = () => {
  const [visible, setVisible] = useState (false);
  const {pathname} = useLocation ();
  const toggleMenu = () => setVisible (!visible);

  return (
    <div className="top-0 z-50 sticky bg-white">
      <nav className="flex justify-between items-center bg-white mx-8">
        <Link to="/">
          <img
            src="/Logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="py-2 object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center">
          {navLinks.map (link => (
            <Link
              key={link.path}
              to={link.path}
              className={`ml-4 text-lg font-semibold ${pathname === link.path ? 'text-red-600' : 'text-black'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map ((item, idx) => (
            <a key={idx} href={item.href}>{item.icon}</a>
          ))}
        </div>

        <button onClick={toggleMenu} className="lg:hidden block p-2">
          {visible ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
      >
        <div className="flex justify-between items-center p-4">
          <Link to="/" onClick={toggleMenu}>
            <img
              src="/Logo.png"
              alt="Logo"
              width={150}
              height={100}
              className="object-contain"
            />
          </Link>
          <button onClick={toggleMenu} className="p-2">
            <FaTimes size={28} />
          </button>
        </div>

        <div className="flex flex-col items-center space-y-6 mt-8">
          {navLinks.map (link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={toggleMenu}
              className="py-2 hover:border-orange-500 border-transparent border-b text-2xl transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
