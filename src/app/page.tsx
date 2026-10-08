"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiArrowRight,
  FiMail,
  FiLinkedin,
  FiPhone,
  FiMapPin,
  FiCloud,
  FiCpu,
  FiServer,
  FiRefreshCw,
  FiAward,
  FiCode,
  FiTerminal,
  FiDatabase,
  FiSmartphone,
  FiSun,
  FiActivity,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";
import {
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiReact,
  SiSpringboot,
  SiPython,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiApachekafka,
  SiTensorflow,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Navbar from "@/components/Navbar";

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ── Data ── */
const experiences = [
  {
    role: "Software Engineer Intern",
    company: "T-Mobile",
    date: "May 2026 – Present",
    location: "WA, USA",
    bullets: [
      "Designed and deployed a multi-tenant Claude Code platform in Node.js/TypeScript and Python, accessible via a Web UI and Microsoft Teams (Entra ID + Graph API), with backend workloads orchestrated in Kubernetes pods.",
      "Engineered platform reliability and security features: real-time WebSocket connections, GitLab OAuth, Playwright with automated branch management, stateful session checkpointing for restore, and token-based access control stored in the database.",
      "Built an Amazon Bedrock-powered accessory recommendation pipeline for T-Mobile commerce, surfacing personalized suggestions at checkout via order hooks.",
      "Automated environment provisioning by adding an Amazon EKS deployment stage to existing CI/CD pipelines.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "Amazon",
    date: "Aug 2021 – Aug 2025",
    location: "Hyderabad, India",
    bullets: [
      "Expanded distributed services to a new AWS region (ZAZ), provisioning and validating cloud infrastructure (ASGs, EC2, ALBs/NLBs, VPCs, subnets, security groups) to support high-availability web services, boosting service coverage by 40%.",
      "Modernized an internal dashboard by replacing DynamoDB metadata reads with real-time service APIs and lazy loading, reducing load time, stale data, and DynamoDB storage/read costs while preserving existing workflows.",
      "Designed and implemented an automated alerting pipeline integrating CloudWatch, SQS, and Slack to enable real-time monitoring and reduce MTTR across distributed applications.",
      "Built a Python load forecasting pipeline on CloudWatch metrics to predict peak traffic and automate EC2 fleet scaling.",
      "Built Java REST APIs to modernize legacy components, eliminating 45+ infrastructure risks per service across 90K resources.",
      "Implemented Security Event Logging with 1-year encrypted S3 retention, least-privilege IAM controls, and CI/CD-managed compliance.",
      "Led root cause analysis for Sev-1 Linux networking incidents, implementing long-term fixes to prevent recurrence.",
      "Drove a migration campaign for 1,500+ services to adopt JDK 17, automating code reviews and actively supporting teams through successful migration.",
      "Onboarded customer tickets to GenAI TicketSummarizer, generating real-time summaries to improve efficiency.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Amazon",
    date: "Jan 2021 – Jul 2021",
    location: "Hyderabad, India",
    bullets: [
      'Launched "Sync Data," an internal automation tool built with Java, JavaScript, and DynamoDB; tested using JUnit and Mockito, adopted by 2,000+ teams to streamline repetitive data workflows and reduce operational overhead.',
      "Developed Bash scripts using curl to scrape internal web data and parse it for automation workflows.",
      "Developed Bash scripts to automate infrastructure transfers and ownership validation for hostclasses.",
      "Performed Linux-based systems debugging, analyzing TCP/IP behavior, latency, and concurrency issues to identify bottlenecks.",
      "Developed a Tampermonkey script using JavaScript, HTML/CSS, and DOM manipulation to inject custom UI into existing workflows, automating repetitive tasks and boosting developer productivity by 70%.",
    ],
  },
  {
    role: "Software Intern",
    company: "Amazon",
    date: "Jan 2020 – Jun 2020",
    location: "Delhi, India",
    bullets: [
      "Built an end-to-end Python ML pipeline to ingest real-time Twitter data, apply NLP techniques (tokenization, TF-IDF, feature engineering), and evaluate customer sentiment for a European locker facility launch.",
      "Preprocessed 50K+ records with deduplication, missing-value handling, and feature engineering to improve data quality.",
      "Built a ReactJS dashboard with a FastAPI backend to inspect real-time ML predictions.",
    ],
  },
];

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FiCode />,
    color: "purple",
    skills: [
      "C",
      "C++",
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "Bash/Shell",
      "Kotlin",
    ],
  },
  {
    title: "Tools & Frameworks",
    icon: <FiTerminal />,
    color: "teal",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "React / React Native",
      "Node.js",
      "Swift",
      ".NET",
      "Git",
      "JIRA",
      "Agile/Scrum",
      "Mockito",
      "JUnit",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <FiCloud />,
    color: "purple",
    skills: [
      "AWS (EKS, EC2, Lambda, SQS, DynamoDB, S3, CloudWatch)",
      "GCP",
      "Docker",
      "Kubernetes",
      "Linux",
      "Jenkins",
      "Ansible",
      "Terraform",
    ],
  },
  {
    title: "ML & Analytics",
    icon: <FiTrendingUp />,
    color: "amber",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "SciPy",
      "NLP",
      "Feature Engineering",
      "scikit-learn",
    ],
  },
  {
    title: "Networking & Databases",
    icon: <FiDatabase />,
    color: "teal",
    skills: [
      "TCP/IP",
      "DHCP",
      "Routing Fundamentals",
      "Load Balancing (ALB/NLB)",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Elasticsearch",
      "Redis",
      "Kafka",
      "DynamoDB",
    ],
  },
  {
    title: "AI Tools & Editors",
    icon: <FiCpu />,
    color: "amber",
    skills: [
      "Claude",
      "Claude Code",
      "Amazon Bedrock",
      "Cursor",
      "Windsurf",
      "Copilot",
    ],
  },
];

const projects = [
  {
    title: "Lumen – AI Powered Skincare Assistant (iOS)",
    tech: [
      "Swift",
      "SwiftUI",
      "AWS",
      "OpenAI GPT-4o",
      "Hugging Face",
      "Pinecone",
    ],
    description:
      "AI-powered skincare assistant iOS app with a serverless AWS backend (Lambda, API Gateway, S3, DynamoDB) secured via Cognito JWT authentication. Integrated ML + LLM pipelines with RAG (Pinecone + Titan embeddings).",
    icon: <FiSmartphone />,
  },
  {
    title: "Solar Energy Estimation System",
    tech: ["Python", "TensorFlow/Keras", "LSTM-RNN", "Pandas", "Matplotlib"],
    description:
      "Processed and engineered time-series weather data from NREL and WWO using normalization, anomaly detection, and feature extraction. Built optimized LSTM-RNN models with Keras (lag features, dropout, tuning), evaluated using RMSE/R², and visualized results with Matplotlib.",
    icon: <FiSun />,
  },
];

const education = [
  {
    degree: "M.S. in Computer Software Engineering",
    school: "San Jose State University",
    date: "Aug 2025 – May 2027",
    location: "San Jose, CA",
    gpa: "3.8 / 4.0",
    coursework:
      "Enterprise Distributed Systems, System Design, Enterprise Software Platforms, Data Structures & Algorithms, Operating Systems Design, Database Systems, Data Mining",
  },
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    school: "Indira Gandhi Delhi Technical University for Women",
    date: "Aug 2017 – May 2021",
    location: "Delhi, India",
    gpa: "3.8 / 4.0",
    coursework:
      "Cloud Computing, Data Communication & Networking, Object Oriented Programming, Data Structures using C++",
  },
];

const techIcons = [
  SiAmazonwebservices,
  FaJava,
  SiPython,
  SiTypescript,
  SiReact,
  SiSpringboot,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiTensorflow,
  SiGit,
];

/* ── Component ── */
export default function Home() {
  return (
    <>
      <Navbar />

      {/* ═══════ HERO ═══════ */}
      <section className="hero" id="hero">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-gradient-2" />
        <div className="grid-bg" />

        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div className="hero-badge" variants={fadeUp} custom={0}>
              <span className="hero-badge-dot" />
              Open to Opportunities
            </motion.div>

            <motion.h1 className="hero-name" variants={fadeUp} custom={1}>
              Shefali
              <br />
              <span className="hero-name-gradient">Saini</span>
            </motion.h1>

            <motion.p className="hero-title" variants={fadeUp} custom={2}>
              Software Engineer with 4+ years at{" "}
              <strong style={{ color: "#f59e0b" }}>Amazon</strong>, now
              building AI platforms at{" "}
              <strong style={{ color: "#e20074" }}>T-Mobile</strong>.
              Specializing in distributed systems, cloud infrastructure &amp;
              GenAI. Pursuing MS at{" "}
              <strong style={{ color: "#a855f7" }}>San Jose State</strong>.
            </motion.p>

            <motion.div className="hero-stats" variants={fadeUp} custom={3}>
              <div className="hero-stat">
                <div className="hero-stat-number">4+</div>
                <div className="hero-stat-label">Years at Amazon</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">1500+</div>
                <div className="hero-stat-label">Services Migrated</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">2,000+</div>
                <div className="hero-stat-label">Teams Using My Tools</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">3.8</div>
                <div className="hero-stat-label">GPA at SJSU</div>
              </div>
            </motion.div>

            <motion.div
              className="hero-cta-group"
              variants={fadeUp}
              custom={4}
            >
              <a href="#contact" className="btn-primary">
                Get In Touch <FiArrowRight />
              </a>
              <a href="#experience" className="btn-secondary">
                View My Work
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-image-wrapper">
              <div className="hero-image-glow" />
              <div className="hero-image-container">
                <Image
                  src="/profile-1.jpg"
                  alt="Shefali Saini"
                  fill
                  priority
                  sizes="420px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>

              <motion.div
                className="hero-floating-card card-1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <div className="floating-icon purple">
                  <FiCloud />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                    AWS Expert
                  </div>
                  <div
                    style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                  >
                    Cloud & DevOps
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="hero-floating-card card-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <div className="floating-icon teal">
                  <FiCpu />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                    GenAI & ML
                  </div>
                  <div
                    style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                  >
                    Claude, Bedrock & LLMs
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ TECH MARQUEE ═══════ */}
      <section
        style={{
          padding: "40px 0",
          borderTop: "1px solid var(--border-glass)",
          borderBottom: "1px solid var(--border-glass)",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: "48px",
            alignItems: "center",
            width: "max-content",
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...techIcons, ...techIcons].map((Icon, i) => (
            <Icon
              key={i}
              size={32}
              style={{ color: "var(--text-muted)", opacity: 0.6, flexShrink: 0 }}
            />
          ))}
        </motion.div>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section className="section" id="about">
        <div className="grid-bg" />
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div className="section-label" variants={fadeUp}>
              About
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp}>
              Turning complex problems into
              <br />
              scalable solutions
            </motion.h2>
          </motion.div>

          <motion.div
            className="about-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div className="about-image-container" variants={fadeUp}>
              <Image
                src="/profile-2.jpg"
                alt="Shefali Saini"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              <div className="about-image-overlay" />
            </motion.div>

            <motion.div className="about-text" variants={stagger}>
              <motion.h3 variants={fadeUp}>
                Hi, I&apos;m Shefali 👋
              </motion.h3>
              <motion.p variants={fadeUp}>
                I&apos;m a software engineer with over four years of experience
                at Amazon, where I worked across cloud infrastructure, platform
                modernization, and machine learning. Today I&apos;m a Software
                Engineer Intern at T-Mobile, building a multi-tenant Claude Code
                platform and Amazon Bedrock-powered recommendations. I thrive at
                the
                intersection of building reliable distributed systems and
                leveraging data-driven automation to solve complex operational
                challenges.
              </motion.p>
              <motion.p variants={fadeUp}>
                Currently pursuing my Master&apos;s in Computer Software
                Engineering at San Jose State University with a 3.8 GPA,
                I&apos;m passionate about expanding my expertise in
                enterprise software architecture and emerging AI technologies.
              </motion.p>

              <motion.div className="about-highlights" variants={stagger}>
                <motion.div className="about-highlight-card" variants={fadeUp}>
                  <div className="icon">
                    <FiLayers />
                  </div>
                  <h4>Infrastructure at Scale</h4>
                  <p>AWS region expansion & platform modernization</p>
                </motion.div>
                <motion.div className="about-highlight-card" variants={fadeUp}>
                  <div className="icon">
                    <FiActivity />
                  </div>
                  <h4>GenAI Platforms</h4>
                  <p>Multi-tenant Claude Code platform & Bedrock pipelines</p>
                </motion.div>
                <motion.div className="about-highlight-card" variants={fadeUp}>
                  <div className="icon">
                    <FiRefreshCw />
                  </div>
                  <h4>Migration Expert</h4>
                  <p>1,500+ services migrated to JDK 17</p>
                </motion.div>
                <motion.div className="about-highlight-card" variants={fadeUp}>
                  <div className="icon">
                    <FiServer />
                  </div>
                  <h4>Platform Modernization</h4>
                  <p>45+ risks eliminated per service across 90K resources</p>
                </motion.div>
                <motion.div className="about-highlight-card" variants={fadeUp}>
                  <div className="icon">
                    <FiCpu />
                  </div>
                  <h4>ML & AI Integration</h4>
                  <p>Traffic forecasting & GenAI adoption</p>
                </motion.div>
                <motion.div className="about-highlight-card" variants={fadeUp}>
                  <div className="icon">
                    <FiAward />
                  </div>
                  <h4>Lifelong Learner</h4>
                  <p>MS at SJSU with 3.8 GPA</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ EXPERIENCE ═══════ */}
      <section className="section" id="experience">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div className="section-label" variants={fadeUp}>
              Experience
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp}>
              Where I&apos;ve made an impact
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeUp}>
              4+ years of building, scaling, and modernizing systems at Amazon,
              and now building GenAI platforms at T-Mobile.
            </motion.p>
          </motion.div>

          <div className="experience-timeline">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="experience-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
              >
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <div className="experience-role">{exp.role}</div>
                      <div className="experience-company">{exp.company}</div>
                    </div>
                    <div className="experience-meta">
                      <div className="experience-date">{exp.date}</div>
                      <div className="experience-location">{exp.location}</div>
                    </div>
                  </div>
                  <ul className="experience-bullets">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SKILLS ═══════ */}
      <section className="section" id="skills">
        <div className="grid-bg" />
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div className="section-label" variants={fadeUp}>
              Skills
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp}>
              My technical toolkit
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeUp}>
              A broad and deep stack spanning languages, frameworks, cloud
              platforms, and data tools.
            </motion.p>
          </motion.div>

          <motion.div
            className="skills-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                className="skill-category"
                variants={fadeUp}
                custom={i}
              >
                <div className="skill-category-header">
                  <div className={`skill-category-icon ${cat.color}`}>
                    {cat.icon}
                  </div>
                  <h3>{cat.title}</h3>
                </div>
                <div className="skill-tags">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ EDUCATION ═══════ */}
      <section className="section" id="education">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div className="section-label" variants={fadeUp}>
              Education
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp}>
              Academic foundation
            </motion.h2>
          </motion.div>

          <motion.div
            className="education-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="education-card"
                variants={fadeUp}
                custom={i}
              >
                <div className="education-degree">{edu.degree}</div>
                <div className="education-school">{edu.school}</div>
                <div className="education-meta">
                  <span>
                    {edu.date} · {edu.location}
                  </span>
                  <span className="education-gpa">GPA: {edu.gpa}</span>
                </div>
                <div className="education-coursework">
                  <strong>Relevant Coursework: </strong>
                  {edu.coursework}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ PROJECTS ═══════ */}
      <section className="section" id="projects">
        <div className="grid-bg" />
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div className="section-label" variants={fadeUp}>
              Projects
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp}>
              Things I&apos;ve built
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeUp}>
              Personal projects that push boundaries in AI, cloud, and data
              engineering.
            </motion.p>
          </motion.div>

          <motion.div
            className="projects-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="project-card"
                variants={fadeUp}
                custom={i}
              >
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                </div>
                <div className="project-title">{project.title}</div>
                <div className="project-description">
                  {project.description}
                </div>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ CONTACT ═══════ */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div
              className="section-label"
              variants={fadeUp}
              style={{ justifyContent: "center" }}
            >
              Contact
            </motion.div>
            <motion.h2 className="section-title" variants={fadeUp}>
              Let&apos;s connect
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeUp}>
              I&apos;m always open to new opportunities, collaborations, or
              just a friendly chat about tech.
            </motion.p>
          </motion.div>

          <motion.div
            className="contact-links"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.a
              href="mailto:sainishefali05@gmail.com"
              className="contact-link"
              variants={fadeUp}
            >
              <FiMail className="icon" />
              sainishefali05@gmail.com
            </motion.a>

            <motion.a
              href="tel:+14083964443"
              className="contact-link"
              variants={fadeUp}
            >
              <FiPhone className="icon" />
              +1 408-396-4443
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/shefali-saini"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              variants={fadeUp}
            >
              <FiLinkedin className="icon" />
              LinkedIn
            </motion.a>

            <motion.a href="#" className="contact-link" variants={fadeUp}>
              <FiMapPin className="icon" />
              San Jose, CA
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Shefali Saini.
          </p>
        </div>
      </footer>
    </>
  );
}
