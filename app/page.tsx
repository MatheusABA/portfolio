import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
// import { Stack } from "@/components/stack";
// import { Experience } from "@/components/experience";
// import { Projects } from "@/components/projects";
// import { Education } from "@/components/education";
// import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <Header />

      <Hero />

      {/* <Stack />

      <Experience />

      <Projects />

      <Education />

      <Contact /> */}
    </main>
  );
}