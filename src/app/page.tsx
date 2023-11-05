import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects_full/project";
import Welcome from "@/components/welcome/welcome";

export default function Home() {

  return (
    <section className="w-full min-h-[400vh] md:px-20 px-2 mt-[11vh] mb-20">

      <Welcome />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </section>
  )
}
