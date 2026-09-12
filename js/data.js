/* ==========================================================================
   BIKRAM GORAI — PORTFOLIO DATA STORE
   Centralized Structured Data for Projects, Hackathons, Skills & Logs
   ========================================================================== */

const PORTFOLIO_DATA = {
  profile: {
    name: "Bikram Gorai",
    title: "Backend / Full-Stack Developer",
    location: "Asansol, West Bengal, India",
    college: "Asansol Engineering College (AEC), West Bengal",
    degree: "B.Tech in Computer Science and Engineering (2024–2028)",
    cgpa: "8.12 / 10",
    email: "bikram77620@gmail.com",
    phone: "776-205-8095",
    github: "https://github.com/BIKRAM-GORAI",
    linkedin: "https://www.linkedin.com/in/bikram-gorai/",
    domain: "https://bikramgorai.vercel.app"
  },

  hero: {
    status: "OPEN FOR BACKEND & FULL-STACK ROLES",
    headlinePart1: "Backend.",
    headlinePart2: "Developer.",
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
        title: "Anya — Voice AI & Persistent Memory",
        description: "Voice-native AI companion featuring persistent local memory, episodic conversation history, and adaptive context tracking.",
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
      subtitle: "Voice-Native AI Companion with Persistent Memory",
      description: "Built a voice-native AI companion with persistent local memory, episodic conversation history, and adaptive personality tracking.",
      tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Vanilla JS", "AI APIs"],
      liveUrl: "https://anya-voice-ai.vercel.app/",
      githubUrl: "https://github.com/BIKRAM-GORAI/voice-first-ai-companion",
      image: "assets/images/projects/anya.png",
      features: [
        "Implemented persistent local memory for retaining conversational context",
        "Added episodic conversation history to maintain relevant interaction context",
        "Built adaptive personality tracking based on accumulated conversations",
        "Developed a hands-free voice-based conversational workflow"
      ]
    }
  ],

  hackathons: [
    {
      title: "CODE@FROST Hackathon (36-Hour Non-stop)",
      award: "3rd Place + Best Buddy Award",
      team: "Team: Bikram Gorai, Debjeet Dey, Baidyanath Mahato, Ayush Maji",
      track: "Glacier Commerce — FinTech & E-Commerce",
      description: "Secured 3rd place in a 36-hour hackathon and received the Best Buddy Award for teamwork and collaboration. Built a Hyperlocal Skill Exchange Platform connecting users with nearby service providers through location-based discovery, bidding, and reputation scoring."
    },
    {
      title: "Overclocked AEC Hackathon",
      award: "Participant & Project Showcase",
      team: "Team: Bikram Gorai, Hrithik Burnwal, Baidyanath Mahato, Ayush Maji",
      track: "Campus Tech & Event Systems",
      description: "Collaboratively built and deployed Eventix, a centralized event management platform designed to unify college clubs, societies, and attendance workflows under one system."
    }
  ],

  searchPaletteItems: [
    { title: "View Resume (PDF)", category: "Resume", url: "assets/images/Resume.pdf" },
    { title: "Consistency Daily", category: "Project", url: "https://consistency-daily.vercel.app/" },
    { title: "Eventix Platform", category: "Project", url: "https://eventix-olive.vercel.app/" },
    { title: "Anya Voice AI", category: "Project", url: "https://anya-voice-ai.vercel.app/" },
    { title: "From the Eyes of a Backend Developer (Story)", category: "Perspective", url: "#perspective" },
    { title: "Backend Systems Hardening & Audit (Race conditions, AES-256, N+1)", category: "Systems", url: "#perspective" },
    { title: "Technical Toolkit & Skills", category: "Skills", url: "#skills" },
    { title: "Academic Background & Education", category: "Education", url: "#education" },
    { title: "CODE@FROST Hackathon", category: "Achievement", url: "#hackathons" },
    { title: "GitHub Profile", category: "Social", url: "https://github.com/BIKRAM-GORAI" },
    { title: "GitHub Contribution Snake & Live Commit Velocity", category: "Activity", url: "https://github.com/BIKRAM-GORAI" },
    { title: "LinkedIn Profile", category: "Social", url: "https://www.linkedin.com/in/bikram-gorai/" },
    { title: "Get in Touch / Contact", category: "Contact", url: "#contact" }
  ],

  // Accurate historical daily commit counts for GitHub graph tooltip
  githubCommitCounts: {
  "2026-01-01": 5,
  "2026-01-02": 1,
  "2026-01-03": 3,
  "2026-01-07": 6,
  "2026-01-08": 1,
  "2026-01-09": 1,
  "2026-01-15": 3,
  "2026-01-18": 2,
  "2026-01-21": 1,
  "2026-01-26": 1,
  "2026-02-27": 8,
  "2026-03-03": 3,
  "2026-03-04": 5,
  "2026-03-19": 4,
  "2026-03-20": 1,
  "2026-03-28": 7,
  "2026-03-29": 14,
  "2026-04-02": 2,
  "2026-04-08": 2,
  "2026-04-10": 2,
  "2026-04-11": 5,
  "2026-04-12": 1,
  "2026-04-13": 1,
  "2026-04-21": 10,
  "2026-04-22": 2,
  "2026-04-23": 6,
  "2026-04-24": 1,
  "2026-04-25": 14,
  "2026-04-26": 1,
  "2026-04-28": 2,
  "2026-05-02": 2,
  "2026-05-03": 10,
  "2026-05-04": 4,
  "2026-05-05": 10,
  "2026-05-06": 16,
  "2026-05-07": 12,
  "2026-05-08": 18,
  "2026-05-09": 8,
  "2026-05-10": 12,
  "2026-05-11": 1,
  "2026-05-12": 8,
  "2026-05-14": 1,
  "2026-05-20": 1,
  "2026-05-21": 2,
  "2026-05-23": 2,
  "2026-05-25": 11,
  "2026-05-26": 16,
  "2026-05-27": 33,
  "2026-05-28": 14,
  "2026-05-29": 9,
  "2026-05-30": 27,
  "2026-05-31": 17,
  "2026-06-01": 20,
  "2026-06-02": 15,
  "2026-06-03": 9,
  "2026-06-04": 5,
  "2026-06-06": 3,
  "2026-06-07": 22,
  "2026-06-08": 11,
  "2026-06-09": 20,
  "2026-06-10": 10,
  "2026-06-11": 13,
  "2026-06-23": 12,
  "2026-06-24": 3,
  "2026-06-25": 11,
  "2026-06-27": 41,
  "2026-06-28": 12,
  "2026-07-01": 3,
  "2026-07-04": 3,
  "2026-07-15": 1,
  "2026-07-23": 4,
  "2026-07-24": 13,
  "2026-07-28": 1,
  "2026-08-08": 16,
  "2026-08-14": 20,
  "2026-08-16": 8,
  "2026-08-17": 2,
  "2026-08-18": 12,
  "2026-08-19": 6,
  "2026-08-20": 11,
  "2026-08-21": 14,
  "2026-08-22": 3,
  "2026-08-23": 4,
  "2026-08-27": 4,
  "2026-08-28": 16,
  "2026-08-31": 3,
  "2026-09-01": 2,
  "2026-09-02": 1,
  "2026-09-08": 9,
  "2026-09-09": 4,
  "2026-09-10": 5,
  "2026-09-12": 3,
  "2025-09-06": 2,
  "2025-09-07": 2,
  "2025-09-08": 2,
  "2025-09-09": 2,
  "2025-09-10": 8,
  "2025-09-11": 10,
  "2025-09-12": 8,
  "2025-10-03": 1,
  "2025-10-06": 7,
  "2025-10-07": 1,
  "2025-10-13": 1,
  "2025-10-16": 2,
  "2025-10-17": 2,
  "2025-11-22": 2,
  "2025-11-30": 8,
  "2025-12-01": 3,
  "2025-12-03": 1,
  "2025-12-04": 1,
  "2025-12-07": 3,
  "2025-12-15": 4,
  "2025-12-16": 1,
  "2025-12-19": 5,
  "2025-12-20": 3,
  "2025-12-21": 13,
  "2025-12-22": 1,
  "2025-12-25": 3,
  "2025-12-27": 5,
  "2025-12-29": 12,
  "2025-12-30": 6,
  "2024-08-30": 1
}
};
