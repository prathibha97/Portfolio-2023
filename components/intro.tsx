'use client';
import { useActiveSection } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
  const { setActiveSection, setTimeOfLastClicked } = useActiveSection();
  const { ref } = useSectionInView('Home', 0.5);

  return (
    <section
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
      id='home'
      ref={ref}
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src='/assets/images/prathibha.jpg'
              alt='Profile picture of Prathibha'
              width={292}
              height={292}
              quality={95}
              priority={true}
              className='h-44 w-44 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
            />
          </motion.div>
          <motion.span
            className='absolute text-3xl bottom-0 right-3'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Prathibha.</span> I'm a{' '}
        <span className='font-bold'>full-stack developer</span> with{' '}
        <span className='font-bold'>2 years</span> of experience. I enjoy
        building <span className='italic'>websites & apps</span>. My focus tech stack is{' '}
        <span className='underline'>MERN stack</span>.
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClicked(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition' />
        </Link>
        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer borderBlack dark:bg-white/10'
          href='/CV.pdf'
          download
        >
          Download Resume{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <div className='flex gap-x-4'>
          <a
            className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
            href='https://linkedin.com/in/prathibha-ratnayake'
            target='_blank'
          >
            <BsLinkedin />
          </a>

          <a
            className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
            href='https://github.com/prathibha97'
            target='_blank'
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
