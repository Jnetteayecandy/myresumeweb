import { Project, SkillCategory, Experience } from '../types';

export const personalInfo = {
  name: "Wipaporn Wikornmetkul",
  nameTh: "วิภาพร วิกรเมธกุล",
  title: "Software Engineer & Full-Stack Developer",
  education: {
    degree: "Bachelor of Engineering in Software Engineering (B.Eng.)",
    degreeTh: "วิศวกรรมศาสตรบัณฑิต (วศ.บ.) สาขาวิชาวิศวกรรมซอฟต์แวร์",
    institution: "Prince of Songkla University, Phuket Campus",
    institutionTh: "มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต",
    period: "2022 - Present",
    status: "Undergraduate Software Engineering Student",
    statusTh: "นักศึกษาปริญญาตรี สาขาวิศวกรรมซอฟต์แวร์ ม.อ. ภูเก็ต"
  },
  headline: "Building Reliable, Scalable & Practical Web Applications",
  headlineTh: "พัฒนาเว็บแอปพลิเคชันและระบบซอฟต์แวร์ที่ตอบโจทย์ผู้ใช้งานจริง",
  bio: "Hi, I'm Wipaporn, a Software Engineering student at Prince of Songkla University, Phuket Campus. I am passionate about building practical full-stack web applications with clean, intuitive user interfaces and robust, scalable backend systems.",
  bioTh: "สวัสดีค่ะ วิภาพร นักศึกษา Software Engineering ม.อ. ภูเก็ต ที่มุ่งมั่นพัฒนาเว็บแอปพลิเคชันแบบครบวงจร (Full-Stack) ทั้งหน้าบ้านที่ใช้งานง่ายและหลังบ้านที่เสถียร",
  location: "Phuket / Bangkok, Thailand",
  locationTh: "ภูเก็ต / กรุงเทพฯ, ประเทศไทย",
  status: "Available for Full-Stack Developer & Software Engineer roles",
  statusTh: "พร้อมรับงาน Full-Stack Developer & Software Engineer",
  email: "wipaporn.wikorn@gmail.com",
  github: "https://github.com/wipaporn",
  linkedin: "https://linkedin.com/in/wipaporn-wikornmetkul",
  stats: [
    { label: "Degree Focus", labelTh: "หลักสูตร", value: "B.Eng. Software Engineering" },
    { label: "Campus", labelTh: "สถาบัน", value: "PSU Phuket Campus" },
    { label: "Core Stack", labelTh: "ทักษะหลัก", value: "React • Flask • MySQL • Python" },
    { label: "Domain Impact", labelTh: "จุดเน้น", value: "Full-Stack & HealthTech" },
  ]
};

export const flagshipProject: Project = {
  id: "pil-management-system",
  title: "PIL Management System",
  subtitle: "Patient Information Leaflet Management System (เอกสารกำกับยาฉบับประชาชน)",
  description: "A centralized digital platform co-designed with hospital pharmacists to replace hard-to-read paper medication inserts with structured digital leaflets. Patients scan physical medicine packages via QR code to view clear, verified usage instructions, critical contraindications, and emergency warnings.",
  tags: ["React", "Flask", "Python", "MySQL", "QR Code Engine", "REST API", "WCAG 2.1 AAA"],
  featured: true,
  liveUrl: "https://medication-project-tau.vercel.app",
  collaboration: "Co-designed and verified with certified hospital pharmacists for clinical accuracy and patient safety.",
  metrics: [
    { label: "Search Latency", value: "< 85ms" },
    { label: "Elderly Accessibility", value: "WCAG AAA" },
    { label: "Access Model", value: "Guest Access" },
    { label: "Verification", value: "100% Pharmacist Approved" }
  ],
  systemArchitecture: [
    "Domain-driven medication monograph schema structuring dosages, active ingredients, and absolute contraindications",
    "Pharmacist verification workflow ensuring data integrity and FDA-compliant revisions",
    "Instant QR Code generator mapped to individual medicine pack batches",
    "High-contrast, large-font accessible UI engineered for elderly patients and individuals with low digital literacy",
    "Zero-barrier guest mode allowing patients to read safety warnings without any account login"
  ],
  highlights: [
    "Direct co-design sessions with hospital clinical pharmacists",
    "Live production deployment with instant Guest Access",
    "Responsive mobile web application tested for clinic waiting rooms",
    "Intuitive medication safety warnings with color-coded severity badges"
  ]
};

export const bentoProjects: Project[] = [
  {
    id: "wedding-card-web",
    title: "Digital Wedding Card & Web Development Service",
    subtitle: "Custom Web Solutions & Interactive Invitations (งานบริการ/ธุรกิจส่วนตัว)",
    description: "A commercial custom web design and development service offering bespoke interactive digital wedding invitations and specialized event landing pages. Features interactive RSVPs, countdowns, map integrations, and mobile-first animations tailored to real client needs.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Mobile-First UX", "Client Service"],
    metrics: [
      { label: "Clients Served", value: "Commercial" },
      { label: "Device Support", value: "100% Responsive" }
    ],
    githubUrl: "https://github.com/wipaporn",
    liveUrl: "https://github.com/wipaporn",
    highlights: [
      "Custom UI/UX themed for individual wedding couples",
      "Interactive RSVP and calendar reminders",
      "Zero loading friction optimized for LINE and mobile browsers"
    ]
  },
  {
    id: "event-b-formal-methods",
    title: "Formal Methods & System Specification (Event-B)",
    subtitle: "Safety-Critical Software Verification & Mathematical Modeling",
    description: "Academic and engineering research project employing the Event-B formal method and Rodin platform to mathematically model, refine, and prove correctness of safety-critical concurrent systems, ensuring zero state invariants violation under all operational conditions.",
    tags: ["Event-B", "Rodin Tool", "Formal Proofs", "Safety Invariants", "Mathematical Logic"],
    metrics: [
      { label: "Proof Obligations", value: "100% Discharged" },
      { label: "Domain", value: "Safety-Critical" }
    ],
    githubUrl: "https://github.com/wipaporn",
    highlights: [
      "Stepwise machine refinement from abstract specifications to concrete guards",
      "Invariant preservation proofs for concurrent resource access",
      "Formal mathematical rigor meeting mission-critical safety standards"
    ]
  },
  {
    id: "web-mini-games",
    title: "Web Mini-Games for Friends",
    subtitle: "Interactive In-Browser Games (Community Projects)",
    description: "A collection of fast, engaging web mini-games developed for friends and student peers to play directly in their browsers without any installation. Features responsive keyboard/touch controls, real-time score tracking, and smooth web animations.",
    tags: ["JavaScript", "HTML5 Canvas", "CSS3 Animations", "Game Logic", "Web Audio"],
    metrics: [
      { label: "Platform", value: "Web Browser" },
      { label: "Install Required", value: "0 MB (Play Now)" }
    ],
    githubUrl: "https://github.com/wipaporn",
    liveUrl: "https://github.com/wipaporn",
    highlights: [
      "Playable immediately in any browser with zero installation",
      "Smooth frame rate physics and local high-score persistence",
      "Built for community enjoyment and interactive frontend practice"
    ]
  },
  {
    id: "university-event-booking",
    title: "University Event Booking Platform",
    subtitle: "Campus Venue & Activity Reservation System",
    description: "Full-stack university management portal facilitating venue reservations, club activity scheduling, and administrative approvals with automated conflict resolution and notification dispatch.",
    tags: ["Python", "Flask", "MySQL", "Bootstrap / Tailwind", "REST API"],
    metrics: [
      { label: "Role Hierarchy", value: "Student / Staff / Admin" },
      { label: "Conflict Checks", value: "Automated" }
    ],
    githubUrl: "https://github.com/wipaporn",
    highlights: [
      "Role-based access control (RBAC) for student organizers and faculty approvers",
      "Time-slot overlap prevention algorithms in relational SQL"
    ]
  },
  {
    id: "student-record-oop",
    title: "Student Record & GPA Calculator",
    subtitle: "Object-Oriented Programming (OOP) Architecture",
    description: "Robust academic record management system built in Java using core Object-Oriented principles (Encapsulation, Inheritance, Polymorphism, Abstraction) for transcript computation, prerequisites checking, and file persistence.",
    tags: ["Java", "OOP Design Patterns", "SQLite", "Unit Testing"],
    metrics: [
      { label: "Paradigms", value: "Pure OOP" },
      { label: "Data Engine", value: "SQLite / File I/O" }
    ],
    githubUrl: "https://github.com/wipaporn",
    highlights: [
      "Clean separation of Model-View-Controller architecture",
      "Comprehensive test suites for grading formula boundary conditions"
    ]
  },
  {
    id: "physics-certification",
    title: "General Physics Certification (BITS Pilani)",
    subtitle: "Online Course Certification via Coursera",
    description: "Completed rigorous foundational physics curriculum authorized by Birla Institute of Technology & Science (BITS Pilani) covering mechanics, electromagnetism, and physical modeling principles.",
    tags: ["Coursera", "BITS Pilani", "General Physics", "Certificate ID: 5JFGCCY2U9MI"],
    metrics: [
      { label: "Issue Date", value: "June 2026" },
      { label: "Status", value: "Verified Credential" }
    ],
    liveUrl: "https://coursera.org/verify/5JFGCCY2U9MI",
    highlights: [
      "Authorized by BITS Pilani (Chief Executive Officer, Strategic Initiatives)",
      "Public verification credential link available"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Core Programming & OOP",
    skills: [
      { name: "Python", level: 90, description: "Backend development, Flask REST APIs, data automation, scripting" },
      { name: "Java", level: 88, description: "Object-Oriented Programming (OOP), design patterns, software architecture" },
      { name: "JavaScript (ES6+)", level: 92, description: "Modern async/await, DOM manipulation, interactive frontend logic" },
      { name: "TypeScript", level: 85, description: "Static typing, component contracts, clean maintainable interfaces" }
    ]
  },
  {
    category: "Web Frameworks & Frontend",
    skills: [
      { name: "React", level: 90, description: "Hooks, state management, responsive UI components, SPAs" },
      { name: "Flask (Python)", level: 88, description: "Lightweight REST API services, route blueprints, ORM integration" },
      { name: "Tailwind CSS", level: 92, description: "Modern responsive utility styling, clean design systems" },
      { name: "HTML5 / CSS3", level: 95, description: "Semantic markup, CSS Grid/Flexbox, cross-browser responsiveness" }
    ]
  },
  {
    category: "Databases & APIs",
    skills: [
      { name: "MySQL", level: 88, description: "Relational database design, joins, normalization, schema constraints" },
      { name: "SQLite", level: 90, description: "Embedded data persistence, local application storage, testing" },
      { name: "RESTful APIs", level: 90, description: "Endpoint design, JSON payloads, HTTP status standards, API documentation" },
      { name: "OOP Principles", level: 92, description: "Encapsulation, inheritance, polymorphism, clean code practices" }
    ]
  },
  {
    category: "Tools, Version Control & Methods",
    skills: [
      { name: "Git", level: 90, description: "Branching, merging, commit hygiene, rebase workflows" },
      { name: "GitHub", level: 90, description: "Pull requests, code reviews, GitHub Pages, issues management" },
      { name: "Formal Methods (Event-B)", level: 82, description: "Safety-critical system specification, Rodin tool, invariant proofs" },
      { name: "UI/UX & Accessibility", level: 88, description: "WCAG accessibility guidelines, elderly-friendly design, clean aesthetics" }
    ]
  }
];

export const sideJobsAndHobbies = {
  sideJob: {
    title: "Freelance Event Photography",
    titleTh: "รับงานถ่ายภาพอีเวนต์และกิจกรรม (Freelance Event Photography)",
    category: "Creative Side Job (งานเสริม)",
    description: "Providing professional photography services for university events, ceremonies, sports activities, and special occasions. Skilled in DSLR/mirrorless operation, lighting composition, quick candid capture, and Adobe Lightroom color grading.",
    descriptionTh: "รับงานถ่ายภาพอีเวนต์ กิจกรรมของมหาวิทยาลัย งานพิธีการ และโอกาสพิเศษต่างๆ เชี่ยวชาญการจัดองค์ประกอบภาพ แสงและเงา การเก็บบรรยากาศภาพแคนดิด (Candid) และการปรับแต่งโทนสีด้วยโปรแกรมระดับมืออาชีพ",
    skills: ["Event Photography", "Lighting & Composition", "Adobe Lightroom", "Client Communication", "Visual Storytelling"],
    stats: [
      { label: "Focus", value: "Events & Candids" },
      { label: "Service", value: "Freelance Available" }
    ]
  },
  hobbies: [
    {
      id: "fire-show",
      title: "Fire Show Performer",
      titleTh: "กิจกรรมการแสดงไฟ (Fire Show)",
      icon: "🔥",
      tag: "Stage Performance & Discipline",
      tagTh: "ทักษะการแสดงและวินัยความปลอดภัย",
      description: "Trained in rhythmic fire spinning arts (poi/staff), demanding extreme spatial awareness, strict fire-safety protocols, physical coordination, and composure under pressure.",
      descriptionTh: "ฝึกฝนศิลปะการควงไฟและการแสดงไฟที่ต้องอาศัยวินัย สมาธิ ความแม่นยำสูง และการปฏิบัติตามมาตรฐานความปลอดภัยอย่างเคร่งครัด"
    },
    {
      id: "water-sports",
      title: "Water Sports & Surfing",
      titleTh: "กีฬาทางน้ำและกิจกรรมกลางแจ้ง",
      icon: "🏄‍♀️",
      tag: "Endurance & Agility",
      tagTh: "ความอดทนและความคล่องตัว",
      description: "Passionate about marine sports, swimming, and ocean surfing around Phuket's coastal spots. Builds stamina, mindfulness, and quick decision-making in dynamic conditions.",
      descriptionTh: "ชื่นชอบกีฬาทางน้ำ ว่ายน้ำ และการโต้คลื่นตามชายหาดในภูเก็ต ช่วยเสริมสร้างความแข็งแกร่ง สมาธิ และการตัดสินใจที่รวดเร็วในทุกสถานการณ์"
    },
    {
      id: "travel",
      title: "Travel & Exploration",
      titleTh: "การท่องเที่ยวและการเปิดโลกทัศน์",
      icon: "✈️",
      tag: "Perspective & Adaptability",
      tagTh: "การปรับตัวและมุมมองใหม่ๆ",
      description: "Traveling to discover diverse cultures, landscapes, and local perspectives, fueling creative problem solving and adaptable communication.",
      descriptionTh: "ออกเดินทางท่องเที่ยวเพื่อเรียนรู้วัฒนธรรมใหม่ๆ เปิดมุมมองทางความคิด และนำแรงบันดาลใจจากผู้คนและสถานที่จริงมาประยุกต์ใช้ในการสร้างสรรค์งาน"
    }
  ]
};

export const experienceData: Experience[] = [
  {
    role: "Full-Stack Software Engineering Student & Project Lead",
    company: "Prince of Songkla University, Phuket Campus",
    period: "2022 - Present",
    location: "Phuket, Thailand",
    type: "Academic & Projects",
    achievements: [
      "Led software development for the PIL Management System, collaborating closely with clinical pharmacists to create verified digital medication leaflets.",
      "Developed web applications utilizing React, Python (Flask), MySQL, SQLite, and modern REST APIs.",
      "Conducted formal software verification with Event-B to mathematically model and verify safety invariants.",
      "Maintained version control with Git and GitHub across team and individual software repositories."
    ],
    techStack: ["Python", "Java", "JavaScript", "Flask", "React", "MySQL", "SQLite", "Git", "Event-B"]
  },
  {
    role: "Freelance Web Developer & Digital Wedding Card Creator",
    company: "Self-Employed / Freelance",
    period: "2023 - Present",
    location: "Phuket / Remote",
    type: "Freelance",
    achievements: [
      "Delivered tailored responsive web solutions and digital wedding invitations with interactive features (RSVP, maps, countdowns).",
      "Handled end-to-end client consultation, requirements gathering, prototyping, development, and production deployment.",
      "Optimized mobile browsing speed and touch ergonomics across major mobile browsers."
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "HTML5", "Vercel"]
  },
  {
    role: "Freelance Event Photographer",
    company: "Freelance",
    period: "2023 - Present",
    location: "Phuket, Thailand",
    type: "Side Job",
    achievements: [
      "Photographed university events, student community gatherings, and outdoor activities.",
      "Managed client scheduling, photo delivery timelines, and post-processing quality control."
    ],
    techStack: ["Photography", "Adobe Lightroom", "Composition", "Client Relations"]
  }
];
