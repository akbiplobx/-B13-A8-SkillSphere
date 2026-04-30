"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          Explore All <span className="text-green-600">Courses</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 flex flex-col">
              <div className="bg-green-600 h-48 relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-green-600 uppercase mb-2">{course.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
                <p className="text-slate-500 text-sm mb-4">Instructor: {course.instructor}</p>
                
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-amber-500 font-bold">⭐ {course.rating}</span>
                  <Link href={`/course/${course.id}`}>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">
                      Details
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

export default AllCourses;