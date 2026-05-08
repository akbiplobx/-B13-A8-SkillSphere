"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b px-5 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <nav className="flex justify-between items-center py-4 max-w-7xl mx-auto w-full">
        
        {/* Logo */}
        <Link href="/" className="flex gap-3 items-center">
          <h3 className="font-black text-2xl tracking-tighter">
            Skill<span className="text-green-600">Sphere</span>
          </h3>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/courses" className="hover:text-green-600 transition-colors">Courses</Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-green-600 transition-colors">My Profile</Link>
          </li>
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link 
            href="/signin" 
            className="px-6 py-2.5 text-sm font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            Sign In
          </Link>
          <Link 
            href="/signup" 
            className="px-6 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-full hover:bg-green-700 shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl">&times;</span> // X icon
          ) : (
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-4 h-0.5 bg-gray-800 ml-auto"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </div>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-x-0 top-[73px] p-6 bg-white border-b shadow-2xl transition-all duration-300 md:hidden
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
      `}>
        <ul className="flex flex-col gap-5 text-lg font-medium text-gray-800">
          <li><Link onClick={() => setIsOpen(false)} href="/" className="block">Home</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href="/courses" className="block">Courses</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href="/profile" className="block">My Profile</Link></li>
          
          <hr className="my-2 border-gray-100" />

          {/* Auth Buttons (Mobile) */}
          <div className="flex flex-col gap-3">
            <Link 
              onClick={() => setIsOpen(false)} 
              href="/signin" 
              className="w-full text-center py-3.5 text-sm font-bold text-gray-700 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              onClick={() => setIsOpen(false)} 
              href="/signup" 
              className="w-full text-center py-3.5 text-sm font-bold text-white bg-green-600 rounded-2xl shadow-lg shadow-green-200 active:scale-95 transition-transform"
            >
              Sign Up
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;