import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";

export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-8"> 
      <Hero />
      <PopularCourses></PopularCourses>
    </main>
  );
}