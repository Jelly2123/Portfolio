export interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  architecture: string;
  features: string[];
  challenges: string;
  lessonsLearned: string;
  githubUrl: string;
  liveUrl?: string;
  image: string; // Placeholder/path
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  score?: string;
  details: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number; icon: string }[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'learning' | 'internship' | 'development';
}

export interface Achievement {
  title: string;
  value: number;
  suffix?: string;
  description: string;
}

export interface WhyHireMeCard {
  title: string;
  description: string;
  icon: string;
}

export const personalInfo = {
  name: 'Pragya Kashyap',
  title: 'Laravel Developer',
  subtitle: 'PHP Developer & Problem Solver',
  email: 'kashyappragya285@gmail.com',
  github: 'https://github.com/Jelly2123/Test1',
  linkedin: 'https://www.linkedin.com/in/pragya-kashyap-020514307',
  resumeUrl: '#', // We will make a downloadable resume or placeholder PDF link
  aboutText: 'Every developer starts somewhere. Mine began with a deep curiosity for computing which led to a Computer Science Diploma. Combining logical precision with modern web technologies, I found my passion in backend development, specifically building robust, secure, and clean architectures with Laravel and PHP.',
};

export const educationData: EducationItem[] = [
  {
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'Technical Board / Institute',
    duration: 'Completed',
    score: 'Honors',
    details: [
      'Acquired core knowledge of Data Structures, Algorithms, and DBMS.',
      'Studied Operating Systems, Software Engineering, and OOP principles.',
      'Created academic projects using PHP and MySQL.'
    ]
  },
  {
    degree: 'Class XII (Intermediate)',
    institution: 'Secondary School',
    duration: 'Completed',
    score: 'Distinction',
    details: [
      'Focused on Science stream (Physics, Chemistry, Mathematics).',
      'Discovered passion for algorithmic thinking and logic.'
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend Development',
    skills: [
      { name: 'PHP', level: 90, icon: 'FileCode' },
      { name: 'Laravel Framework', level: 85, icon: 'Server' },
      { name: 'OOP Principles', level: 85, icon: 'Layers' },
      { name: 'MVC Architecture', level: 90, icon: 'GitMerge' }
    ]
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML5 & CSS3', level: 92, icon: 'Html5' },
      { name: 'JavaScript (ES6+)', level: 80, icon: 'Code' },
      { name: 'Bootstrap', level: 85, icon: 'Wind' },
      { name: 'Responsive Layouts', level: 90, icon: 'Smartphone' }
    ]
  },
  {
    category: 'Database & Tools',
    skills: [
      { name: 'MySQL', level: 85, icon: 'Database' },
      { name: 'Database Design', level: 80, icon: 'Table' },
      { name: 'Git & GitHub', level: 85, icon: 'Github' },
      { name: 'VS Code', level: 90, icon: 'Laptop' }
    ]
  }
];

export const internshipData = {
  company: 'Softpro India Computer Technologies Pvt. Ltd.',
  role: 'Web Development Intern (PHP & Laravel)',
  duration: '6 Weeks Training & Internship',
  details: [
    'Learned advanced PHP syntax, MySQL query optimization, and Laravel MVC workflow.',
    'Collaborated on database designs for web solutions and resolved routing issues.',
    'Developed dynamic responsive frontends connected to secure backend REST endpoints.',
    'Deployed testing versions of projects on local and staging servers.'
  ],
  techUsed: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Git']
};

export const projectsData: Project[] = [
  {
    title: 'Grievance Redressal System',
    description: 'A digital portal enabling users to submit complaints, track status, and allow administrators to resolve queries systematically.',
    longDescription: 'This application addresses the inefficiency of manual grievance handling. It streamlines feedback loops, assigns complaints to respective departments, sends automated email alerts on status change, and displays analytics to managers.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Git'],
    architecture: 'MVC (Model-View-Controller) architecture using Laravel Query Builder and Eloquent ORM. Clean database structure with indexing on search fields for speed.',
    features: [
      'Role-based Access Control (User, Department Manager, Super Admin)',
      'Real-time Grievance Tracking dashboard with visual status colors (Pending, In-Progress, Solved)',
      'Automated email notification triggers upon grievance updates',
      'Analytical reports generated in CSV/PDF formats'
    ],
    challenges: 'Handling concurrent state transitions of grievances (e.g., preventing two departments from resolving the same ticket simultaneously) and implementing clean role authorization.',
    lessonsLearned: 'Mastered Laravel Middleware for request filtering, gained depth in relational database design (foreign key constraints, transactional queries), and learned to optimize Bootstrap grids.',
    githubUrl: 'https://github.com/Jelly2123/Test1',
    liveUrl: '#',
    image: 'grievance_system'
  },
  {
    title: 'Canteen Management System',
    description: 'An online food pre-ordering and menu scheduling platform for institutional canteens, cutting down queue times.',
    longDescription: 'Developed to digitize canteen operations. Students/staff can view active daily menus, place pre-orders, and receive digital receipt tokens. Canteen managers can update menus in real-time, view order queues, and reconcile sales reports.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'CSS3', 'Git'],
    architecture: 'Modular backend structure featuring custom services for token generation and order tracking. Integrates responsive UI tables for high-density order overview.',
    features: [
      'Dynamic Menu Planner showing daily breakfast, lunch, and snack options',
      'Token-based order confirmation system with unique QR-ready strings',
      'Real-time kitchen order queue dashboard for canteen staff',
      'Sales analytics dashboard representing daily and monthly revenue graphs'
    ],
    challenges: 'Designing a real-time order queue that didn\'t overload the server with constant HTTP polling, and implementing automatic inventory tracking logic when meals sell out.',
    lessonsLearned: 'Acquired hands-on experience in session handling, secure receipt generation, and designing mobile-first CSS grids for kitchen staff displays.',
    githubUrl: 'https://github.com/Jelly2123/Test1',
    liveUrl: '#',
    image: 'canteen_system'
  }
];

export const experienceRoadmap: Milestone[] = [
  {
    year: '2021',
    title: 'Academic Roots',
    description: 'Began Computer Science & Engineering Diploma, mastering core logical thinking, algorithm design, and relational database basics.',
    type: 'education'
  },
  {
    year: '2024',
    title: 'Professional Step',
    description: 'Joined Softpro India for a dedicated internship training, learning professional PHP, Laravel development, and team collaboration workflows.',
    type: 'internship'
  },
  {
    year: '2025 - Present',
    title: 'Full Stack Laravel Development',
    description: 'Building secure systems (Grievance Redressal, Canteen Management), expanding frontend skills (Tailwind, GSAP), and aiming for full stack scalability.',
    type: 'development'
  }
];

export const achievementStats: Achievement[] = [
  {
    title: 'Projects Completed',
    value: 5,
    suffix: '+',
    description: 'Full stack web applications built and deployed.'
  },
  {
    title: 'Technologies Learned',
    value: 10,
    suffix: '+',
    description: 'Languages, frameworks, and modern tools.'
  },
  {
    title: 'Internship Training',
    value: 6,
    suffix: ' Wks',
    description: 'At Softpro India, working on commercial development methodologies.'
  },
  {
    title: 'Academic Rank',
    value: 1,
    suffix: 'st',
    description: 'Ranked top performer with merit scholarships in college.'
  }
];

export const whyHireMeCards: WhyHireMeCard[] = [
  {
    title: 'Laravel Developer',
    description: 'Proficient in PHP, Eloquent ORM, custom middleware, MVC routing, and building secure, structured backends.',
    icon: 'Server'
  },
  {
    title: 'Analytical Thinker',
    description: 'Strong analytical background providing a logical approach to debugging, algorithmic efficiency, and complex queries.',
    icon: 'Brain'
  },
  {
    title: 'Responsive Designer',
    description: 'Committed to creating clean mobile-first frontends with Bootstrap/Tailwind CSS that look beautiful on all devices.',
    icon: 'Smartphone'
  },
  {
    title: 'Fast Learner',
    description: 'Demonstrated ability to pick up new tools (like Git, GSAP, Next.js, or Tailwind) and apply them to resolve project demands.',
    icon: 'Zap'
  },
  {
    title: 'Clean Code Advocate',
    description: 'Strong believer in writing self-documenting code, adhering to PSR standards, and keeping controller logic thin.',
    icon: 'Code'
  },
  {
    title: 'Relentless Problem Solver',
    description: 'Excel at diagnosing query performance bottlenecks, handling role authentications, and resolving merge conflicts.',
    icon: 'ShieldCheck'
  }
];
