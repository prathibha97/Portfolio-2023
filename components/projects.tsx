'use client';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import Project from './project';
import SectionHeading from './section-heading';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);
  return (
    <section id='projects' className='scroll-mt-28' ref={ref}>
      <SectionHeading>My projects</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
