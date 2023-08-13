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
        After graduating with a higher national diploma in{' '}
        <span className='font-medium'>Business Management</span>, I decided to
        pursue my passion for programming. I am currently a final year
        undergraduate in <span className='font-medium'>Computer Science</span>{' '}
        and learning{' '}
        <span className='font-medium'>full-stack web development</span>.{' '}
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
        <span className='font-medium'>
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{' '}
        <span className='font-medium'>full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy listening
        to music, watching movies, and playing with my dog. I also enjoy{' '}
        <span className='font-medium'>learning new things</span>
      </p>
    </motion.section>
  );
}
