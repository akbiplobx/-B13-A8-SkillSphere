"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-5 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <nav className="flex justify-between items-center py-4 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex gap-3 items-center">
          <h3 className="font-black text-2xl tracking-tighter">
            Skill<span className="text-green-600">Sphere</span>
          </h3>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><Link href="/" className="hover:text-green-600 transition">Home</Link></li>
          <li><Link href="/courses" className="hover:text-green-600 transition">Courses</Link></li>
          <li><Link href="/profile" className="hover:text-green-600 transition">My Profile</Link></li>
        </ul>

        {/* Auth (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-3">
              <div className="text-right hidden lg:block">
                <p className="text-xs font-bold text-gray-900">{session.user.name}</p>
                <p className="text-[10px] text-gray-500">{session.user.email}</p>
              </div>
              <img 
                src={session.user.image || "https://api.dicebear.com/7.x/avataaars/svg?seed=User"} 
                alt="Avatar" 
                className="w-10 h-10 rounded-full border-2 border-green-500 p-0.5"
              />
              <button 
                onClick={handleSignOut}
                className="px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-50 rounded-lg transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link href="/signin" className="text-sm font-semibold text-gray-700">Sign In</Link>
              <Link href="/signup" className="px-5 py-2 text-sm font-semibold text-white bg-green-600 rounded-full">Sign Up</Link>
            </>
          )}
        </div>

       
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-700 focus:outline-none p-2"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Content with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t"
          >
            <div className="flex flex-col gap-4 p-5">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium py-2">Home</Link>
              <Link href="/courses" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium py-2">Courses</Link>
              <Link href="/profile" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium py-2">My Profile</Link>
              
              <div className="h-[1px] bg-gray-100 my-2"></div>

              {session ? (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                    <img src={session.user.image} className="w-12 h-12 rounded-full border border-green-500" alt="" />
                    <div>
                      <p className="font-bold text-gray-800">{session.user.name}</p>
                      <p className="text-xs text-gray-500">{session.user.email}</p>
                    </div>
                  </div>
                  <button onClick={handleSignOut} className="w-full py-3 text-red-500 font-bold border border-red-100 rounded-xl hover:bg-red-50 transition">
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link href="/signin" onClick={() => setIsOpen(false)} className="w-full text-center py-3 border rounded-xl font-semibold">Sign In</Link>
                  <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full text-center py-3 bg-green-600 text-white rounded-xl font-semibold shadow-lg shadow-green-100">Sign Up</Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;