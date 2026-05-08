import Hero from "@/components/Hero";
import LearningTips from "@/components/LearningTips";
import Instructors from "@/components/Instructors";
import PopularCourses from "@/components/PopularCourses";

export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-8"> 
      <Hero />
      <PopularCourses></PopularCourses>
      <LearningTips></LearningTips>
      <Instructors></Instructors>
    </main>
  );
}