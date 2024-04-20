'use client';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function About() {
  const { ref } = useSectionInView('About', 0.75);

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28 px-3 sm:px-0'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>

      <p className='mb-3'>
        As a Computer Science graduate, I bring a robust skill set and an
        insatiable passion for technology to the table. My expertise spans a
        rich array of cutting-edge technologies, including{' '}
        <span className='font-medium'>
          Next JS, React, Redux, Node JS, TypeScript, MongoDB, MySQL,
        </span>{' '}
        and more. I thrive in the dynamic realm of software development,
        excelling in{' '}
        <span className='font-medium'>
          pinpointing and resolving issues swiftly, ensuring flawless software
          operation, and optimizing performance to perfection.
        </span>{' '}
        Driven by a relentless pursuit of knowledge, I actively engage with
        emerging technologies, maintaining a proactive stance towards skill
        enrichment. With a proven track record of delivering superior-quality
        solutions and an unwavering commitment to innovation, I am fervently
        motivated to apply my talents and contribute to transformative projects
        in a new capacity.
      </p>

      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy listening
        to music, watching movies, and playing with my dog. I also enjoy{' '}
        <span className='font-medium'>learning new things</span>
      </p>
    </motion.section>
  );
}
