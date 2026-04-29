import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
            Upgrade Your Skills <br /> 
            <span className="text-emerald-600 italic underline decoration-emerald-200">Today 🚀</span>
          </h1>
          
          <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
            Learn from Industry Experts and master the technologies of tomorrow. Join SkillSphere and start your journey toward a brighter career.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-1">
              Explore Courses <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
            
            <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold transition-all">
              Watch Demo <i className="fa-solid fa-circle-play ml-2"></i>
            </button>
          </div>

          {/* Achievement Badges */}
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-check text-emerald-500"></i>
              <span>500+ Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-check text-emerald-500"></i>
              <span>Expert Tutors</span>
            </div>
          </div>
        </div>

        {/* Right Side - Image/Illustration */}
        
        <div className="w-full lg:w-auto relative flex justify-center lg:justify-end">
          <div className="relative z-10">
            <img 
              src="/profile.png"  
              alt="Biplob's Profile" 
              className="w-72 md:w-80 lg:w-[450px] h-auto rounded-2xl shadow-2xl border-4 border-emerald-50 object-cover"
            />
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute top-0 -right-10 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;