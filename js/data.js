/* ==========================================================================
   BIKRAM GORAI — PORTFOLIO DATA STORE
   Centralized Structured Data for Projects, Hackathons, Skills & Logs
   ========================================================================== */

const PORTFOLIO_DATA = {
  profile: {
    name: "Bikram Gorai",
    title: "Backend / Full-Stack Developer",
    location: "Asansol, West Bengal, India",
    college: "Engineering College West Bengal",
    degree: "B.Tech in Computer Science and Engineering (2024–2028)",
    cgpa: "8.12 / 10",
    email: "bikram77620@gmail.com",
    phone: "776-205-8095",
    github: "https://github.com/BIKRAM-GORAI",
    linkedin: "https://www.linkedin.com/in/bikram-gorai/",
    domain: "https://bikramgorai.xyz"
  },

  hero: {
    status: "OPEN FOR BACKEND & FULL-STACK ROLES",
    headlinePart1: "Backend.",
    headlinePart2: "Architect.",
    headlinePart3: "Builder.",
    bio: "I am a Computer Science undergraduate focused on backend logic, database design, API security, offline-first architectures, and building real-world full-stack applications.",
    stats: [
      { value: "3+", label: "Major Systems Built" },
      { value: "30+", label: "Active Platform Users" },
      { value: "3rd", label: "CODE@FROST Hackathon" }
    ]
  },

  rotation: {
    cards: [
      {
        span: "card-span-6",
        category: "FLAGSHIP WORK",
        title: "Consistency Daily — Offline-First & AI Productivity Platform",
        description: "Built a full-stack habit & accountability platform with IndexedDB client persistence, Groq-powered AI coaching, squad accountability, and API rate limiting.",
        linkText: "Explore Consistency Daily ↗",
        linkUrl: "https://consistency-daily.vercel.app/"
      },
      {
        span: "card-span-6",
        category: "CURRENT FOCUS",
        title: "Backend Engineering & Systems Design",
        description: "Focusing on Node.js, Express REST API design, MongoDB indexing, authentication, security mechanisms, and C++ Data Structures & Algorithms.",
        linkText: "View Technical Skills ↗",
        linkUrl: "#skills"
      },
      {
        span: "card-span-4",
        category: "DSA & CODING PRACTICE",
        title: "LeetCode & C++ Consistency",
        description: "Daily C++ problem solving focusing on trees, graphs, dynamic programming, and algorithm optimization.",
        widgetType: "dsa-streak"
      },
      {
        span: "card-span-4",
        category: "CURRENT READ",
        title: "Designing Data-Intensive Applications",
        description: "Studying distributed systems, replication, partitioning, and database storage engines by Martin Kleppmann.",
        linkText: "Browse shelf ↗",
        linkUrl: "#"
      },
      {
        span: "card-span-4",
        category: "AI EXPERIMENT",
        title: "Anya — Voice AI Vector Memory",
        description: "Voice-native AI companion using 384-dimensional local vector embeddings for episodic long-term memory.",
        linkText: "View Anya ↗",
        linkUrl: "https://anya-voice-ai.vercel.app/"
      }
    ],
    logs: [
      "Log > building IndexedDB offline synchronization layer",
      "Log > implementing Groq AI coaching API integrations",
      "Log > optimizing MongoDB queries and Mongoose schema",
      "Log > securing Express REST endpoints with API rate limiting",
      "Log > C++ Data Structures & Algorithms daily practice",
      "Log > automated PDF e-ticket generation with QR verification"
    ]
  },

  projects: [
    {
      id: "consistency-daily",
      priority: "01 / FLAGSHIP PROJECT",
      title: "Consistency Daily",
      subtitle: "Full-Stack Productivity, Offline-First & AI Coaching Platform",
      description: "A comprehensive habit tracking platform featuring IndexedDB-based client-side offline persistence, Groq-powered AI coaching, squad accountability, distraction blocking, LeetCode integration, and backend rate limiting. Reached 30+ lifetime users.",
      tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "IndexedDB", "Groq API"],
      liveUrl: "https://consistency-daily.vercel.app/",
      githubUrl: "https://github.com/BIKRAM-GORAI/consistency",
      image: "assets/images/projects/consistency-daily.png",
      features: [
        "Offline-First Architecture using IndexedDB local storage & synchronization",
        "Groq-Powered AI Coaching for personalized daily productivity guidance",
        "Squad Accountability groups introducing social habit building",
        "API Rate Limiting & Backend Security to prevent excessive requests",
        "Mobile APK support for cross-platform application experience"
      ]
    },
    {
      id: "eventix",
      priority: "02 / FULL-STACK PLATFORM",
      title: "Eventix",
      subtitle: "College Event Management & Automated Ticketing Platform",
      description: "Centralized event platform for college clubs and societies. Supports multi-role portals, team registrations, automated PDF e-ticket generation, and real-time QR code attendance verification.",
      tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "HTML5", "CSS3"],
      liveUrl: "https://eventix-olive.vercel.app/",
      githubUrl: "https://github.com/BIKRAM-GORAI/Eventix",
      image: "assets/images/projects/eventix.png",
      features: [
        "Multi-Role Portals for college administrators, clubs, and students",
        "Automated PDF e-ticket generation upon event registration",
        "Real-Time Attendance Verification via mobile QR code scanner",
        "Team-based event registration workflow for competitions"
      ]
    },
    {
      id: "anya",
      priority: "03 / AI EXPERIMENT",
      title: "Anya",
      subtitle: "Voice-Native AI Companion with 384-D Vector Memory",
      description: "Voice-native conversational AI companion equipped with 384-dimensional local vector embeddings for persistent memory, episodic event logs, and adaptive personality tracking.",
      tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Vector Embeddings", "AI APIs"],
      liveUrl: "https://anya-voice-ai.vercel.app/",
      githubUrl: "https://github.com/BIKRAM-GORAI/voice-first-ai-companion",
      image: "assets/images/projects/anya.png",
      features: [
        "384-Dimensional Vector Embeddings for semantic long-term memory",
        "Episodic Event Logs retaining past conversation context",
        "Adaptive Personality Tracking that adjusts responses over time",
        "Voice-first conversational interaction mode"
      ]
    }
  ],

  hackathons: [
    {
      title: "CODE@FROST Hackathon (36-Hour Non-stop)",
      award: "3rd Place (AEC) + Best Buddy Award",
      team: "The Enigmatic (Bikram Gorai, Debjeet Dey, Baidyanath Mahato, Ayush Maji)",
      track: "Glacier Commerce — FinTech & E-Commerce",
      description: "Built a Hyperlocal Skill Exchange Platform enabling service discovery (plumbers, tutors, electricians) within a 5-10 km radius, featuring bidding, reputation scoring, and provider-customer interactions under intense 36-hour time constraints."
    },
    {
      title: "Overclocked AEC Hackathon",
      award: "Participant & Project Showcase",
      team: "Bikram Gorai, Baidyanath Mahato, Ayush Maji",
      track: "Campus Tech & Event Systems",
      description: "Collaboratively built and deployed Eventix, a centralized event management platform designed to unify college clubs, societies, and attendance workflows under one system."
    }
  ],

  searchPaletteItems: [
    { title: "View Resume (PDF)", category: "Resume", url: "assets/images/Resume.pdf" },
    { title: "Consistency Daily", category: "Project", url: "https://consistency-daily.vercel.app/" },
    { title: "Eventix Platform", category: "Project", url: "https://eventix-olive.vercel.app/" },
    { title: "Anya Voice AI", category: "Project", url: "https://anya-voice-ai.vercel.app/" },
    { title: "Technical Toolkit & Skills", category: "Skills", url: "#skills" },
    { title: "Academic Background & Education", category: "Education", url: "#education" },
    { title: "CODE@FROST Hackathon", category: "Achievement", url: "#hackathons" },
    { title: "GitHub Profile", category: "Social", url: "https://github.com/BIKRAM-GORAI" },
    { title: "LinkedIn Profile", category: "Social", url: "https://www.linkedin.com/in/bikram-gorai/" },
    { title: "Get in Touch / Contact", category: "Contact", url: "#contact" }
  ]
};
