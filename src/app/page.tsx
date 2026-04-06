"use client";

import { motion } from "framer-motion";
import { GitBranch, Mail, Phone, MapPin, ExternalLink, Code2, BrainCircuit, Terminal, Blocks } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

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
          variants={stagger}
        >
          <motion.span className="hero-greeting" variants={fadeIn}>
            Hello, I'm
          </motion.span>
          <motion.h1 variants={fadeIn}>
            Sibghatullah <br />
            <span className="gradient-text">AI Engineer</span>
          </motion.h1>
          <motion.p variants={fadeIn}>
            Innovative AI Engineer with expertise in machine learning, deep learning, computer vision, and LLM-based intelligent systems. Passionate about building scalable, research-driven solutions.
          </motion.p>
          <motion.div className="flex gap-3 mt-4" variants={fadeIn}>
            <a href="mailto:sibghatullahiqbal629@gmail.com" className="btn btn-primary">
              <Mail size={18} /> Contact Me
            </a>
            <a href="https://github.com/Sibghat-629" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <GitBranch size={18} /> GitHub
            </a>
          </motion.div>
          <motion.div className="flex gap-3 mt-4 text-sm text-gray-400 items-center" variants={fadeIn}>
            <MapPin size={16} /> Islamabad, Pakistan &nbsp; | &nbsp; 
            <Phone size={16} /> 03465040502
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
          viewport={{ once: true }}
          variants={stagger}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <motion.div className="exp-item" variants={fadeIn}>
            <div className="exp-date">12/2025 – 01/2026</div>
            <h3 className="exp-title">AI Intern</h3>
            <div className="exp-company">TRYSOFT AI, Islamabad</div>
            <p className="exp-desc">
              Contributed to the development of a real-time AI-based system engineered to process and respond to user interactions efficiently. Built conversational solutions with backend and web integration, driving improved interaction continuity.
            </p>
          </motion.div>

          <motion.div className="exp-item" variants={fadeIn}>
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
          variants={stagger}
        >
          {/* Project 1 */}
          <motion.div className="glass-card" variants={fadeIn}>
            <h3 className="mb-2 flex items-center gap-2"><BrainCircuit size={24} className="gradient-text"/> ProFile Match (ResumeIQ)</h3>
            <p className="exp-desc mb-3">NLP-powered resume-job matching API using FastAPI, TF-IDF, Sentence Transformers, and spaCy for hybrid semantic scoring.</p>
            <div className="badge-container">
              <span className="badge">FastAPI</span>
              <span className="badge">NLP</span>
              <span className="badge">Embeddings</span>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div className="glass-card" variants={fadeIn}>
            <h3 className="mb-2 flex items-center gap-2"><Terminal size={24} className="gradient-text"/> AI Fitness Trainer</h3>
            <p className="exp-desc mb-3">Autonomous AI fitness tracker via YOLOv11-Pose. Real-time activity discovery, integrated with Groq LLM (Llama-3.3) for coaching.</p>
            <div className="badge-container">
              <span className="badge">YOLOv11-Pose</span>
              <span className="badge">Llama-3.3</span>
              <span className="badge">Python</span>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div className="glass-card" variants={fadeIn}>
            <h3 className="mb-2 flex items-center gap-2"><Blocks size={24} className="gradient-text"/> Customer Support Chatbot</h3>
            <p className="exp-desc mb-3">Retrieval-augmented (RAG) chatbot using LangChain and Qdrant. Includes memory management & Slack, WhatsApp deployment.</p>
            <div className="badge-container">
              <span className="badge">RAG</span>
              <span className="badge">LangChain</span>
              <span className="badge">Qdrant</span>
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div className="glass-card" variants={fadeIn}>
            <h3 className="mb-2 flex items-center gap-2"><Code2 size={24} className="gradient-text"/> Signal IQ</h3>
            <p className="exp-desc mb-3">Adaptive traffic signal controller via OpenCV. Achieved 90%+ vehicle detection accuracy using real-time computer vision.</p>
            <div className="badge-container">
              <span className="badge">OpenCV</span>
              <span className="badge">Arduino</span>
              <span className="badge">Computer Vision</span>
            </div>
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
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div className="glass-card" variants={fadeIn}>
            <h3 className="mb-3">AI & LLMs</h3>
            <div className="badge-container">
              <span className="badge">LangChain</span>
              <span className="badge">CrewAI</span>
              <span className="badge">Autogen</span>
              <span className="badge">Llama</span>
              <span className="badge">RAG</span>
              <span className="badge">Fine Tuning</span>
            </div>
          </motion.div>

          <motion.div className="glass-card" variants={fadeIn}>
            <h3 className="mb-3">Machine Learning</h3>
            <div className="badge-container">
              <span className="badge">TensorFlow</span>
              <span className="badge">PyTorch</span>
              <span className="badge">OpenCV</span>
              <span className="badge">YOLO</span>
              <span className="badge">Scikit-learn</span>
            </div>
          </motion.div>

          <motion.div className="glass-card" variants={fadeIn}>
            <h3 className="mb-3">Software & MLOps</h3>
            <div className="badge-container">
              <span className="badge">Python</span>
              <span className="badge">C++</span>
              <span className="badge">FastAPI</span>
              <span className="badge">Flask</span>
              <span className="badge">Azure</span>
              <span className="badge">MLflow</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-links">
            <a href="https://github.com/Sibghat-629" target="_blank" rel="noreferrer">
              <GitBranch size={24} />
            </a>
            <a href="mailto:sibghatullahiqbal629@gmail.com">
              <Mail size={24} />
            </a>
          </div>
          <p style={{ color: '#71717a' }}>© {new Date().getFullYear()} Sibghatullah. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
