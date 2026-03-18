// lib/data.ts
import { Project, Skill, Experience, Certificate, Achievement } from '@/types';

export const personalInfo = {
  name: 'Mayank Sharma',
  title: 'Full Stack Web Developer',
  tagline: 'Building production-grade full-stack applications with clean, scalable code.',
  bio: `I'm a Computer Science undergrad at LPU passionate about full-stack development and AI. I build SaaS platforms, real-time applications, and REST APIs — turning complex problems into elegant, performant solutions.`,
  email: 'mayankkausishrakshak@gmail.com',
  phone: '+91-7452036672',
  location: 'Punjab, India',
  github: 'https://github.com/MayankSharma-ops',
  linkedin: 'https://www.linkedin.com/in/mayank---sharma/',
  resumeUrl: '/resume.pdf',
  availableForWork: true,
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'NexChat — Real-Time Chat Application',
    description: 'Production-grade full-stack real-time chat application with friend system, live messaging, and integrated video calling.',
    longDescription: 'Developed a production-grade full-stack chat application using Next.js 15, React 19, Node.js/Express, and PostgreSQL with JWT authentication, bcrypt hashing, and role-based API route protection. Engineered a RESTful backend with 15+ endpoints covering auth, friend request lifecycle, and real-time messaging, enforcing server-side friendship validation, Zod input sanitization, and rate limiting. Crafted a responsive component-driven UI with Tailwind CSS featuring emoji picker, 6-second polling-based live messaging, unread badges, and Jitsi Meet video calling via dynamic UUID-based room generation. Optimized PostgreSQL schema with UUID keys, composite indexes on message pairs and friend lookups, and deduplication constraints to minimize query overhead across high-frequency polling operations.',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'JWT', 'bcrypt', 'Zod', 'Jitsi Meet'],
    github: 'https://github.com/MayankSharma-ops/ChatApp',
    live: 'https://chat-app-self-phi-54.vercel.app/',
    featured: true,
    year: '2026',
  },
  {
    id: '2',
    title: 'AI Email Automation Platform (SaaS)',
    description: 'Full-stack SaaS for AI-driven email automation with content generation, personalization, and scheduled delivery.',
    longDescription: 'Engineered a full-stack AI-driven email automation SaaS supporting content generation, personalization, and scheduled delivery across 100+ structured test workflows. Structured REST APIs with Clerk-based JWT auth and refined PostgreSQL schemas via Prisma, cutting redundant DB queries by ~30% through indexing. Integrated OpenAI with controlled prompt logic and dynamic tone modulation, decreasing manual drafting time by ~60%. Orchestrated async job scheduling and delivery tracking via SendGrid.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'OpenAI API', 'SendGrid', 'Clerk'],
    github: 'https://github.com/MayankSharma-ops/AIEmail-SaaS',
    featured: true,
    year: '2026',
  },
  {
    id: '3',
    title: 'Sorting Algorithm Visualizer',
    description: 'Interactive visualizer demonstrating step-by-step execution and time-complexity of major sorting algorithms.',
    longDescription: 'Built during DSA training at LPU. Demonstrates real-time step-by-step execution flow and time-complexity behavior of major sorting algorithms with visual animations. Implemented optimized C++ logic with analysis of time-space trade-offs using Big-O notation.',
    tags: ['C++', 'Data Structures', 'Algorithms'],
    github: 'https://github.com/MayankSharma-ops',
    featured: false,
    year: '2025',
  },
];

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', level: 88, category: 'languages', icon: 'devicon-javascript-plain' },
  { name: 'TypeScript', level: 85, category: 'languages', icon: 'devicon-typescript-plain' },
  { name: 'C++', level: 85, category: 'languages', icon: 'devicon-cplusplus-plain' },
  { name: 'Python', level: 80, category: 'languages', icon: 'devicon-python-plain' },
  { name: 'Java', level: 70, category: 'languages', icon: 'devicon-java-plain' },

  // Frontend
  { name: 'Next.js', level: 88, category: 'frontend', icon: 'devicon-nextjs-plain' },
  { name: 'React.js', level: 88, category: 'frontend', icon: 'devicon-react-original' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend', icon: 'devicon-tailwindcss-original' },

  // Backend
  { name: 'Node.js', level: 85, category: 'backend', icon: 'devicon-nodejs-plain' },
  { name: 'Express.js', level: 85, category: 'backend', icon: 'devicon-express-original' },
  { name: 'PostgreSQL', level: 80, category: 'backend', icon: 'devicon-postgresql-plain' },
  { name: 'MongoDB', level: 75, category: 'backend', icon: 'devicon-mongodb-plain' },
  { name: 'MySQL', level: 72, category: 'backend', icon: 'devicon-mysql-plain' },
  { name: 'Prisma ORM', level: 80, category: 'backend', icon: 'devicon-prisma-original' },

  // Auth & Security
  { name: 'JWT', level: 85, category: 'backend' },
  { name: 'bcrypt', level: 82, category: 'backend' },
  { name: 'Zod', level: 80, category: 'backend' },
  { name: 'Clerk', level: 78, category: 'backend' },

  // Tools
  { name: 'Git / GitHub', level: 88, category: 'tools', icon: 'devicon-git-plain' },
  { name: 'Postman', level: 82, category: 'tools', icon: 'devicon-postman-plain' },
  { name: 'VS Code', level: 95, category: 'tools', icon: 'devicon-vscode-plain' },
  { name: 'Vercel', level: 80, category: 'tools', icon: 'devicon-vercel-original' },
  { name: 'XAMPP', level: 70, category: 'tools' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Algorithm Engineering Trainee',
    company: 'Lovely Professional University',
    location: 'Punjab, India',
    startDate: 'Jun 2025',
    endDate: 'Jul 2025',
    description: [
      'Completed structured training covering core DSA paradigms: recursion, sorting, searching, trees, graph traversal, and dynamic programming.',
      'Built an interactive Sorting Algorithm Visualizer demonstrating step-by-step execution and time-complexity behavior.',
      'Practiced optimized C++ implementations while analyzing time-space trade-offs using Big-O notation.',
    ],
    technologies: ['C++', 'Data Structures', 'Algorithms'],
    type: 'work',
  },
  {
    id: '2',
    role: 'B.Tech — Computer Science & Engineering',
    company: 'Lovely Professional University',
    location: 'Punjab, India',
    startDate: 'Aug 2023',
    endDate: 'Present',
    description: [
      'CGPA: 7.56 — pursuing a full-stack and systems-focused curriculum.',
      'Independently built production-grade projects spanning full-stack web apps, AI SaaS, and algorithm design.',
      'Solved 300+ DSA problems across LeetCode and GeeksForGeeks.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma'],
    type: 'education',
  },
  {
    id: '3',
    role: 'Intermediate (PCM)',
    company: 'Dellmond International School',
    location: 'Saharanpur, UP',
    startDate: 'Apr 2022',
    endDate: 'Mar 2023',
    description: ['Scored 80.2% in the PCM stream.'],
    technologies: [],
    type: 'education',
  },
  {
    id: '4',
    role: 'Matriculation',
    company: 'Dellmond International School',
    location: 'Saharanpur, UP',
    startDate: 'Apr 2020',
    endDate: 'Mar 2021',
    description: ['Scored 71.4%.'],
    technologies: [],
    type: 'education',
  },
];

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Node.js Certificate',
    issuer: 'HackerRank',
    date: 'Feb 2026',
    credentialUrl: 'https://www.hackerrank.com/certificates',
    category: 'Backend',
  },
  {
    id: '2',
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    date: 'Feb 2026',
    credentialUrl: 'https://www.hackerrank.com/certificates',
    category: 'Frontend',
  },
  {
    id: '3',
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'Nov 2025',
    credentialUrl: 'https://nptel.ac.in',
    category: 'Cloud',
  },
  {
    id: '4',
    title: 'Data Structures & Algorithms',
    issuer: 'Cipher Schools',
    date: 'May 2025',
    credentialUrl: 'https://cipherschools.com',
    category: 'DSA',
  },
  {
    id: '5',
    title: 'Object Oriented Programming (OOPS)',
    issuer: 'Cipher Schools',
    date: 'May 2025',
    credentialUrl: 'https://cipherschools.com',
    category: 'DSA',
  },
  {
    id: '6',
    title: 'C Programming',
    issuer: 'Cipher Schools',
    date: 'May 2025',
    credentialUrl: 'https://cipherschools.com',
    category: 'Languages',
  },
  {
    id: '7',
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    date: 'May 2025',
    credentialUrl: 'https://www.hackerrank.com/certificates/f0507f333a30',
    category: 'DSA',
  },
  {
    id: '8',
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    date: 'May 2025',
    credentialUrl: 'https://www.hackerrank.com/certificates/256ca3145b25',
    category: 'Database',
  },
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: '300+ Problems Solved on LeetCode & GFG',
    description: 'Sharpened problem-solving and algorithmic thinking by consistently solving challenges on LeetCode and GeeksForGeeks.',
    date: 'Feb 2026',
    icon: '🧠',
    category: 'coding',
    link: 'https://leetcode.com',
  },
  {
    id: '2',
    title: '5 Stars in C++ on HackerRank',
    description: 'Achieved 5-star rating in C++ on HackerRank, demonstrating strong language proficiency.',
    date: 'Jan 2026',
    icon: '⭐',
    category: 'award',
    link: 'https://www.hackerrank.com',
  },
  {
    id: '3',
    title: '5 Stars in Python on HackerRank',
    description: 'Achieved 5-star rating in Python on HackerRank, validating expertise in Python programming.',
    date: 'Jan 2026',
    icon: '🐍',
    category: 'award',
    link: 'https://www.hackerrank.com',
  },
  {
    id: '4',
    title: 'Launched NexChat — Real-Time Chat Platform',
    description: 'Independently engineered and deployed a production-grade full-stack chat application with JWT auth, 15+ REST API endpoints, polling-based live messaging, and Jitsi Meet video calling.',
    date: 'Feb 2026',
    icon: '💬',
    category: 'project',
    link: 'https://github.com/MayankSharma-ops/ChatApp',
  },
  {
    id: '5',
    title: 'Launched AI Email SaaS Platform',
    description: 'Independently engineered and shipped a full-stack AI-driven email automation SaaS platform handling 100+ structured test workflows.',
    date: 'Jan 2026',
    icon: '🚀',
    category: 'project',
    link: 'https://github.com/MayankSharma-ops/AIEmail-SaaS',
  },
];