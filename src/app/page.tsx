"use client";

import { motion } from "framer-motion";
import { GitBranch, Mail, Phone, MapPin, Code2, BrainCircuit, Terminal, Blocks, Award, Zap, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [inView, setInView] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  const scaleInRotate = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const bounceIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 60, damping: 12 },
    },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 20 },
    },
  };

  const expandWidth = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rotateInY = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.6 } as const,
    },
  };

  return (
    <main>
      {/* Navigation */}
      <header className={scrolled ? "scrolled" : ""}>
        <div className="container nav-container">
          <div className="logo gradient-text">S.I.</div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero container" id="about">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span className="hero-greeting" variants={bounceIn}>
            👋 Hello, I'm
          </motion.span>
          <motion.h1 variants={slideInLeft}>
            <motion.span variants={textReveal} custom={0}>Sibghatullah</motion.span> <br />
            <motion.span className="gradient-text" variants={rotateInY}>
              AI Engineer
            </motion.span>
          </motion.h1>
          <motion.p variants={slideInUp}>
            Innovative AI Engineer with expertise in <strong>machine learning</strong>, <strong>deep learning</strong>, <strong>computer vision</strong>, and <strong>LLM-based intelligent systems</strong>. Passionate about building scalable, research-driven solutions that solve real-world problems.
          </motion.p>
          <motion.div className="flex gap-3 mt-4 flex-wrap" variants={containerVariants}>
            <motion.a 
              href="mailto:sibghatullahiqbal629@gmail.com" 
              className="btn btn-primary" 
              variants={bounceIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} /> Contact Me
            </motion.a>
            <motion.a 
              href="https://GitBranch.com/Sibghat-629" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary" 
              variants={bounceIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitBranch size={18} /> GitBranch
            </motion.a>
          </motion.div>
          <motion.div className="flex gap-4 mt-6 text-sm text-gray-400 items-center flex-wrap" variants={fadeIn}>
            <motion.span 
              className="flex items-center gap-1"
              whileHover={{ x: 5, color: "#60a5fa" }}
            >
              <MapPin size={16} /> Islamabad, Pakistan
            </motion.span>
            <motion.span 
              className="flex items-center gap-1"
              whileHover={{ x: 5, color: "#60a5fa" }}
            >
              <Phone size={16} /> 03465040502
            </motion.span>
            <motion.span 
              className="flex items-center gap-1"
              whileHover={{ x: 5, color: "#60a5fa" }}
            >
              <Zap size={16} /> Open to Opportunities
            </motion.span>
          </motion.div>
        </motion.div>
      </section>

      {/* Professional Experience */}
      <section className="section container" id="experience">
        <motion.h2 
          className="section-title gradient-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Professional Experience
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <motion.div className="exp-item" variants={slideInLeft}>
            <div className="exp-date">12/2025 – 01/2026</div>
            <h3 className="exp-title">AI Intern</h3>
            <div className="exp-company">TRYSOFT AI, Islamabad</div>
            <p className="exp-desc">
              Contributed to the development of a real-time AI-based system engineered to process and respond to user interactions efficiently. Built conversational solutions with backend and web integration, driving improved interaction continuity.
            </p>
          </motion.div>

          <motion.div className="exp-item" variants={slideInLeft}>
            <div className="exp-date">07/2025 – 08/2025</div>
            <h3 className="exp-title">AI Intern</h3>
            <div className="exp-company">Siber Koza Alpha (NASTP), Rawalpindi</div>
            <p className="exp-desc">
              Developed and deployed an AI-powered chatbot designed to handle complex user queries and support multi-step interactions. Integrated the system with platforms including WhatsApp, Slack, Gmail, and Notion.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="section container" id="projects">
        <motion.h2 
          className="section-title gradient-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="grid-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Project 1 */}
          <motion.div 
            className="glass-card project-card" 
            variants={bounceIn}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="project-header">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <BrainCircuit size={24} className="gradient-text" />
              </motion.div>
              <h3 className="project-title">ProFile Match (ResumeIQ)</h3>
            </div>
            <p className="project-desc">NLP-powered resume-job matching API using FastAPI, TF-IDF, Sentence Transformers, and spaCy for hybrid semantic scoring.</p>
            <div className="badge-container">
              <motion.span className="badge" whileHover={{ scale: 1.1, y: -2 }}>FastAPI</motion.span>
              <motion.span className="badge" whileHover={{ scale: 1.1, y: -2 }}>NLP</motion.span>
              <motion.span className="badge" whileHover={{ scale: 1.1, y: -2 }}>Embeddings</motion.span>
            </div>
            <div className="project-links">
              <motion.a 
                href="https://GitBranch.com/Sibghat-629" 
                target="_blank" 
                rel="noreferrer" 
                className="project-link"
                whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
              >
                <GitBranch size={16} /> View Code
              </motion.a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            className="glass-card project-card" 
            variants={bounceIn}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="project-header">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Terminal size={24} className="gradient-text" />
              </motion.div>
              <h3 className="project-title">AI Fitness Trainer</h3>
            </div>
            <p className="project-desc">Autonomous AI fitness tracker via YOLOv11-Pose. Real-time activity discovery, integrated with Groq LLM (Llama-3.3) for coaching.</p>
            <div className="badge-container">
              <motion.span className="badge" whileHover={{ scale: 1.1, y: -2 }}>YOLOv11-Pose</motion.span>
              <motion.span className="badge" whileHover={{ scale: 1.1, y: -2 }}>Llama-3.3</motion.span>
              <motion.span className="badge" whileHover={{ scale: 1.1, y: -2 }}>Python</motion.span>
            </div>
            <div className="project-links">
              <motion.a 
                href="https://GitBranch.com/Sibghat-629" 
                target="_blank" 
                rel="noreferrer" 
                className="project-link"
                whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
              >
                <GitBranch size={16} /> View Code
              </motion.a>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div 
            className="glass-card project-card" 
            variants={bounceIn}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="project-header">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Blocks size={24} className="gradient-text" />
              </motion.div>
              <h3 className="project-title">Customer Support Chatbot</h3>
            </div>
            <p className="project-desc">Retrieval-augmented (RAG) chatbot using LangChain and Qdrant. Includes memory management & Slack, WhatsApp deployment.</p>
            <div className="badge-container">
              <motion.span className="badge" whileHover={{ scale: 1.1, y: -2 }}>RAG</motion.span>
              <motion.span className="badge" whileHover={{ scale: 1.1, y: -2 }}>LangChain</motion.span>
              <motion.span className="badge" whileHover={{ scale: 1.1, y: -2 }}>Qdrant</motion.span>
            </div>
            <div className="project-links">
              <motion.a 
                href="https://GitBranch.com/Sibghat-629" 
                target="_blank" 
                rel="noreferrer" 
                className="project-link"
                whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
              >
                <GitBranch size={16} /> View Code
              </motion.a>
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div 
            className="glass-card project-card" 
            variants={bounceIn}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="project-header">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Code2 size={24} className="gradient-text" />
              </motion.div>
              <h3 className="project-title">Signal IQ</h3>
            </div>
            <p className="project-desc">Adaptive traffic signal controller via OpenCV. Achieved 90%+ vehicle detection accuracy using real-time computer vision.</p>
            <div className="badge-container">
              <motion.span className="badge" whileHover={{ scale: 1.1, y: -2 }}>OpenCV</motion.span>
              <motion.span className="badge" whileHover={{ scale: 1.1, y: -2 }}>Arduino</motion.span>
              <motion.span className="badge" whileHover={{ scale: 1.1, y: -2 }}>Computer Vision</motion.span>
            </div>
            <div className="project-links">
              <motion.a 
                href="https://GitBranch.com/Sibghat-629" 
                target="_blank" 
                rel="noreferrer" 
                className="project-link"
                whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
              >
                <GitBranch size={16} /> View Code
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section container">
        <motion.div 
          className="stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="stat-card" 
            variants={scaleInRotate}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
          >
            <motion.div 
              className="stat-number"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              50+
            </motion.div>
            <div className="stat-label">AI Projects Built</div>
          </motion.div>
          <motion.div 
            className="stat-card" 
            variants={scaleInRotate}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
          >
            <motion.div 
              className="stat-number"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              100%
            </motion.div>
            <div className="stat-label">Dedication & Quality</div>
          </motion.div>
          <motion.div 
            className="stat-card" 
            variants={scaleInRotate}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
          >
            <motion.div 
              className="stat-number"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              2+
            </motion.div>
            <div className="stat-label">Years Experience</div>
          </motion.div>
          <motion.div 
            className="stat-card" 
            variants={scaleInRotate}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
          >
            <motion.div 
              className="stat-number"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              15+
            </motion.div>
            <div className="stat-label">Technologies</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="section container" id="skills">
        <motion.h2 
          className="section-title gradient-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Technical Arsenal
        </motion.h2>
        
        <motion.div 
          className="grid-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="glass-card" variants={fadeIn}>
            <h3 className="mb-3">🤖 AI & LLMs</h3>
            <div className="skill-group">
              <div className="skill-name">
                <span>LangChain & RAG</span>
                <span className="skill-percent">95%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-fill" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-name">
                <span>Fine-tuning & Training</span>
                <span className="skill-percent">88%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-fill" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "88%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-name">
                <span>Agentic AI Systems</span>
                <span className="skill-percent">92%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-fill" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="glass-card" variants={fadeIn}>
            <h3 className="mb-3">🧠 Machine Learning</h3>
            <div className="skill-group">
              <div className="skill-name">
                <span>PyTorch & TensorFlow</span>
                <span className="skill-percent">90%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-fill" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-name">
                <span>Computer Vision</span>
                <span className="skill-percent">87%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-fill" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "87%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-name">
                <span>NLP & Text Processing</span>
                <span className="skill-percent">91%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-fill" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "91%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="glass-card" variants={fadeIn}>
            <h3 className="mb-3">⚙️ Software & MLOps</h3>
            <div className="skill-group">
              <div className="skill-name">
                <span>Python & Backend</span>
                <span className="skill-percent">94%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-fill" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "94%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-name">
                <span>FastAPI & Flask</span>
                <span className="skill-percent">89%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-fill" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "89%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-name">
                <span>DevOps & Deployment</span>
                <span className="skill-percent">85%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-fill" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="section container">
        <motion.div 
          className="cta-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          whileHover={{ boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)" }}
          transition={{ type: "spring" }}
        >
          <motion.div className="flex items-center justify-center gap-2 mb-2" variants={slideInLeft}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap size={24} className="gradient-text" />
            </motion.div>
            <h2 className="cta-title gradient-text">Ready to Build Something Amazing?</h2>
          </motion.div>
          <motion.p className="cta-desc" variants={fadeIn}>
            Let's collaborate on your next AI-powered project. Whether it's a cutting-edge LLM application, computer vision solution, or intelligent system, I'm ready to bring your vision to life.
          </motion.p>
          <motion.div className="flex gap-3 justify-center flex-wrap" variants={containerVariants}>
            <motion.a 
              href="mailto:sibghatullahiqbal629@gmail.com" 
              className="btn btn-primary" 
              variants={slideInLeft}
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.92 }}
            >
              <Mail size={18} /> Get In Touch
            </motion.a>
            <motion.a 
              href="https://GitBranch.com/Sibghat-629" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary" 
              variants={slideInRight}
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.92 }}
            >
              <GitBranch size={18} /> View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Achievements/Testimonials */}
      <section className="section container" id="achievements">
        <motion.h2 
          className="section-title gradient-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Achievements & Impact
        </motion.h2>
        
        <motion.div 
          className="grid-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="testimonial-card" 
            variants={bounceIn}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award size={20} className="gradient-text" />
              </motion.div>
              <h3 className="exp-title">Fast Learning</h3>
            </div>
            <p className="testimonial-text">
              Quickly mastered multiple cutting-edge AI frameworks and deployed production-ready systems within tight timelines while maintaining code quality.
            </p>
          </motion.div>

          <motion.div 
            className="testimonial-card" 
            variants={bounceIn}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp size={20} className="gradient-text" />
              </motion.div>
              <h3 className="exp-title">Scalable Solutions</h3>
            </div>
            <p className="testimonial-text">
              Built systems that process thousands of requests efficiently. Optimized backends for 90%+ accuracy and minimal latency in production environments.
            </p>
          </motion.div>

          <motion.div 
            className="testimonial-card" 
            variants={bounceIn}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Code2 size={20} className="gradient-text" />
              </motion.div>
              <h3 className="exp-title">Full-Stack Expertise</h3>
            </div>
            <p className="testimonial-text">
              End-to-end development from ML model development to API deployment, frontend integration, and multi-platform deployment (WhatsApp, Slack, Web).
            </p>
          </motion.div>

          <motion.div 
            className="testimonial-card" 
            variants={bounceIn}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <BrainCircuit size={20} className="gradient-text" />
              </motion.div>
              <h3 className="exp-title">Innovation Focus</h3>
            </div>
            <p className="testimonial-text">
              Constantly exploring new AI technologies and research papers. Implemented novel approaches in model selection, fine-tuning, and system architecture.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <motion.div 
            className="footer-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className="text-center mb-4" variants={fadeIn}>
              <div className="logo gradient-text" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>S.I.</div>
              <p style={{ color: '#a1a1aa', marginBottom: '1rem' }}>Sibghatullah | AI Engineer & Developer</p>
            </motion.div>

            <motion.div className="footer-links" variants={fadeIn}>
              <a href="https://GitBranch.com/Sibghat-629" target="_blank" rel="noreferrer" title="GitBranch">
                <GitBranch size={20} /> GitBranch
              </a>
              <a href="mailto:sibghatullahiqbal629@gmail.com" title="Email">
                <Mail size={20} /> Email
              </a>
              <a href="tel:+923465040502" title="Phone">
                <Phone size={20} /> Phone
              </a>
              <a href="#projects" title="Projects">
                <Code2 size={20} /> Projects
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="footer-text text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p>© {new Date().getFullYear()} Sibghatullah. All rights reserved.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>Crafted with ❤️ using Next.js, React & TailwindCSS</p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
