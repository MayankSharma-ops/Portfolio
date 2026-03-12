// lib/data.ts
import { Project, Skill, Experience, Certificate, Achievement } from '@/types';

export const personalInfo = {
  name: 'Mayank Sharma',
  title: 'Full-Stack & Web3 Developer',
  tagline: 'Building decentralized and AI-powered applications with clean, scalable code.',
  bio: `I'm a Computer Science undergrad at LPU passionate about full-stack development, Web3, and AI. I build decentralized DApps, SaaS platforms, and REST APIs — turning complex problems into elegant, performant solutions.`,
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
    title: 'Web3 ChatApp',
    description: 'Decentralized peer-to-peer messaging DApp built on Ethereum with fully on-chain friendship graphs and conversation metadata.',
    longDescription: 'Architected and deployed an Ethereum-based P2P messaging protocol managing friendship graphs and conversation metadata fully on-chain. Reduced on-chain transaction costs by ~20% via Solidity optimizations (internal/pure/view visibility, private mappings, calldata params). Designed O(1) deterministic conversation ID generation using keccak256 hashing over lexicographically sorted address pairs. Eliminated two manual auth steps via Web3Modal session persistence and Holesky auto-switching, reducing wallet friction by ~25%.',
    tags: ['Next.js', 'React', 'Solidity', 'Hardhat', 'Ethers.js', 'Web3Modal', 'MetaMask'],
    github: 'https://github.com/MayankSharma-ops',
    live: 'https://web3-chatapp.vercel.app',
    featured: true,
    year: '2026',
  },
  {
    id: '2',
    title: 'AI Email Automation Platform',
    description: 'Full-stack SaaS for AI-driven email automation with content generation, personalization, and scheduled delivery.',
    longDescription: 'Engineered a full-stack AI-driven email automation SaaS supporting content generation, personalization, and scheduled delivery across 100+ structured test workflows. Structured REST APIs with Clerk-based JWT auth and refined PostgreSQL schemas via Prisma, cutting redundant DB queries by ~30% through indexing. Integrated OpenAI with controlled prompt logic and dynamic tone modulation, decreasing manual drafting time by ~60%. Orchestrated async job scheduling and delivery tracking via SendGrid.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'OpenAI API', 'SendGrid', 'Clerk'],
    github: 'https://github.com/MayankSharma-ops',
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
  { name: 'JavaScript', level: 88, category: 'languages' },
  { name: 'TypeScript', level: 85, category: 'languages' },
  { name: 'C++', level: 85, category: 'languages' },
  { name: 'Python', level: 80, category: 'languages' },
  { name: 'Java', level: 70, category: 'languages' },
  { name: 'Solidity', level: 75, category: 'languages' },

  // Frontend
  { name: 'Next.js', level: 88, category: 'frontend' },
  { name: 'React.js', level: 88, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'PostgreSQL', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'MySQL', level: 72, category: 'backend' },
  { name: 'Prisma ORM', level: 80, category: 'backend' },

  // Tools
  { name: 'Hardhat', level: 75, category: 'tools' },
  { name: 'Ethers.js', level: 75, category: 'tools' },
  { name: 'Git / GitHub', level: 88, category: 'tools' },
  { name: 'Postman', level: 82, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'XAMPP', level: 70, category: 'tools' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'DSA Training',
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
      'Independently built real-world projects spanning Web3, AI SaaS, and algorithm design.',
      'Solved 300+ DSA problems across LeetCode and GeeksForGeeks.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Solidity', 'PostgreSQL'],
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
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: '300+ Problems Solved on LeetCode & GFG',
    description: 'Sharpened problem-solving and algorithmic thinking by consistently solving challenges on LeetCode and GeeksForGeeks.',
    date: 'Feb 2026',
    icon: '🧠',
    category: 'other',
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
    title: 'Deployed Web3 ChatApp on Ethereum Holesky',
    description: 'Successfully architected and deployed a fully on-chain decentralized messaging DApp with gas optimizations on the Ethereum Holesky testnet.',
    date: 'Feb 2026',
    icon: '🔗',
    category: 'open-source',
    link: 'https://github.com/MayankSharma-ops',
  },
  {
    id: '5',
    title: 'Launched AI Email SaaS Platform',
    description: 'Independently engineered and shipped a full-stack AI-driven email automation SaaS platform handling 100+ structured test workflows.',
    date: 'Jan 2026',
    icon: '🚀',
    category: 'other',
    link: 'https://github.com/MayankSharma-ops',
  },
];
