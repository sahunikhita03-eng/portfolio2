// Resume Data - Single source of truth for the portfolio
// All information extracted directly from Nikhita Sahu's resume

const resumeData = {
  personal: {
    name: "Nikhita Sahu",
    title: "Computer Science Engineering Student",
    subtitle: "Developer • Problem Solver • Tech Enthusiast",
    location: "Berhampur, Odisha, India",
    phone: "+91 9668331196",
    email: "sahunikhita03@gmail.com",
    linkedin: "https://linkedin.com/in/nikhita-sahu-89b555428",
    github: "https://github.com/sahunikhita03-eng",
    resumeFile: "/Nikhita_Sahu_Resume.pdf",
  },

  summary:
    "Motivated Computer Science Engineering student with a strong foundation in programming, data structures, and problem-solving. Proficient in C, C++, Python, and Java, with hands-on experience in academic projects and algorithms. Passionate about building efficient solutions and exploring emerging technologies. Eager to contribute to innovative projects and grow as a software developer.",

  about:
    "I'm a B.Tech Computer Science student at NIST University with a keen interest in software development, AI/ML, and emerging technologies. I enjoy building practical solutions — from safety-focused web applications to research in emotion recognition systems. With a solid foundation in core programming languages and data structures, I'm actively seeking opportunities to contribute to impactful projects while continuing to grow as a developer.",

  education: [
    {
      institution: "NIST University, Berhampur",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2024 – 2028",
      score: "CGPA: 8.62",
      type: "cgpa",
    },
    {
      institution: "Kendriya Vidyalaya",
      degree: "CBSE (Class XII)",
      duration: "2023",
      score: "Percentage: 62%",
      type: "percentage",
    },
    {
      institution: "Kendriya Vidyalaya",
      degree: "CBSE (Class X)",
      duration: "2021",
      score: "Percentage: 85%",
      type: "percentage",
    },
  ],

  experience: [
    {
      role: "Summer Intern",
      company: "NIST University, Berhampur",
      duration: "2025",
      highlights: [
        "Learned fundamentals of C and C++ programming.",
        "Worked on a minor project applying programming concepts.",
        "Gained knowledge of Data Structures and Algorithms.",
      ],
    },
  ],

  skills: {
    "Programming Languages": ["C", "C++", "Python", "Java"],
    "Data Structures & Algorithms": ["Arrays", "Stacks", "Queues"],
    "Web Technologies": ["React", "Node.js", "Express", "MongoDB"],
    "APIs & Services": ["Twilio API", "Google Maps API"],
    "Tools & Platforms": ["Git", "GitHub"],
  },

  projects: [
    {
      title: "Women Safety AI",
      description:
        "A web application designed to assist women in emergency situations, featuring one-click SOS alerts with real-time location tracking and instant SMS notifications to trusted contacts.",
      problem:
        "Women often face unsafe situations where quick communication with trusted contacts is critical. This app provides an immediate, one-click emergency response system.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Twilio API",
        "Google Maps API",
      ],
      highlights: [
        "Developed a web application to assist women in emergency situations.",
        "Implemented one-click SOS alerts with real-time location tracking.",
        "Integrated SMS alerts to notify trusted contacts instantly.",
        "Enabled live location sharing using Google Maps API.",
      ],
      github: "https://github.com/sahunikhita03-eng",
      featured: true,
    },
    {
      title: "Phone Book Management System",
      description:
        "A console-based application for efficient contact management, featuring CRUD operations with structured data storage and a user-friendly menu-driven interface.",
      problem:
        "Managing contacts efficiently in a lightweight, terminal-based environment without relying on external databases or complex tools.",
      technologies: ["C Programming"],
      highlights: [
        "Built a console-based application to manage contacts efficiently.",
        "Implemented add, delete, search, and update operations.",
        "Used structures and file handling for data storage.",
        "Designed a user-friendly menu-driven interface.",
      ],
      github: "https://github.com/sahunikhita03-eng",
      featured: true,
    },
  ],

  research: [
    {
      title:
        "Multimodal Data Fusion for Emotion Recognition in Emotionally Intelligent Systems",
      status: "In Progress",
      description:
        "Research exploring the integration of facial expressions, voice, and text for emotion detection to enhance human-computer interaction using intelligent systems.",
      highlights: [
        "Explores integration of facial expressions, voice, and text for emotion detection.",
        "Aims to enhance human-computer interaction using intelligent systems.",
        "Focuses on applying machine learning techniques for accurate predictions.",
      ],
    },
  ],

  activities: [
    {
      role: "Core Member",
      organization: "Cloud Computing Club, NIST University",
      highlights: [
        "Actively participating in cloud computing activities and discussions.",
        "Collaborating with peers to explore modern technologies.",
      ],
    },
    {
      role: "Workshop Coordinator",
      organization: "NIST University",
      highlights: [
        "Organized and managed technical workshops and events.",
        "Coordinated participants and ensured smooth execution.",
      ],
    },
  ],

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Research", href: "#research" },
    { label: "Activities", href: "#activities" },
    { label: "Contact", href: "#contact" },
  ],
};

export default resumeData;
