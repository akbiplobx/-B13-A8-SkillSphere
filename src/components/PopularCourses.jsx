"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link'; 
const PopularCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-12">          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Popular <span className="text-green-600">Courses</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              
              <div className="bg-green-600 h-52 flex items-center justify-center text-white text-center p-4 relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 leading-snug mb-1">
                  {course.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  By {course.instructor}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <i className="fa-solid fa-star text-sm"></i>
                    <span>{course.rating}</span>
                  </div>
                  
                 
                  <Link href={`/course/${course.id}`}>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium transition-colors text-sm">
                      View Details
                    </button>
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;