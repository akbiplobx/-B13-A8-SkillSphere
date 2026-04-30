"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const CourseDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const [user, setUser] = useState(true); 

  useEffect(() => {
    
    if (!user) {
      router.push('/login'); 
      return;
    }

    
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const selectedCourse = data.find(c => c.id === parseInt(id));
        setCourse(selectedCourse);
      });
  }, [id, user, router]);

  if (!course) return <div className="text-center py-20 text-green-600 font-bold">Loading...</div>;

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Image & Title */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-green-50 mb-8">
              <img src={course.image} alt={course.title} className="w-full h-auto object-cover" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">{course.title}</h1>
            <p className="text-lg text-slate-600 mb-6">{course.description}</p>
          </div>

          {/* Right: Info & Curriculum */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">Course Curriculum</h3>
            <ul className="space-y-4 mb-8">
              {["Introduction to the Course", "Fundamental Concepts", "Advanced Modules", "Live Project Work", "Final Certification"].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700">
                  <i className="fa-solid fa-circle-play text-green-600"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="space-y-3 mb-8">
              <p className="font-semibold text-slate-700">Instructor: <span className="text-green-600">{course.instructor}</span></p>
              <p className="font-semibold text-slate-700">Duration: {course.duration}</p>
              <p className="font-semibold text-slate-700">Level: {course.level}</p>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-green-100 transition-all">
              Start Learning Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;