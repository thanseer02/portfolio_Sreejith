import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Inject styles
    const styleId = 'portfolio-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        :root {
          --cyan: #00E5FF;
          --bg: #0A0A0F;
          --surface: #12121A;
          --border: rgba(255, 255, 255, 0.08);
          --text-primary: #FFFFFF;
          --text-secondary: #94A3B8;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background-color: var(--bg);
          color: var(--text-primary);
          line-height: 1.6;
          scroll-behavior: smooth;
        }

        /* Animations */
        .section-animate {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          will-change: transform, opacity;
        }

        .section-animate.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Layout */
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        section {
          padding: 100px 0;
          min-height: 50vh;
        }

        /* Nav */
        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 72px;
        }
        .logo {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--cyan);
          cursor: pointer;
        }
        .nav-links {
          display: flex;
          gap: 32px;
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
          cursor: pointer;
          transition: color 0.2s ease;
          padding: 0;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--cyan);
        }

        /* Hero */
        .hero {
          min-height: calc(100vh - 72px);
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 0;
        }
        .hero-content {
          position: relative;
          z-index: 1;
        }
        .hero h1 {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.1;
          margin: 0 0 24px 0;
          font-weight: 800;
        }
        .hero p {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 0 40px 0;
        }
        .hero-buttons {
          display: flex;
          gap: 16px;
        }
        .btn {
          padding: 12px 28px;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .btn-primary {
          background: var(--cyan);
          color: var(--bg);
          border: 1px solid var(--cyan);
        }
        .btn-primary:hover {
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.4);
          transform: translateY(-2px);
        }
        .btn-outline {
          background: transparent;
          color: var(--cyan);
          border: 1px solid var(--cyan);
        }
        .btn-outline:hover {
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.2);
          transform: translateY(-2px);
          background: rgba(0, 229, 255, 0.05);
        }

        /* Floating Code Bg */
        .floating-bg {
          position: absolute;
          top: 50%;
          right: -5%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.03);
          font-family: monospace;
          font-size: 1.2rem;
          line-height: 1.5;
          white-space: pre;
          z-index: 0;
          pointer-events: none;
          animation: float 10s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .floating-bg { display: none; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-52%) translateX(-15px); }
        }

        /* Section Global */
        .section-title {
          font-size: 2rem;
          margin: 0 0 48px 0;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .section-title::after {
          content: '';
          height: 1px;
          background: var(--border);
          flex-grow: 1;
        }

        /* About */
        .about-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 800px;
          margin-bottom: 48px;
        }
        .about-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
        }
        .stat-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 32px;
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .stat-card:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
          border-color: rgba(0, 229, 255, 0.3);
        }
        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          color: var(--cyan);
          margin-bottom: 8px;
        }
        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        /* Skills */
        .skills-container {
          display: grid;
          gap: 40px;
        }
        .skill-group h3 {
          color: var(--text-primary);
          font-size: 1.1rem;
          margin-bottom: 16px;
          font-weight: 600;
        }
        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .skill-chip {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        .skill-chip:hover {
          transform: scale(1.05);
          border-color: var(--cyan);
          color: var(--cyan);
        }

        /* Experience */
        .timeline {
          position: relative;
          padding-left: 32px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border);
        }
        .timeline-item {
          position: relative;
          margin-bottom: 48px;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -37px;
          top: 6px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--cyan);
          border: 4px solid var(--bg);
        }
        .timeline-item h3 {
          margin: 0 0 4px 0;
          font-size: 1.25rem;
          color: var(--text-primary);
        }
        .timeline-company {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin: 0 0 8px 0;
        }
        .timeline-meta {
          color: var(--cyan);
          font-size: 0.9rem;
          margin-bottom: 16px;
        }
        .timeline-item ul {
          list-style: none;
          padding: 0;
          margin: 0;
          color: var(--text-secondary);
        }
        .timeline-item li {
          margin-bottom: 8px;
          position: relative;
          padding-left: 20px;
        }
        .timeline-item li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--cyan);
        }

        /* Projects */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }
        .project-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-left: 4px solid var(--cyan);
          border-radius: 8px;
          padding: 32px;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(0, 229, 255, 0.1);
          border-color: rgba(0, 229, 255, 0.3);
        }
        .project-card h3 {
          margin: 0 0 16px 0;
          font-size: 1.25rem;
        }
        .project-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin: 0 0 24px 0;
          flex-grow: 1;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .project-tag {
          font-size: 0.8rem;
          color: var(--cyan);
          background: rgba(0, 229, 255, 0.05);
          border: 1px solid rgba(0, 229, 255, 0.2);
          padding: 4px 12px;
          border-radius: 12px;
        }

        /* Contact */
        .contact-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }
        .contact-title {
          font-size: 2.5rem;
          margin-bottom: 48px;
          font-weight: 700;
        }
        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .contact-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 24px;
          border-radius: 8px;
          color: var(--text-primary);
          text-decoration: none;
          font-size: 1.1rem;
          transition: all 0.2s ease;
        }
        .contact-link:hover {
          border-color: var(--cyan);
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.1);
          transform: translateY(-2px);
          color: var(--cyan);
        }
        .contact-icon {
          font-size: 1.5rem;
        }

        /* Footer */
        footer {
          text-align: center;
          padding: 32px 0;
          color: var(--text-secondary);
          font-size: 0.9rem;
          border-top: 1px solid var(--border);
        }
      `;
      document.head.appendChild(style);
    }

    // Setup IntersectionObserver for scroll spy and animations
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

// Building Scalable Apps
// Flutter • Dart • iOS • Android
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
        {/* Hero Section */}
        <section id="hero" className="hero section-animate">
          <div className="floating-bg">{codeSnippet}</div>
          <div className="container hero-content">
            <h1>Senior Flutter Developer</h1>
            <p>
              Building scalable Android, iOS & Web apps with 4+ years of experience.
              Passionate about clean code and beautiful UIs.
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

        {/* About Section */}
        <section id="about" className="container section-animate">
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>
              I am a results-driven Senior Flutter Developer specializing in building high-performance,
              scalable, and offline-first applications across Android, iOS, and Web platforms.
              With a strong foundation in Clean Architecture and state management, I deliver
              robust solutions that meet complex business requirements.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Platforms (Android · iOS · Web)</div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container section-animate">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skill-group">
              <h3>Mobile & Languages</h3>
              <div className="skill-chips">
                {['Flutter', 'Dart', 'Android', 'iOS', 'Flutter Web', 'Java', 'Kotlin'].map(skill => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-group">
              <h3>Architecture & State</h3>
              <div className="skill-chips">
                {['Clean Architecture', 'MVVM', 'MVC', 'Provider', 'Bloc'].map(skill => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-group">
              <h3>Backend & Database</h3>
              <div className="skill-chips">
                {['REST APIs', 'Firebase', 'Firestore', 'WebSocket', 'SQLite', 'Hive', 'Shared Preferences'].map(skill => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-group">
              <h3>Hardware & Maps</h3>
              <div className="skill-chips">
                {['BLE', 'Thermal Printers', 'Google Maps', 'Geolocation'].map(skill => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-group">
              <h3>Tools & AI</h3>
              <div className="skill-chips">
                {['Git', 'Jira', 'Android Studio', 'VS Code', 'Postman', 'Claude', 'ChatGPT', 'GitHub Copilot', 'Cursor AI', 'Gemini'].map(skill => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container section-animate">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Senior Flutter Developer</h3>
              <div className="timeline-company">Mindster (Aufait Technologies)</div>
              <div className="timeline-meta">Apr 2022 – Present | Calicut, India</div>
              <ul>
                <li>Developed and maintained Flutter apps for Android, iOS, and Web</li>
                <li>Implemented Clean Architecture, MVVM, and MVC across projects</li>
                <li>Integrated REST APIs, Firebase, WebSockets, BLE, thermal printers</li>
                <li>Built offline-first apps with robust sync capabilities</li>
                <li>Participated in sprints, estimation, code reviews</li>
              </ul>
            </div>
            
            <div className="timeline-item">
              <h3>Flutter Developer</h3>
              <div className="timeline-company">Keytech Build and Software</div>
              <div className="timeline-meta">Aug 2021 – Mar 2022</div>
              <ul>
                <li>Built Android apps using Flutter with UI components and REST APIs</li>
                <li>Participated in project coordination and delivery planning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container section-animate">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>IDrive Salesman App</h3>
              <p>Field sales & distribution platform — India, UAE, KSA</p>
              <div className="project-tags">
                <span className="project-tag">Flutter</span>
                <span className="project-tag">REST API</span>
                <span className="project-tag">Offline-first</span>
              </div>
            </div>

            <div className="project-card">
              <h3>ONEIC Pay</h3>
              <p>Utility bill payment & wallet — P2P transfers, secure payments</p>
              <div className="project-tags">
                <span className="project-tag">Flutter</span>
                <span className="project-tag">Firebase</span>
                <span className="project-tag">Payment Systems</span>
              </div>
            </div>

            <div className="project-card">
              <h3>iTravel Check-In</h3>
              <p>Cruise ship onboarding — passport, visa & card scanning</p>
              <div className="project-tags">
                <span className="project-tag">Flutter</span>
                <span className="project-tag">Document Scanning</span>
                <span className="project-tag">iOS</span>
              </div>
            </div>

            <div className="project-card">
              <h3>Shahn Truck Booking</h3>
              <p>Logistics with live tracking & Google Maps</p>
              <div className="project-tags">
                <span className="project-tag">Flutter</span>
                <span className="project-tag">Google Maps</span>
                <span className="project-tag">WebSocket</span>
              </div>
            </div>

            <div className="project-card">
              <h3>SMA HRMS</h3>
              <p>Workforce management — attendance, leave, payroll, approvals</p>
              <div className="project-tags">
                <span className="project-tag">Flutter</span>
                <span className="project-tag">Firebase</span>
                <span className="project-tag">MVVM</span>
              </div>
            </div>

            <div className="project-card">
              <h3>ACIX Locker Management</h3>
              <p>Smart locker ecosystem with BLE and LAN locking</p>
              <div className="project-tags">
                <span className="project-tag">Flutter</span>
                <span className="project-tag">BLE</span>
                <span className="project-tag">Hardware Integration</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container section-animate">
          <div className="contact-content">
            <h2 className="contact-title">Let's Build Something Great</h2>
            <div className="contact-links">
              <a href="mailto:sreejithgopinadhan073@gmail.com" className="contact-link">
                <span className="contact-icon">📧</span>
                sreejithgopinadhan073@gmail.com
              </a>
              <a href="tel:+918921049675" className="contact-link">
                <span className="contact-icon">📱</span>
                +91 8921049675
              </a>
              <a href="https://linkedin.com/in/sreejith-m-393274222" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-icon">🔗</span>
                linkedin.com/in/sreejith-m-393274222
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Sreejith M · Built with passion</p>
      </footer>
    </>
  );
};

export default Portfolio;
