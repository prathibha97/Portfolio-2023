import { projectsData } from '@/lib/data';
import Project from './project';
import SectionHeading from './section-heading';

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
