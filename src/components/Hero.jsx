"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-slate-800 leading-tight"
          >
            Upgrade Your Skills <br /> 
            <span className="text-green-600 italic underline decoration-green-200">Today</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0"
          >
            Learn from Industry Experts and master the technologies of tomorrow. Join SkillSphere and start your journey toward a brighter career.
          </motion.p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1">
              Explore Courses <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-full font-bold transition-all">
              Watch Demo <i className="fa-solid fa-circle-play ml-2"></i>
            </button>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="w-full lg:w-auto relative flex justify-center lg:justify-end">
          
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0] 
            }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
            className="relative z-10"
          >
            <img 
              src="/profile.png"  
              alt="Biplob's Profile" 
              className="w-72 md:w-80 lg:w-[450px] h-auto rounded-2xl shadow-2xl border-4 border-green-50 object-cover"
            />
          </motion.div>
          
          {/* Decorative Circles */}
          <div className="absolute top-0 -right-10 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-700"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;