import ecomAdminImg from '@/public/assets/images/ecommerce-admin.png';
import ecomImg from '@/public/assets/images/ecommerce.png';
import emsImg from '@/public/assets/images/ems.png';
import lingoImg from '@/public/assets/images/lingo.png';

export const profile = {
  name: 'Prathibha Ratnayake',
  shortName: 'Prathibha',
  role: 'Software engineer',
  // Deliberately not a city. Timezone is the only locality worth stating
  // when the answer to "where" is "wherever the team is".
  timezone: 'GMT+5:30',
  workingStyle: 'Remote, hybrid or onsite',
  relocation: 'Open to relocating',
  // No year here on purpose — it is the one thing on the page guaranteed to
  // go stale, and the sentence is already present tense without it.
  availability: 'Open to new roles, and taking freelance work now.',
  email: 'prsthibha@gmail.com',
  phone: '+94 77 294 0633',
  resume: '/CV.pdf',
  socials: {
    github: 'https://github.com/prathibha97',
    linkedin: 'https://linkedin.com/in/prathibha-ratnayake',
    x: 'https://x.com/prathibha_dev',
  },
} as const;

/** What I'm actually doing right now — the part a CV buries on page one. */
export const now = {
  company: 'BotCalm',
  headline:
    'I design the Go service architecture behind a financial compliance platform — KYC, AML, fraud and transaction monitoring.',
  figures: [
    { value: '17', label: 'Go services in the platform' },
    { value: '20+', label: 'engineers I mentor across Go, React and Next.js' },
    { value: '2023', label: 'first paid line of production code' },
  ],
  detail: [
    {
      label: 'Architecture',
      body: 'Defining service boundaries across 17 Go microservices, with Kafka carrying the event flows between them.',
    },
    {
      label: 'Infrastructure',
      body: 'Kubernetes deployment topology provisioned through Terraform, so environments are reproducible rather than remembered.',
    },
    {
      label: 'Testing',
      body: 'Established the team’s Go testing practice — unit and integration coverage via Testify and Testcontainers — plus the code review guidelines around it.',
    },
    {
      label: 'Observability',
      body: 'Prometheus and Grafana for the platform, Sentry on the surfaces users touch.',
    },
  ],
} as const;

export const navLinks = [
  { name: 'Now', hash: '#now' },
  { name: 'Work', hash: '#work' },
  { name: 'About', hash: '#about' },
  { name: 'Path', hash: '#path' },
  { name: 'Writing', hash: '/writing' },
  { name: 'Contact', hash: '#contact' },
] as const;

export const sectionLinks = [
  { name: 'Now', hash: '#now' },
  { name: 'Work', hash: '#work' },
  { name: 'About', hash: '#about' },
  { name: 'Path', hash: '#path' },
  { name: 'Contact', hash: '#contact' },
] as const;

export type SectionName = (typeof sectionLinks)[number]['name'] | 'Home';

/**
 * Four side projects, written up properly. The clones and course builds that
 * taught me the stack are still on GitHub; the production work is under NDA,
 * so the Now section carries that weight instead.
 */
export const projectsData = [
  {
    title: 'Lingo',
    summary: 'A language-learning app built around an authoring tool',
    description:
      'A language course app in the Duolingo mould — lesson trees, a hearts system that gates practice, quests, and a Pro tier on Stripe. The half I care about is the admin side: a full authoring suite, so a course can be built and rearranged without anyone touching the database.',
    stack: ['Next.js', 'PostgreSQL', 'Drizzle', 'Clerk', 'Stripe'],
    imageUrl: lingoImg,
    link: 'https://lingo-lovat.vercel.app/',
    year: '2024',
  },
  {
    title: 'Employee Management',
    summary: 'One place to run a small company',
    description:
      'Org chart, leave requests, project allocation and payroll in a single surface, for teams that were running all four out of spreadsheets. Every mutation writes an audit record — which turned out to matter more to the people using it than any feature on the original list.',
    stack: ['Next.js', 'MongoDB', 'Mongoose', 'NextAuth'],
    imageUrl: emsImg,
    link: 'https://next-ems.vercel.app/',
    year: '2024',
  },
  {
    title: 'Commerce CMS',
    summary: 'Multi-tenant admin, and the API underneath it',
    description:
      'An admin for running several storefronts from one account — products, billboards, variants and orders, scoped per store. It doubles as the API the storefront below runs on, so the two were designed as one system rather than a frontend and a backend that met later.',
    stack: ['Next.js', 'MySQL', 'Prisma', 'NextAuth'],
    imageUrl: ecomAdminImg,
    link: 'https://ecommerce-admin-pink-gamma.vercel.app/',
    year: '2023',
  },
  {
    title: 'Commerce Storefront',
    summary: 'The customer half of the same system',
    description:
      'Cart, filtering and Stripe checkout against the CMS API, with webhook-driven fulfilment so orders settle without anyone watching the dashboard. Built second, which meant the API got a real consumer before it got frozen.',
    stack: ['Next.js', 'Stripe', 'TypeScript'],
    imageUrl: ecomImg,
    link: 'https://ecommerce-store-three-plum.vercel.app/',
    year: '2023',
  },
] as const;

export const experiencesData = [
  {
    title: 'Senior software engineer',
    org: 'BotCalm',
    description:
      'Go microservices architecture for a 17-service compliance platform, Kafka event flows, and a Kubernetes topology provisioned via Terraform. I own the technical roadmap and sprint planning, set the team’s coding and review standards, and mentor 20+ engineers across Go, React, Next.js and blockchain integration.',
    date: '2025 — now',
    current: true,
  },
  {
    title: 'Software engineer',
    org: 'BotCalm',
    description:
      'Built a full crypto ecosystem around an Ethereum-based token in Next.js and TypeScript, then cut deployment and page-load overhead with Redis-backed caching, Next.js standalone output and leaner Docker images. Also shipped the game API integration that opened the platform to a third-party catalogue.',
    date: '2024 — 2025',
  },
  {
    title: 'Software engineer',
    org: 'Sphiria Digital Studio',
    description:
      'Joined as an intern and left three roles later. Built a two-sided marketplace pairing event managers with audio and video providers — listings, real-time chat, proposal submission — then a customer portal for ticketing and client communication, and workflow modules for the internal management system.',
    date: '2023 — 2024',
  },
  {
    title: 'BSc (Hons) Computer Science',
    org: 'University of Staffordshire, UK',
    description: 'Finished with honours while working full time.',
    date: '2023 — 2024',
  },
  {
    title: 'Operations analyst',
    org: 'US healthcare revenue cycle',
    description:
      'Two years reading other people’s billing systems for a living, studying computer science at night. It is the reason I can sit in a room with people who don’t write code and still get to the actual trade-off.',
    date: '2021 — 2022',
  },
  {
    title: 'Advanced Diploma in Computer Science',
    org: 'Scottish Qualifications Authority',
    description: 'Evenings and weekends, alongside the operations job.',
    date: '2020 — 2022',
  },
  {
    title: 'HND in Business Management',
    org: 'NIBM',
    description: 'Where I started, and not where I expected to end up.',
    date: '2017 — 2019',
  },
] as const;

/** No version numbers — they rot. Everything here is in the CV for a reason. */
export const stackData = [
  { label: 'Languages', items: ['Go', 'TypeScript', 'JavaScript', 'SQL'] },
  {
    label: 'Services',
    items: ['Microservices', 'Event-driven systems', 'gRPC', 'REST', 'GraphQL', 'Node.js', 'NestJS'],
  },
  { label: 'Front end', items: ['React', 'Next.js', 'Redux', 'Server-side rendering', 'Tailwind'] },
  { label: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka'] },
  {
    label: 'Platform',
    items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'CI/CD', 'Nginx', 'Linux'],
  },
  {
    label: 'Testing & observability',
    items: ['Testify', 'Testcontainers', 'Integration testing', 'Prometheus', 'Grafana', 'Sentry'],
  },
  { label: 'Blockchain', items: ['Ethereum', 'Smart contract integration', 'Crypto wallets'] },
] as const;
