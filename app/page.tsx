import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import Now from '@/components/sections/now';
import Path from '@/components/sections/path';
import Projects from '@/components/sections/projects';
import WritingTeaser from '@/components/sections/writing-teaser';

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Now />
      <Projects />
      <About />
      <Path />
      <WritingTeaser />
      <Contact />
    </main>
  );
}
