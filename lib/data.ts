import messangerImg from '@/public/assets/images/messanger.png';
import threadsImg from '@/public/assets/images/threads.png';
import ecomAdminImg from '@/public/assets/images/ecommerce-admin.png';
import ecomImg from '@/public/assets/images/ecommerce.png';
import airbnbImg from '@/public/assets/images/airbnb.png';
import crownImg from '@/public/assets/images/crown.png';
import proshopImg from '@/public/assets/images/proshop.png';
import nasaImg from '@/public/assets/images/nasa.png';
import emsImg from '@/public/assets/images/ems.png';
import tiktikImg from '@/public/assets/images/tiktik.png';
import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Operations Analyst',
    location: 'Colombo, Sri Lanka',
    description:
      'I worked as a Operations Analyst for 2 years in RCM industry and overlooked accounts receivables in US healthcare sector.',
    icon: React.createElement(CgWorkAlt),
    date: '2021 - 2022',
  },
  {
    title: 'Software Engineer Intern',
    location: 'Kandy, Sri Lanka',
    description:
      'As a Software Engineer Intern, I aided the Engineering team in software development and debugging. I also upskilled to a full-stack developer, mastering front-end (HTML, CSS, JavaScript) and back-end (Node.js, mongoDB) technologies, enhancing my overall contribution to the team.',
    icon: React.createElement(CgWorkAlt),
    date: '2023',
  },
  {
    title: 'Junior Software Engineer',
    location: 'Kandy, Sri Lanka',
    description:
      "I'm currently a Junior Software Engineer specializing in full-stack development. My skill set encompasses technologies such as React, Next.js, TypeScript, Tailwind, Prisma, Node.js and MongoDB. I am also actively seeking full-time opportunities to further enhance my career and contribute my expertise to exciting projects.",
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
  {
    title: 'Progressing Towards BSc (Hons) in Computer Science',
    location: 'Stafforshire University, United Kingdom',
    description:
      'Anticipating the year 2024, I am on the verge of completing my journey towards a BSc (Hons) in Computer Science from Staffordshire University, situated in the esteemed United Kingdom.',
    icon: React.createElement(LuGraduationCap),
    date: '2024',
  },
] as const;

export const projectsData = [
  {
    title: 'Employee Management System',
    description:
      'Next.js 14, MongoDB, Tailwind CSS. Employee management, Leave management, Project management, Payroll management.',
    tags: [
      'React',
      'Next.js',
      'MongoDB',
      'Tailwind',
      'Mongoose',
      'Next Auth',
      'TypeScript',
    ],
    imageUrl: emsImg,
    link: 'https://next-ems.vercel.app/',
  },
  {
    title: 'Threads Clone',
    description:
      'Next.js 13, MongoDB, Tailwind CSS. Seamless user experience, Clerk authentication, nested comments, community creation/joining.',
    tags: [
      'React',
      'Next.js',
      'MongoDB',
      'Tailwind',
      'Mongoose',
      'Clerk',
      'webhooks',
      'TypeScript',
    ],
    imageUrl: threadsImg,
    link: 'https://threads-clone-sigma.vercel.app/',
  },
  {
    title: 'Messanger Clone',
    description:
      'Fully functional messaging app with Real-time messages, group chats, read receipts, and active status',
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'MongoDB',
      'Prisma',
      'NextAuth',
      'Pusher',
    ],
    imageUrl: messangerImg,
    link: 'https://messanger-clone-five.vercel.app/',
  },
  {
    title: 'Ecommerce Admin CMS',
    description:
      'Fully functional admin dashboard to manage multiple ecommerce stores with products, orders, and customers management',
    tags: [
      'React',
      'Next.js',
      'MySQL',
      'Prisma',
      'Tailwind',
      'NextAuth',
      'TypeScript',
    ],
    imageUrl: ecomAdminImg,
    link: 'https://ecommerce-admin-pink-gamma.vercel.app/',
  },
  {
    title: 'Ecommerce Store',
    description:
      'Fully functional ecommerce store with cart, checkout, and payment processing',
    tags: [
      'React',
      'Next.js',
      'MySQL',
      'Prisma',
      'Tailwind',
      'Stripe',
      'TypeScript',
    ],
    imageUrl: ecomImg,
    link: 'https://ecommerce-store-three-plum.vercel.app/',
  },
  {
    title: 'Airbnb Clone',
    description:
      'airbnb clone with map search, date picker, and reservation functionality',
    tags: [
      'React',
      'Next.js',
      'MySQL',
      'Prisma',
      'Tailwind',
      'NextAuth',
      'TypeScript',
    ],
    imageUrl: airbnbImg,
    link: 'https://threads-clone-sigma.vercel.app/',
  },
  {
    title: 'Crown Clothing',
    description:
      'Fully functional ecommerce store with cart, checkout, and payment processing',
    tags: ['React', 'Firebase', 'Styled Components', '0Auth', 'TypeScript'],
    imageUrl: crownImg,
    link: 'https://brilliant-taffy-591eac.netlify.app/',
  },
  {
    title: 'Proshop',
    description:
      'Ecommerce store with cart, checkout, and payment processing and admin dashboard to manage products, orders, and customers',
    tags: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Redux',
      'paypal',
      'Docker',
    ],
    imageUrl: proshopImg,
    link: 'https://proshop-y96f.onrender.com',
  },
  {
    title: 'NASA Mission Control',
    description:
      'Nasa mission control. Schedule, launch, and track missions to your favorite exoplanets!',
    tags: ['React', 'MongoDB', 'Express', 'Node.js', 'Docker'],
    imageUrl: nasaImg,
    link: 'https://nasa-a1ji.onrender.com',
  },
  {
    title: 'TikTik, a TikTok Clone',
    description:
      'Fully functional tiktok clone with video upload, like, comment, and share functionality',
    tags: ['React', 'Next.js', 'Firebase', 'Tailwind', '0Auth', 'TypeScript'],
    imageUrl: tiktikImg,
    link: 'https://tik-tik-five-kappa.vercel.app/',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Vue.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'MySQL',
  'Redux',
  'Express',
  'Framer Motion',
  'Docker',
  'AWS',
] as const;
