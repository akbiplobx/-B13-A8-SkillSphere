import React from 'react';
import Image from 'next/image';

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Jhankar Mahbub",
      role: "Next.js Specialist",
      img: "/ins1.jpg"
    },
    {
      id: 2,
      name: "Faisal Shohag",
      role: "UI/UX Designer",
      img: "/ins2.jpg"
    },
    {
      id: 3,
      name: "Ahsan Habib",
      role: "Senior Web Developer",
      img: "/ins3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 px-5">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-green-600 uppercase bg-green-100 rounded-full">
            Expert Mentors
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-16">
          Learn From The <span className="text-green-600">Industry Best</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {instructors.map((inst) => (
            <div key={inst.id} className="relative group">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="relative mb-6 inline-block">
                  <div className="w-32 h-32 rounded-full bg-green-50 overflow-hidden ring-4 ring-white shadow-lg group-hover:scale-105 transition-transform duration-300 relative">
                   
                    <Image 
                      src={inst.img} 
                      alt={inst.name} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{inst.name}</h3>
                <p className="text-green-600 font-semibold mb-6 text-sm uppercase tracking-widest">
                  {inst.role}
                </p>
                
                <div className="flex justify-center gap-5">
                   <button className="text-gray-400 hover:text-blue-600 transition-colors text-xl">
                      <i className="fa-brands fa-linkedin"></i>
                   </button>
                   <button className="text-gray-400 hover:text-gray-900 transition-colors text-xl">
                      <i className="fa-brands fa-github"></i>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;