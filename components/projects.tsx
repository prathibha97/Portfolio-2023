'use client';
import { useActiveSection } from '@/context/active-section-context';
import { projectsData } from '@/lib/data';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Project from './project';
import SectionHeading from './section-heading';

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection('Projects');
    }
  }, [inView]);
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
