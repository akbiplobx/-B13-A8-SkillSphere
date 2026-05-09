"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Spinner, Input } from "@heroui/react"; 

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner label="Loading courses..." color="success" size="lg" />
      </div>
    );
  }

  return (
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header Section: Title and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Explore All <span className="text-green-600">Courses</span>
          </h2>

         
          <div className="w-full md:max-w-xs">
            <Input
              type="text"
              placeholder="Search by title..."
              variant="bordered"
              color="success"
              radius="lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 flex flex-col hover:shadow-lg transition-shadow">
                <div className="bg-green-600 h-48 relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-green-600 uppercase">{course.category}</span>
                    <span className="text-amber-500 font-bold text-sm">⭐ {course.rating}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">Instructor: {course.instructor}</p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-50">
                    <Link href={`/course/${course.id}`} className="block w-full">
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-slate-400 text-xl italic">
                No courses found matching "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;