import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionsRef = useRef([]);

  useEffect(() => {
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

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const setSectionRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
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
          <button 
            className="logo" 
            onClick={() => scrollToSection('hero')}
            style={{ background: 'var(--gradient-primary)', border: 'none', padding: 0, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            aria-label="Scroll to top"
          >
            Sreejith M
          </button>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

          <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
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
        <section id="hero" className="hero section-animate" ref={setSectionRef}>
          <div className="floating-bg" aria-hidden="true">{codeSnippet}</div>
          <div className="container hero-content">
            <div className="hero-badge glass-panel">Available for new opportunities</div>
            <h1 className="hero-name">Sreejith M</h1>
            <h2 className="hero-role" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', margin: '0 0 32px 0', fontWeight: 800, letterSpacing: '-1.5px' }}>
              Senior <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Flutter</span> Developer
            </h2>
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

        <section id="about" className="container section-animate" ref={setSectionRef}>
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

        <section id="skills" className="container section-animate" ref={setSectionRef}>
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

        <section id="experience" className="container section-animate" ref={setSectionRef}>
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

        <section id="projects" className="container section-animate" ref={setSectionRef}>
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

        <section id="contact" className="container section-animate contact-section" ref={setSectionRef}>
          <div className="contact-content">
            <h2 className="contact-title">Let's Build <span>Something Great</span></h2>
            <p className="contact-subtitle">Currently open for new opportunities and interesting collaborations.</p>
            <div className="contact-links">
              <a href="mailto:sreejithgopinadhan073@gmail.com" className="contact-link glass-panel">
                <span className="contact-icon" aria-hidden="true">📧</span>
                Email Me
              </a>
              <a href="tel:+918921049675" className="contact-link glass-panel">
                <span className="contact-icon" aria-hidden="true">📱</span>
                Call Me
              </a>
              <a href="https://linkedin.com/in/sreejith-m-393274222" target="_blank" rel="noreferrer" className="contact-link glass-panel">
                <span className="contact-icon" aria-hidden="true">🔗</span>
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
