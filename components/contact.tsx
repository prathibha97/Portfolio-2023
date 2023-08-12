'use client';
import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id='contact'
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
      className='mb-28 sm:mb-40 scroll-mt-28'
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className='text-gray-700 -mt-6'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:prsthibha@gmail.com'>
          prsthibha@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully');
        }}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
