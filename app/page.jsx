import Image from "next/image";
import Cover from "@/components/Cover";
import About from "@/components/About";
import Project from "@/app/projects/page";
export default function Home() {
  return (
    <main>
      <Cover />
      <About />
      <Project/>
    </main>
  );
}
