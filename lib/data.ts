import airbnbImg from '@/public/assets/images/airbnb.png';
import crownImg from '@/public/assets/images/crown.png';
import ecomAdminImg from '@/public/assets/images/ecommerce-admin.png';
import ecomImg from '@/public/assets/images/ecommerce.png';
import emsImg from '@/public/assets/images/ems.png';
import lingoImg from '@/public/assets/images/lingo.png';
import messangerImg from '@/public/assets/images/messanger.png';
import nasaImg from '@/public/assets/images/nasa.png';
import proshopImg from '@/public/assets/images/proshop.png';
import threadsImg from '@/public/assets/images/threads.png';
import tiktikImg from '@/public/assets/images/tiktik.png';

export const profile = {
  name: 'Prathibha Ratnayake',
  shortName: 'Prathibha',
  role: 'Senior Software Engineer · Lead Engineer',
  location: 'Kandy, Sri Lanka',
  timezone: 'GMT+5:30',
  status: 'Open to senior roles + freelance — 2026',
  email: 'prsthibha@gmail.com',
  resume: '/CV.pdf',
  socials: {
    github: 'https://github.com/prathibha97',
    linkedin: 'https://linkedin.com/in/prathibha-ratnayake',
    x: 'https://x.com/prathibha_dev',
  },
  stats: [
    { value: '6+', label: 'Years writing software' },
    { value: '15+', label: 'Apps shipped end-to-end' },
    { value: 'Lead', label: 'Engineer on key projects' },
  ],
} as const;

export const navLinks = [
  { name: 'Work', hash: '#work' },
  { name: 'About', hash: '#about' },
  { name: 'Stack', hash: '#stack' },
  { name: 'Path', hash: '#path' },
  { name: 'Writing', hash: '/writing' },
  { name: 'Contact', hash: '#contact' },
] as const;

export const sectionLinks = [
  { name: 'Work', hash: '#work' },
  { name: 'About', hash: '#about' },
  { name: 'Stack', hash: '#stack' },
  { name: 'Path', hash: '#path' },
  { name: 'Contact', hash: '#contact' },
] as const;

export type SectionName = (typeof sectionLinks)[number]['name'] | 'Home';

export const experiencesData = [
  {
    title: 'Senior Software Engineer · Lead Engineer',
    company: 'Product engineering',
    location: 'Sri Lanka',
    description:
      "Promoted into the senior role and tapped to lead engineering on a handful of the organization's most critical projects. Focused on building enterprise-grade, highly scalable Go services with a measurable bar on latency, throughput and reliability — while still owning the full-stack story end-to-end.",
    date: '2025 — Present',
    type: 'work',
  },
  {
    title: 'Software Engineer',
    company: 'Product engineering',
    location: 'Sri Lanka',
    description:
      'Promoted from Junior to Software Engineer. Continued shipping full-stack features end-to-end — Next.js up front, Node and Postgres behind it — while taking on architecture ownership, code review and the first Go services on the team.',
    date: '2024 — 2025',
    type: 'work',
  },
  {
    title: 'BSc (Hons) Computer Science',
    company: 'Staffordshire University, UK',
    location: 'United Kingdom',
    description:
      'Graduated with honors. Focused on distributed systems, software architecture, and applied ML.',
    date: '2024',
    type: 'education',
  },
  {
    title: 'Junior Software Engineer',
    company: 'Full-stack product team',
    location: 'Sri Lanka',
    description:
      'Built and maintained production features across React/Next.js, Node.js, and MongoDB. Owned the migration from a legacy REST surface to typed contracts, cutting integration bugs by ~40%.',
    date: '2023 — 2024',
    type: 'work',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Engineering team',
    location: 'Sri Lanka',
    description:
      'Joined as backend-leaning, finished the internship shipping full-stack features. Mastered HTML/CSS/JS, Node, and MongoDB on real customer-facing surfaces.',
    date: '2023',
    type: 'work',
  },
  {
    title: 'Operations Analyst',
    company: 'US healthcare RCM',
    location: 'Colombo, Sri Lanka',
    description:
      'Two years in operations gave me the systems-thinking, attention to detail, and stakeholder communication that I carry into engineering work today. Spent the nights teaching myself the web stack.',
    date: '2021 — 2022',
    type: 'work',
  },
  {
    title: 'Started learning to code',
    company: 'Self-taught · full-stack',
    location: 'Kandy, Sri Lanka',
    description:
      'Decided I wanted to build software. Spent evenings teaching myself HTML/CSS/JS, then React, then Node, then databases — building little projects until they stopped being little. That self-directed runway is what made everything that came after possible.',
    date: '2020',
    type: 'education',
  },
] as const;

export const projectsData = [
  {
    title: 'Lingo',
    subtitle: 'Language learning, gamified',
    description:
      'Duolingo-style language app with hearts, quests, Stripe-powered Pro tier, an admin authoring suite, and a Drizzle/Postgres data layer.',
    tags: ['Next.js 14', 'Postgres', 'Drizzle', 'Clerk', 'Stripe', 'Tailwind'],
    imageUrl: lingoImg,
    link: 'https://lingo-lovat.vercel.app/',
    featured: true,
    category: 'product',
    year: '2024',
  },
  {
    title: 'Employee Management',
    subtitle: 'Operational suite for SMB teams',
    description:
      'End-to-end EMS: org chart, leave management, project allocation, and payroll. NextAuth + Mongo, audit logging on every mutation.',
    tags: ['Next.js 14', 'MongoDB', 'Mongoose', 'NextAuth', 'Tailwind'],
    imageUrl: emsImg,
    link: 'https://next-ems.vercel.app/',
    featured: true,
    category: 'product',
    year: '2024',
  },
  {
    title: 'Threads Clone',
    subtitle: 'Social app with nested threads',
    description:
      'Reverse-engineered Threads: nested comments, communities, Clerk webhooks for user sync, server-rendered timelines.',
    tags: ['Next.js 13', 'MongoDB', 'Clerk', 'Webhooks', 'TypeScript'],
    imageUrl: threadsImg,
    link: 'https://threads-clone-sigma.vercel.app/',
    featured: true,
    category: 'clone',
    year: '2024',
  },
  {
    title: 'Messenger',
    subtitle: 'Realtime chat with presence',
    description:
      'Pusher-powered realtime messages, group chats, read receipts, online presence, image uploads via Cloudinary.',
    tags: ['Next.js', 'Prisma', 'Pusher', 'NextAuth', 'Cloudinary'],
    imageUrl: messangerImg,
    link: 'https://messanger-clone-five.vercel.app/',
    featured: false,
    category: 'clone',
    year: '2023',
  },
  {
    title: 'Commerce CMS',
    subtitle: 'Multi-tenant admin for stores',
    description:
      'Admin surface for multiple stores: products, billboards, sizes, colors, orders. Headless API powering the storefront below.',
    tags: ['Next.js', 'MySQL', 'Prisma', 'NextAuth', 'Tailwind'],
    imageUrl: ecomAdminImg,
    link: 'https://ecommerce-admin-pink-gamma.vercel.app/',
    featured: false,
    category: 'product',
    year: '2023',
  },
  {
    title: 'Commerce Storefront',
    subtitle: 'Stripe checkout · headless',
    description:
      'Customer-facing storefront consuming the CMS API above. Cart, filters, Stripe checkout, webhook-driven order fulfillment.',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'TypeScript'],
    imageUrl: ecomImg,
    link: 'https://ecommerce-store-three-plum.vercel.app/',
    featured: false,
    category: 'product',
    year: '2023',
  },
  {
    title: 'Airbnb Clone',
    subtitle: 'Bookings · map search · reservations',
    description:
      'Map-based property search, date-range picker, reservation flow, image carousels, host dashboards.',
    tags: ['Next.js', 'Prisma', 'MySQL', 'NextAuth', 'Mapbox'],
    imageUrl: airbnbImg,
    link: 'https://threads-clone-sigma.vercel.app/',
    featured: false,
    category: 'clone',
    year: '2023',
  },
  {
    title: 'Proshop',
    subtitle: 'MERN commerce + admin',
    description:
      'Classic MERN commerce build with PayPal, Redux Toolkit, JWT auth, and a Dockerized deployment.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Docker'],
    imageUrl: proshopImg,
    link: 'https://proshop-y96f.onrender.com',
    featured: false,
    category: 'fullstack',
    year: '2023',
  },
  {
    title: 'NASA Mission Control',
    subtitle: 'Schedule launches to exoplanets',
    description:
      'Mission control UI on top of a Node/Express backend, fetching real exoplanet data and persisting scheduled launches.',
    tags: ['React', 'Express', 'MongoDB', 'Node.js', 'Docker'],
    imageUrl: nasaImg,
    link: 'https://nasa-a1ji.onrender.com',
    featured: false,
    category: 'fullstack',
    year: '2023',
  },
  {
    title: 'TikTik',
    subtitle: 'Short-form video, TikTok-style',
    description:
      'Vertical video feed, Google OAuth, like/comment, Firebase video uploads.',
    tags: ['Next.js', 'Firebase', 'OAuth', 'Tailwind'],
    imageUrl: tiktikImg,
    link: 'https://tik-tik-five-kappa.vercel.app/',
    featured: false,
    category: 'clone',
    year: '2023',
  },
  {
    title: 'Crown Clothing',
    subtitle: 'Styled-components commerce',
    description:
      'Firebase-backed commerce store with OAuth, cart state, and styled-components design system.',
    tags: ['React', 'Firebase', 'Styled Components', 'OAuth'],
    imageUrl: crownImg,
    link: 'https://brilliant-taffy-591eac.netlify.app/',
    featured: false,
    category: 'fullstack',
    year: '2022',
  },
] as const;

export const stackData = {
  Languages: ['Go', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
  'Go ecosystem': ['Gin', 'gRPC', 'Protocol Buffers', 'Goroutines', 'Channels', 'sqlc'],
  Frontend: ['React 19', 'Next.js 15', 'Tailwind v4', 'Motion', 'Three.js', 'Redux', 'Vue.js'],
  Backend: ['Node.js', 'Nest.js', 'Express', 'tRPC', 'GraphQL', 'WebSockets'],
  Data: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Kafka', 'Prisma', 'Drizzle'],
  Infra: ['Docker', 'Kubernetes', 'AWS', 'Vercel', 'GitHub Actions', 'Nginx', 'Linux'],
  Tooling: ['Git', 'Vitest', 'Playwright', 'Storybook', 'Figma'],
} as const;
