import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const styleId = 'portfolio-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
:root {
  --cyan: #00E5FF;
  --purple: #8B5CF6;
  --bg-base: #03040B;
  --surface: rgba(255, 255, 255, 0.02);
  --surface-hover: rgba(255, 255, 255, 0.04);
  --border: rgba(255, 255, 255, 0.05);
  --border-glow: rgba(0, 229, 255, 0.2);
  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --gradient-primary: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%);
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: var(--bg-base);
  color: var(--text-primary);
  line-height: 1.6;
  scroll-behavior: smooth;
  overflow-x: hidden;
  background-image: 
    radial-gradient(circle at 15% 50%, rgba(0, 229, 255, 0.04), transparent 25%),
    radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.04), transparent 25%);
}

.section-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

.section-animate.visible {
  opacity: 1;
  transform: translateY(0);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 5%;
}

section {
  padding: 120px 0;
  min-height: auto;
  position: relative;
}

.glass-panel {
  background: var(--surface);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: 16px;
}

nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(3, 4, 11, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}
.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}
.logo {
  font-size: 1.5rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  letter-spacing: -0.5px;
}
.nav-links {
  display: flex;
  gap: 40px;
}
@media (max-width: 768px) {
  .nav-links { display: none; }
}
.nav-link {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 8px 0;
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}
.nav-link:hover, .nav-link.active {
  color: var(--text-primary);
}
.nav-link.active::after, .nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.hero {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
}
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-name {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin: 0 0 16px 0;
  color: var(--text-primary);
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 0.85rem;
  color: var(--cyan);
  margin-bottom: 32px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
}
.hero h1 {
  font-size: clamp(3rem, 7vw, 5.5rem);
  line-height: 1.05;
  margin: 0 0 32px 0;
  font-weight: 800;
  letter-spacing: -1.5px;
}
.hero h1 span {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero p {
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: var(--text-secondary);
  max-width: 640px;
  margin: 0 0 48px 0;
  font-weight: 400;
  line-height: 1.7;
}
.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.btn {
  padding: 16px 36px;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn-primary {
  background: var(--text-primary);
  color: var(--bg-base);
  border: none;
}
.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(255,255,255,0.15);
}
.btn-outline {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border);
  backdrop-filter: blur(10px);
}
.btn-outline:hover {
  border-color: var(--cyan);
  color: var(--cyan);
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 229, 255, 0.1);
}

.floating-bg {
  position: absolute;
  top: 50%;
  right: -5%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.02);
  font-family: 'SF Mono', Consolas, Monaco, monospace;
  font-size: 1.5rem;
  line-height: 1.6;
  white-space: pre;
  z-index: 0;
  pointer-events: none;
  animation: float 20s ease-in-out infinite;
}
@media (max-width: 1024px) {
  .floating-bg { opacity: 0.5; font-size: 1rem; right: -20%; }
}
@keyframes float {
  0%, 100% { transform: translateY(-50%) translateX(0); }
  50% { transform: translateY(-52%) translateX(-20px); }
}

.section-title {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  margin: 0 0 64px 0;
  font-weight: 800;
  letter-spacing: -1px;
}
.section-title span {
  color: var(--cyan);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
@media (max-width: 992px) {
  .about-grid { grid-template-columns: 1fr; gap: 48px; }
}
.about-text {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.8;
}
.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.stat-card {
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.stat-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.stat-card:hover::before { opacity: 1; }
.stat-card:hover {
  transform: translateY(-8px);
  background: var(--surface-hover);
  border-color: var(--border-glow);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}
.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  line-height: 1;
}
.stat-label {
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}
.skill-group {
  padding: 32px;
  transition: all 0.3s ease;
}
.skill-group:hover {
  background: var(--surface-hover);
}
.skill-group h3 {
  color: var(--text-primary);
  font-size: 1.25rem;
  margin: 0 0 24px 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
}
.skill-group h3::before {
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--cyan);
}
.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.skill-chip {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  padding: 10px 20px;
  border-radius: 100px;
  font-size: 0.95rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  font-weight: 500;
}
.skill-chip:hover {
  background: rgba(0, 229, 255, 0.1);
  border-color: var(--cyan);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.experience-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
.timeline {
  position: relative;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 24px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, var(--cyan), var(--border) 80%);
}
@media (max-width: 768px) {
  .timeline::before { left: 16px; }
}
.timeline-item {
  position: relative;
  padding-left: 80px;
  margin-bottom: 64px;
}
@media (max-width: 768px) {
  .timeline-item { padding-left: 48px; }
}
.timeline-item:last-child {
  margin-bottom: 0;
}
.timeline-dot {
  position: absolute;
  left: 17px;
  top: 38px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--bg-base);
  border: 2px solid var(--cyan);
  box-shadow: 0 0 10px var(--cyan);
  z-index: 2;
}
@media (max-width: 768px) {
  .timeline-dot { left: 9px; }
}
.timeline-content {
  padding: 32px;
  transition: all 0.3s ease;
}
.timeline-content:hover {
  background: var(--surface-hover);
  transform: translateX(8px);
  border-color: var(--border-glow);
}
.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}
.timeline-item h3 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--text-primary);
  font-weight: 700;
}
.timeline-meta {
  color: var(--cyan);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.timeline-company {
  font-size: 1.15rem;
  color: var(--text-secondary);
  margin: 0 0 24px 0;
  font-weight: 500;
}
.timeline-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.7;
}
.timeline-item li {
  margin-bottom: 12px;
  position: relative;
  padding-left: 24px;
}
.timeline-item li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--cyan);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 32px;
}
@media (max-width: 768px) {
  .projects-grid { grid-template-columns: 1fr; }
}
.project-card {
  padding: 40px;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}
.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--gradient-primary);
  opacity: 0.5;
  transition: opacity 0.3s ease;
}
.project-card:hover {
  transform: translateY(-8px);
  background: var(--surface-hover);
  box-shadow: 0 24px 48px rgba(0,0,0,0.5);
  border-color: var(--border-glow);
}
.project-card:hover::before { opacity: 1; }
.project-card h3 {
  margin: 0 0 16px 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.project-card p {
  color: var(--text-secondary);
  font-size: 1.05rem;
  margin: 0 0 32px 0;
  flex-grow: 1;
  line-height: 1.7;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.project-tag {
  font-size: 0.85rem;
  color: var(--text-primary);
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.2);
  padding: 6px 14px;
  border-radius: 100px;
  font-weight: 500;
}

.contact-section {
  position: relative;
  overflow: hidden;
}
.contact-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.contact-title {
  font-size: clamp(3rem, 5vw, 4.5rem);
  margin-bottom: 24px;
  font-weight: 800;
  letter-spacing: -1.5px;
}
.contact-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 56px;
}
.contact-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}
.contact-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 40px 24px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}
.contact-link:hover {
  transform: translateY(-8px);
  background: var(--surface-hover);
  border-color: var(--cyan);
  box-shadow: 0 20px 40px rgba(0, 229, 255, 0.1);
}
.contact-icon {
  font-size: 2.5rem;
  margin-bottom: 8px;
}

footer {
  text-align: center;
  padding: 40px 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  border-top: 1px solid var(--border);
  margin-top: 80px;
}
      `;
      document.head.appendChild(style);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.intersectionRatio > 0.5) {
               visibleSection = entry.target.id;
            }
          }
        });
        
        if (visibleSection) {
          setActiveSection(visibleSection);
        }
      },
      { threshold: [0.1, 0.5] }
    );

    const sections = document.querySelectorAll('.section-animate');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const codeSnippet = `
class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.dark().copyWith(
        primaryColor: Color(0xFF00E5FF),
      ),
      home: CleanArchitectureApp(),
    );
  }
}
`;

  return (
    <>
      <nav>
        <div className="container nav-content">
          <div className="logo" onClick={() => scrollToSection('hero')}>Sreejith M</div>
          <div className="nav-links">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <section id="hero" className="hero section-animate">
          <div className="floating-bg">{codeSnippet}</div>
          <div className="container hero-content">
            <div className="hero-badge glass-panel">Available for new opportunities</div>
            <h2 className="hero-name">Sreejith M</h2>
            <h1>Senior <span>Flutter</span> Developer</h1>
            <p>
              Building scalable Android, iOS & Web apps with 4+ years of experience.
              Passionate about clean code, stunning UIs, and robust offline-first architectures.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View Projects
              </button>
              <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                Contact Me
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="container section-animate">
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a results-driven Senior Flutter Developer specializing in building high-performance,
                scalable, and offline-first applications across Android, iOS, and Web platforms.
                With a strong foundation in Clean Architecture and state management, I deliver
                robust solutions that meet complex business requirements while ensuring an exceptional user experience.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card glass-panel">
                <div className="stat-number">4+</div>
                <div className="stat-label">Years Exp</div>
              </div>
              <div className="stat-card glass-panel">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card glass-panel">
                <div className="stat-number">3</div>
                <div className="stat-label">Platforms</div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="container section-animate">
          <h2 className="section-title">Core <span>Skills</span></h2>
          <div className="skills-container">
            <div className="skill-group glass-panel">
              <h3>Mobile & Languages</h3>
              <div className="skill-chips">
                {['Flutter', 'Dart', 'Android', 'iOS', 'Flutter Web', 'Java', 'Kotlin'].map(skill => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-group glass-panel">
              <h3>Architecture & State</h3>
              <div className="skill-chips">
                {['Clean Architecture', 'MVVM', 'MVC', 'Provider', 'Bloc'].map(skill => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-group glass-panel">
              <h3>Backend & Database</h3>
              <div className="skill-chips">
                {['REST APIs', 'Firebase', 'Firestore', 'WebSocket', 'SQLite', 'Hive', 'Shared Preferences'].map(skill => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-group glass-panel">
              <h3>Tools & Ecosystem</h3>
              <div className="skill-chips">
                {['Git', 'Jira', 'BLE', 'Google Maps', 'Postman', 'ChatGPT', 'Copilot'].map(skill => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="container section-animate">
          <h2 className="section-title">Work <span>Experience</span></h2>
          <div className="experience-wrapper">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <div className="timeline-header">
                    <h3>Senior Flutter Developer</h3>
                    <span className="timeline-meta">Apr 2022 – Present</span>
                  </div>
                  <div className="timeline-company">Mindster (Aufait Technologies) | Calicut, India</div>
                  <ul>
                    <li>Developed and maintained complex Flutter apps for Android, iOS, and Web</li>
                    <li>Implemented Clean Architecture, MVVM, and MVC paradigms across major projects</li>
                    <li>Integrated REST APIs, Firebase, WebSockets, BLE, and thermal printers</li>
                    <li>Engineered robust offline-first applications with seamless background sync capabilities</li>
                    <li>Led sprint planning, feature estimation, and comprehensive code reviews</li>
                  </ul>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <div className="timeline-header">
                    <h3>Flutter Developer</h3>
                    <span className="timeline-meta">Aug 2021 – Mar 2022</span>
                  </div>
                  <div className="timeline-company">Keytech Build and Software</div>
                  <ul>
                    <li>Built Android applications using Flutter with pixel-perfect UI components and robust REST APIs</li>
                    <li>Participated actively in project coordination, lifecycle management, and agile delivery planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="container section-animate">
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="projects-grid">
            <div className="project-card glass-panel">
              <h3>IDrive Salesman App</h3>
              <p>Field sales & distribution platform operating seamlessly across India, UAE, and KSA markets.</p>
              <div className="project-tags">
                <span className="project-tag">Flutter</span>
                <span className="project-tag">REST API</span>
                <span className="project-tag">Offline-first</span>
              </div>
            </div>

            <div className="project-card glass-panel">
              <h3>ONEIC Pay</h3>
              <p>Comprehensive utility bill payment and digital wallet system featuring P2P transfers and secure payments.</p>
              <div className="project-tags">
                <span className="project-tag">Flutter</span>
                <span className="project-tag">Firebase</span>
                <span className="project-tag">Payment Gateway</span>
              </div>
            </div>

            <div className="project-card glass-panel">
              <h3>iTravel Check-In</h3>
              <p>Innovative cruise ship onboarding solution incorporating reliable passport, visa, and ID card scanning.</p>
              <div className="project-tags">
                <span className="project-tag">Flutter</span>
                <span className="project-tag">Document Scanning</span>
                <span className="project-tag">iOS</span>
              </div>
            </div>

            <div className="project-card glass-panel">
              <h3>Shahn Truck Booking</h3>
              <p>Dynamic logistics platform enabling real-time live tracking with robust Google Maps and WebSocket integration.</p>
              <div className="project-tags">
                <span className="project-tag">Flutter</span>
                <span className="project-tag">Google Maps</span>
                <span className="project-tag">WebSocket</span>
              </div>
            </div>

            <div className="project-card glass-panel">
              <h3>SMA HRMS</h3>
              <p>End-to-end workforce management handling secure attendance tracking, automated leave policies, and payroll.</p>
              <div className="project-tags">
                <span className="project-tag">Flutter</span>
                <span className="project-tag">Firebase</span>
                <span className="project-tag">MVVM</span>
              </div>
            </div>

            <div className="project-card glass-panel">
              <h3>ACIX Locker Management</h3>
              <p>Smart locker ecosystem tightly integrated with BLE and secure LAN locking hardware mechanisms.</p>
              <div className="project-tags">
                <span className="project-tag">Flutter</span>
                <span className="project-tag">BLE Integration</span>
                <span className="project-tag">Hardware Control</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="container section-animate contact-section">
          <div className="contact-content">
            <h2 className="contact-title">Let's Build <span>Something Great</span></h2>
            <p className="contact-subtitle">Currently open for new opportunities and interesting collaborations.</p>
            <div className="contact-links">
              <a href="mailto:sreejithgopinadhan073@gmail.com" className="contact-link glass-panel">
                <span className="contact-icon">📧</span>
                Email Me
              </a>
              <a href="tel:+918921049675" className="contact-link glass-panel">
                <span className="contact-icon">📱</span>
                Call Me
              </a>
              <a href="https://linkedin.com/in/sreejith-m-393274222" target="_blank" rel="noreferrer" className="contact-link glass-panel">
                <span className="contact-icon">🔗</span>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Sreejith M · Engineered with passion and clean code</p>
      </footer>
    </>
  );
};

export default Portfolio;
