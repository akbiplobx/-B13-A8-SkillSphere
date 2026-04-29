"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b px-5 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <nav className="flex justify-between items-center py-4 max-w-6xl mx-auto w-full">
      
        {/* Logo */}
        <Link href="/" className="flex gap-3 items-center">
          <h3 className="font-black text-xl tracking-tighter">
            Skill<span className="text-green-600">Sphere</span>
          </h3>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-green-600 transition">Home</Link>
          </li>
          <li>
            <Link href="/courses" className="hover:text-green-600 transition">Courses</Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-green-600 transition">My Profile</Link>
          </li>
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="px-4 py-2 text-sm font-medium">
            Login
          </Link>
          <Link 
            href="/register" 
            className="px-5 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-x-0 top-[65px] p-5 bg-white border-b shadow-xl transition-all duration-300 md:hidden
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
      `}>
        <ul className="flex flex-col gap-5 text-lg font-medium">
          <li><Link onClick={() => setIsOpen(false)} href="/">Home</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href="/courses">Courses</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href="/profile">My Profile</Link></li>
          <hr />
          <div className="flex flex-col gap-3">
            <Link onClick={() => setIsOpen(false)} href="/login" className="text-center py-2">Login</Link>
            <Link 
              onClick={() => setIsOpen(false)} 
              href="/register" 
              className="bg-green-600 text-white text-center py-3 rounded-xl"
            >
              Register
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;