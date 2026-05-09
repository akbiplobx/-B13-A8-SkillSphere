"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

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

        {/* Auth Condition (Desktop) */}
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
      </nav>

      
      {isOpen && (
        <div className="md:hidden p-5 bg-white border-t">
          {session ? (
             <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                 <img src={session.user.image} className="w-12 h-12 rounded-full" alt="" />
                 <div>
                   <p className="font-bold">{session.user.name}</p>
                   <p className="text-xs text-gray-500">{session.user.email}</p>
                 </div>
               </div>
               <button onClick={handleSignOut} className="w-full py-3 text-red-500 font-bold border border-red-100 rounded-xl">Sign Out</button>
             </div>
          ) : (
            <div className="flex flex-col gap-3">
              <Link href="/signin" className="w-full text-center py-3 border rounded-xl">Sign In</Link>
              <Link href="/signup" className="w-full text-center py-3 bg-green-600 text-white rounded-xl">Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;