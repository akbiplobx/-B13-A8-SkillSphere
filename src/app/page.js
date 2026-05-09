
import LearningTips from "@/components/LearningTips";
import Instructors from "@/components/Instructors";
import PopularCourses from "@/components/PopularCourses";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      
      <main className="container mx-auto px-4 md:px-8"> 
        <Hero></Hero>
        <PopularCourses></PopularCourses>
        <LearningTips></LearningTips>
        <Instructors></Instructors>
      </main>
    </>
  );
}