import React, { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Left decorative accent */}
          <div className="bg-gradient-to-r from-gold to-gold h-2"></div>

          <div className="p-8">
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="font-bold text-gray-800 text-3xl">Welcome Back!</h1>
              <p className="mt-4 text-gray-600">
                New to Blink?{' '}
                <a href="#" className="font-medium text-red hover:text-gold transition-colors">
                  Create an account
                </a>
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-gray-700 text-sm">
                  Email
                </label>
                <div className="relative">
                  <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                    <FiMail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block py-3 pr-3 pl-10 border border-gray-300 focus:border-gold rounded-lg focus:ring-2 focus:ring-gold w-full sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block mb-1 font-medium text-gray-700 text-sm">
                  Password
                </label>
                <div className="relative">
                  <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                    <FiLock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block py-3 pr-10 pl-10 border border-gray-300 focus:border-gold rounded-lg focus:ring-2 focus:ring-gold w-full sm:text-sm"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="right-0 absolute inset-y-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FiEyeOff className="w-5 h-5 text-gray-400 hover:text-gray-500" />
                    ) : (
                      <FiEye className="w-5 h-5 text-gray-400 hover:text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="border-gray-300 rounded focus:ring-gold w-4 h-4 text-red"
                  />
                  <label htmlFor="remember-me" className="block ml-2 text-gray-700 text-sm">
                    Remember for 30 days
                  </label>
                </div>
                <a
                  href="#"
                  className="text-red hover:text-gold text-sm transition-colors"
                >
                  Forget password
                </a>
              </div>

              {/* Sign In Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex justify-center bg-gradient-to-r from-red hover:from-gold to-gold hover:to-red shadow-sm px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 w-full font-medium text-white text-sm transition-all"
              >
                Sign in
              </motion.button>
            </form>

            {/* Divider */}
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="border-gray-300 border-t w-full" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Sign In */}
            <motion.button
              whileHover={{ y: -2 }}
              type="button"
              className="inline-flex justify-center items-center bg-white hover:bg-gray-50 shadow-sm mt-6 px-4 py-2 border border-gray-300 rounded-lg w-full font-medium text-gray-700 text-sm transition-all"
            >
              <FcGoogle className="mr-2 w-5 h-5" />
              Sign in with Google
            </motion.button>

            {/* Inspirational Quote */}
            <div className="mt-8 pt-6 border-gray-200 border-t text-center">
              <p className="font-medium text-gray-700 text-lg">
                Lorem ipsum dolor sit.
              </p>
              <p className="font-medium text-gray-700 text-lg">
                Lorem, ipsum.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;