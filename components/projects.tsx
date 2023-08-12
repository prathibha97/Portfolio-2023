import { projectsData } from '@/lib/data';
import Project from './project';
import SectionHeading from './section-heading';

export default function Projects() {
  return (
    <section id='projects' className='scroll-mt-28'>
      <SectionHeading>My projects</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
