import { Project, SkillCategory, Experience } from '../types';

export const personalInfo = {
  name: "Wipaporn Wikornmetkul",
  nameTh: "วิภาพร วิกรเมธกุล",
  title: "Software Engineer & Full-Stack Developer",
  education: {
    degree: "Bachelor of Engineering in Software Engineering (B.Eng.)",
    degreeTh: "วิศวกรรมศาสตรบัณฑิต (วศ.บ.) สาขาวิชาวิศวกรรมซอฟต์แวร์",
    institution: "Prince of Songkla University",
    institutionTh: "มหาวิทยาลัยสงขลานครินทร์",
    period: "2022 - Present",
    status: "Undergraduate Software Engineering Student",
    statusTh: "นักศึกษาปริญญาตรี สาขาวิศวกรรมซอฟต์แวร์ ม.อ."
  },
  headline: "Building Reliable, Scalable & Practical Web Applications",
  headlineTh: "พัฒนาเว็บแอปพลิเคชันและระบบซอฟต์แวร์ที่ตอบโจทย์ผู้ใช้งานจริง",
  bio: "Hi, I'm Wipaporn, a Software Engineering student at Prince of Songkla University, Phuket Campus. I am passionate about building practical full-stack web applications with clean, intuitive user interfaces and robust, scalable backend systems.",
  bioTh: "สวัสดีค่ะ วิภาพร นักศึกษา Software Engineering ม.อ. ภูเก็ต ที่มุ่งมั่นพัฒนาเว็บแอปพลิเคชันแบบครบวงจร (Full-Stack) ทั้งหน้าบ้านที่ใช้งานง่ายและหลังบ้านที่เสถียร",
  location: "Phuket / Bangkok, Thailand",
  locationTh: "ภูเก็ต / กรุงเทพฯ, ประเทศไทย",
  status: "Available for Full-Stack Developer & Software Engineer roles",
  statusTh: "พร้อมรับงาน Full-Stack Developer & Software Engineer",
  email: "wipaporn.wikornmetkul@gmail.com",
  github: "https://github.com/Jnetteayecandy",
  linkedin: "https://www.linkedin.com/in/wipaporn-wikornmetkul-022843287",
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
    titleTh: "บริการทำการ์ดแต่งงานดิจิทัลและพัฒนาเว็บไซต์",
    subtitle: "Custom Web Solutions & Interactive Invitations (งานบริการ/ธุรกิจส่วนตัว)",
    subtitleTh: "Custom Web Solutions & Interactive Invitations (งานบริการ/ธุรกิจส่วนตัว)",
    description: "A commercial custom web design and development service offering bespoke interactive digital wedding invitations and specialized event landing pages. Features interactive RSVPs, countdowns, map integrations, and mobile-first animations tailored to real client needs.",
    descriptionTh: "บริการออกแบบและพัฒนาเว็บไซต์การ์ดแต่งงานออนไลน์แบบอินเตอร์แอคทีฟ ตอบรับเข้าร่วมงาน (RSVP) นับถอยหลัง แผนที่ และแอนิเมชันที่ปรับแต่งตามใจลูกค้า",
    tags: ["React", "JavaScript", "Tailwind CSS", "Mobile-First UX", "Client Service"],
    metrics: [
      { label: "Clients Served", value: "Commercial" },
      { label: "Device Support", value: "100% Responsive" }
    ],
    githubUrl: "https://github.com/Jnetteayecandy",
    liveUrl: "https://github.com/Jnetteayecandy",
    highlights: [
      "Custom UI/UX themed for individual wedding couples",
      "Interactive RSVP and calendar reminders",
      "Zero loading friction optimized for LINE and mobile browsers"
    ],
    highlightsTh: [
      "ออกแบบ UI/UX สวยงามตอบโจทย์คู่บ่าวสาวแต่ละคู่",
      "ระบบตอบรับเข้าร่วมงาน (RSVP) และแจ้งเตือนปฏิทิน",
      "โหลดไวและแสดงผลได้ดีเยี่ยมบน LINE และมือถือทุกรุ่น"
    ]
  },
  {
    id: "event-b-formal-methods",
    title: "Formal Methods & System Specification (Event-B)",
    titleTh: "การพิสูจน์ความถูกต้องของระบบด้วยวิธีเชิงรูปนัย (Event-B)",
    subtitle: "Safety-Critical Software Verification & Mathematical Modeling",
    subtitleTh: "แบบจำลองทางคณิตศาสตร์และการตรวจสอบระบบความปลอดภัยขั้นสูง",
    description: "Academic and engineering research project employing the Event-B formal method and Rodin platform to mathematically model, refine, and prove correctness of safety-critical concurrent systems, ensuring zero state invariants violation under all operational conditions.",
    descriptionTh: "โปรเจกต์วิจัยเชิงวิศวกรรมที่ใช้โมเดล Event-B และแพลตฟอร์ม Rodin เพื่อพิสูจน์ความถูกต้องและปลอดภัยของระบบแบบคู่ขนาน (Concurrent Systems) โดยไม่ให้เกิดข้อผิดพลาดในการทำงาน",
    tags: ["Event-B", "Rodin Tool", "Formal Proofs", "Safety Invariants", "Mathematical Logic"],
    metrics: [
      { label: "Proof Obligations", value: "100% Discharged" },
      { label: "Domain", value: "Safety-Critical" }
    ],
    githubUrl: "https://github.com/Jnetteayecandy",
    highlights: [
      "Stepwise machine refinement from abstract specifications to concrete guards",
      "Invariant preservation proofs for concurrent resource access",
      "Formal mathematical rigor meeting mission-critical safety standards"
    ],
    highlightsTh: [
      "การขัดเกลาโมเดลจากระดับนามธรรมสู่ระดับปฏิบัติการจริง",
      "การพิสูจน์ความคงตัว (Invariant Proofs) ของระบบคู่ขนาน",
      "ความแม่นยำทางคณิตศาสตร์ระดับมาตรฐานความปลอดภัยขั้นสูง"
    ]
  },
  {
    id: "web-mini-games",
    title: "Web Mini-Games for Friends",
    titleTh: "มินิเกมบนเว็บสำหรับเพื่อนๆ (Web Mini-Games)",
    subtitle: "Interactive In-Browser Games (Community Projects)",
    subtitleTh: "เกมออนไลน์แบบอินเตอร์แอคทีฟเล่นฟรีบนเบราว์เซอร์ (Community Project)",
    description: "A collection of fast, engaging web mini-games developed for friends and student peers to play directly in their browsers without any installation. Features responsive keyboard/touch controls, real-time score tracking, and smooth web animations.",
    descriptionTh: "รวมมินิเกมบนเว็บที่พัฒนาขึ้นเพื่อให้เพื่อนๆ เข้ามาเล่นได้ทันทีผ่านเบราว์เซอร์ ไม่ต้องติดตั้ง รองรับทั้งเมาส์และหน้าจอสัมผัส มีระบบบันทึกคะแนนแบบเรียลไทม์",
    tags: ["JavaScript", "HTML5 Canvas", "CSS3 Animations", "Game Logic", "Web Audio"],
    metrics: [
      { label: "Platform", value: "Web Browser" },
      { label: "Install Required", value: "0 MB (Play Now)" }
    ],
    githubUrl: "https://github.com/Jnetteayecandy",
    liveUrl: "https://github.com/Jnetteayecandy",
    highlights: [
      "Playable immediately in any browser with zero installation",
      "Smooth frame rate physics and local high-score persistence",
      "Built for community enjoyment and interactive frontend practice"
    ],
    highlightsTh: [
      "เล่นได้ทันทีผ่านเบราว์เซอร์โดยไม่ต้องติดตั้งโปรแกรม",
      "เฟรมเรตลื่นไหล ฟิสิกส์สมูท และบันทึกคะแนนสูงสุด",
      "พัฒนาเพื่อความสนุกในคอมมูนิตี้และฝึกฝนฝีมือฟรอนต์เอนด์"
    ]
  },
  {
    id: "physics-certification",
    badge: "PROJ-06",
    title: "General Physics Certification (BITS Pilani)",
    titleTh: "ใบรับรองวิชาฟิสิกส์ทั่วไป (BITS Pilani via Coursera)",
    subtitle: "Online Course Certification via Coursera",
    subtitleTh: "การรับรองหลักสูตรออนไลน์ที่ได้รับอนุมัติจาก BITS Pilani",
    description: "Completed rigorous foundational physics curriculum authorized by Birla Institute of Technology & Science (BITS Pilani) covering mechanics, electromagnetism, and physical modeling principles.",
    descriptionTh: "สำเร็จหลักสูตรฟิสิกส์พื้นฐานระดับมหาวิทยาลัยที่ได้รับอนุมัติจาก Birla Institute of Technology & Science (BITS Pilani) ครอบคลุมกลศาสตร์และแบบจำลองทางกายภาพ",
    imageUrl: "/certificate_preview.png",
    tags: ["Coursera", "BITS Pilani", "General Physics", "Certificate ID: 5JFGCCY2U9MI"],
    metrics: [
      { label: "Issue Date", value: "June 2026" },
      { label: "Status", value: "Verified Credential" }
    ],
    liveUrl: "https://coursera.org/verify/5JFGCCY2U9MI",
    highlights: [
      "Authorized by BITS Pilani (Chief Executive Officer, Strategic Initiatives)",
      "Public verification credential link available"
    ],
    highlightsTh: [
      "ได้รับอนุมัติจาก BITS Pilani (Chief Executive Officer, Strategic Initiatives)",
      "มีลิงก์ตรวจสอบสิทธิ์ทางการบน Coursera"
    ]
  },
  {
    id: "ibm-data-science-certification",
    badge: "PROJ-07",
    title: "What is Data Science? Certificate (IBM via Coursera)",
    titleTh: "ใบรับรองวิชาความรู้เบื้องต้นด้านวิทยาการข้อมูล (IBM via Coursera)",
    subtitle: "Online Course Authorized by IBM Offered Through Coursera",
    subtitleTh: "การรับรองหลักสูตรออนไลน์ที่ได้รับอนุมัติจาก IBM",
    description: "Successfully completed the foundational Data Science course authorized by IBM, covering core data science concepts, analytics methodologies, and real-world practitioner workflows.",
    descriptionTh: "สำเร็จหลักสูตรด้าน Data Science จาก IBM ครอบคลุมพื้นฐานการวิเคราะห์ข้อมูล บทบาทของ Data Scientist และกระบวนการทำงานด้านวิทยาการข้อมูลในภาคปฏิบัติ",
    imageUrl: "/ibm_certificate_preview.png",
    tags: ["Coursera", "IBM", "Data Science", "Certificate ID: YTYUF0EKSU7T"],
    metrics: [
      { label: "Issue Date", value: "July 2026" },
      { label: "Status", value: "Verified Credential" }
    ],
    liveUrl: "https://coursera.org/verify/YTYUF0EKSU7T",
    highlights: [
      "Authorized by IBM (Rav Ahuja - Global Program Director, Alex Aklson - Data Scientist)",
      "Officially verified on Coursera"
    ],
    highlightsTh: [
      "ได้รับอนุมัติจาก IBM (Rav Ahuja - Global Program Director, Alex Aklson - Data Scientist)",
      "มีลิงก์และรหัสยืนยันสิทธิ์ทางการบน Coursera"
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
  featuredJob: {
    title: "Fire Show Performer",
    titleTh: "นักแสดงโชว์ควงกระบองไฟ (Fire Show Performer)",
    category: "Side Job & Live Performance",
    categoryTh: "งานเสริมและการแสดง (Side Job & Performance)",
    description: "Performing rhythmic fire spinning and flow arts at festivals and community events. Demands strict safety protocols, intense concentration, physical coordination, and real-time composure under pressure.",
    descriptionTh: "ทำการแสดงควงกระบองไฟในงานเทศกาลและกิจกรรมชุมชน ช่วยฝึกฝนวินัย การมีสมาธิขั้นสูง การประเมินความปลอดภัย และการแก้ปัญหาเฉพาะหน้าภายใต้สภาวะกดดัน",
    skills: ["Stage Awareness", "Safety-First Protocols", "Live Performance", "High Composure Under Pressure"],
    skillsTh: ["ทักษะการแสดงและวินัยความปลอดภัย", "Stage Awareness", "Safety-First", "Live Performance"],
    stats: [
      { label: "Discipline", labelTh: "วินัยและความปลอดภัย", value: "Safety-First & Strict Focus" },
      { label: "Performance", labelTh: "การแสดง", value: "Festivals & Events" }
    ]
  },
  sideJob: {
    title: "Fire Show Performer",
    titleTh: "นักแสดงโชว์ควงกระบองไฟ (Fire Show Performer)",
    category: "Side Job & Live Performance",
    categoryTh: "งานเสริมและการแสดง (Side Job & Performance)",
    description: "Performing rhythmic fire spinning and flow arts at festivals and community events. Demands strict safety protocols, intense concentration, physical coordination, and real-time composure under pressure.",
    descriptionTh: "ทำการแสดงควงกระบองไฟในงานเทศกาลและกิจกรรมชุมชน ช่วยฝึกฝนวินัย การมีสมาธิขั้นสูง การประเมินความปลอดภัย และการแก้ปัญหาเฉพาะหน้าภายใต้สภาวะกดดัน",
    skills: ["Stage Awareness", "Safety-First Protocols", "Live Performance", "High Composure Under Pressure"],
    skillsTh: ["ทักษะการแสดงและวินัยความปลอดภัย", "Stage Awareness", "Safety-First", "Live Performance"],
    stats: [
      { label: "Discipline", labelTh: "วินัยและความปลอดภัย", value: "Safety-First & Strict Focus" },
      { label: "Performance", labelTh: "การแสดง", value: "Festivals & Events" }
    ]
  },
  hobbies: [
    {
      id: "photography",
      title: "Freelance Event Photography",
      titleTh: "รับงานถ่ายภาพอีเวนต์และกิจกรรม (Freelance Photography)",
      icon: "📷",
      tag: "Creative Side Job",
      tagTh: "งานเสริม & ภาพแคนดิด",
      description: "Providing photography services for university events, ceremonies, and special occasions. Skilled in DSLR/mirrorless operation, lighting composition, quick candid capture, and Adobe Lightroom color grading.",
      descriptionTh: "รับงานถ่ายภาพอีเวนต์ กิจกรรมของมหาวิทยาลัย งานพิธีการ และภาพแคนดิด (Candid) พร้อมทักษะการจัดแสงและแต่งโทนสีด้วยโปรแกรมระดับมืออาชีพ"
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
    role: "Fire Show Performer & Freelance Event Photographer",
    company: "Freelance & Performance",
    period: "2023 - Present",
    location: "Phuket, Thailand",
    type: "Side Job",
    achievements: [
      "Performed rhythmic fire show arts at community events and festivals, adhering strictly to fire safety protocols.",
      "Photographed university events, student community gatherings, and outdoor activities.",
      "Managed client scheduling, photo delivery timelines, and post-processing quality control."
    ],
    techStack: ["Stage Awareness", "Safety Protocols", "Photography", "Adobe Lightroom"]
  }
];

