import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import Path from '@/components/sections/path';
import Projects from '@/components/sections/projects';
import Stack from '@/components/sections/stack';
import WritingTeaser from '@/components/sections/writing-teaser';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Path />
      <WritingTeaser />
      <Contact />
    </main>
  );
}
