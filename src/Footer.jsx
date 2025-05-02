import React from 'react';
import {Facebook, Twitter, Instagram, Mail, MapPin, Phone} from 'lucide-react';
import logo from '/Logo.png';
import footerBg from '../src/Images/Footer Image/footer_bg.jpg';
const Footer = () => {
  return (
    <footer
      className="pt-16 pb-12 border-t text-white"
      style={{backgroundImage: `url(${footerBg})`}}
    >
      <div className="mx-auto px-4 container">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-1">
            <div className="mb-4 max-w-32">
              <a href="/" className="inline-block font-bold text-2xl" />
              <img src={logo} className="w-full" alt="" />
            </div>
            <p className="mb-6">
              We are a Zurich-based jewellery brand creating elegant, timeless pieces with Swiss precision and modern design. Every creation tells a story of beauty and craftsmanship.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                className="flex justify-center items-center border border-white hover:border-gray-200 rounded-md w-9 h-9 text-white hover:text-gray-200 transition-all duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                className="flex justify-center items-center border border-white hover:border-gray-200 rounded-md w-9 h-9 text-white hover:text-gray-200 transition-all duration-200"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://google.com"
                className="flex justify-center items-center border border-white hover:border-gray-200 rounded-md w-9 h-9 text-white hover:text-gray-200 transition-all duration-200"
              >
                <span className="font-bold">G</span>
              </a>
              <a
                href="https://instagram.com"
                className="flex justify-center items-center border border-white hover:border-gray-200 rounded-md w-9 h-9 text-white hover:text-gray-200 transition-all duration-200"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="mb-4 font-medium text-lg">Quick Links</h3>
            <nav>
              <a
                href="/prices-drop"
                className="block mb-2 hover:text-gray-200 transition-colors duration-200"
              >
                About us
              </a>
              <a
                href="/new-products"
                className="block mb-2 hover:text-gray-200 transition-colors duration-200"
              >
                New products
              </a>
              <a
                href="/best-sales"
                className="block mb-2 hover:text-gray-200 transition-colors duration-200"
              >
                Best sales
              </a>
              <a
                href="/contact-us"
                className="block mb-2 hover:text-gray-200 transition-colors duration-200"
              >
                Contact us
              </a>
            </nav>
          </div>

          <div className="lg:col-span-1">
            <h3 className="mb-4 font-medium text-lg">ABOUT US</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin
                  className="flex-shrink-0 mt-1 mr-2 text-white"
                  size={18}
                />
                <p>
                  Address: The Barn, Ullenhall, Henley in Arden B578 5CC, England
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="flex-shrink-0 mr-2 text-white" size={18} />
                <p>Call Us: +123 321 345</p>
              </div>
              <div className="flex items-center">
                <Mail className="flex-shrink-0 mr-2 text-white" size={18} />
                <p>Email: info@yourdomain.com</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="mb-4 font-medium text-lg">SIGN UP FOR NEWSLETTER</h3>
            <p className="mb-4">
              Subscribe to our newsletters now and stay up-to-date with new collections
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-grow bg-transparent px-4 py-2 border border-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white placeholder-white"
              />
              <button
                type="submit"
                className="bg-white hover:bg-gray-200 px-4 py-2 text-black transition-colors duration-200"
              >
                <Mail size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
