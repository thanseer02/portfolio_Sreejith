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
        if (visibleSection) setActiveSection(visibleSection);
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

  return (
    <>
      <nav>
        <div className="container nav-content">
          <button 
            className="logo" 
            onClick={() => scrollToSection('hero')}
            aria-label="Scroll to top"
          >
            Sreejith M.
          </button>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

          <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            {['capabilities', 'experience', 'projects', 'contact'].map((item) => (
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
        <section id="hero" className="container hero section-animate" ref={setSectionRef}>
          <div className="hero-content">
            <div className="hero-badge">Sreejith M — Available for work</div>
            <h1>Senior Flutter Engineer</h1>
            <p>
              I build high-performance, scalable applications across iOS, Android, and Web. 
              Focused on robust architecture, clean code, and zero-compromise user experiences.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View Work
              </button>
              <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                Get in Touch
              </button>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>&lt;clean_code /&gt;</span>
          </div>
        </section>

        <section id="capabilities" className="container section-animate" ref={setSectionRef}>
          <h2 className="section-title">Capabilities</h2>
          <div className="bento-grid">
            <div className="bento-card large">
              <h3>System Architecture</h3>
              <p>Specialized in Clean Architecture, advanced state management (Provider/Bloc), and building offline-first systems that sync seamlessly in the background.</p>
              <div className="skill-list">
                <span className="skill-tag">Clean Architecture</span>
                <span className="skill-tag">MVVM</span>
                <span className="skill-tag">MVC</span>
                <span className="skill-tag">Bloc</span>
              </div>
            </div>
            
            <div className="bento-card">
              <h3>Mobile & Web</h3>
              <p>Cross-platform mastery delivering pixel-perfect UIs natively.</p>
              <div className="skill-list">
                <span className="skill-tag">Flutter</span>
                <span className="skill-tag">Dart</span>
                <span className="skill-tag">iOS / Android</span>
              </div>
            </div>

            <div className="bento-card">
              <h3>Backend Sync</h3>
              <p>Deep integration with robust backend services and real-time databases.</p>
              <div className="skill-list">
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">WebSockets</span>
              </div>
            </div>

            <div className="bento-card large">
              <h3>Hardware & Tooling</h3>
              <p>Extensive experience with physical hardware integration, location tracking, and rapid CI/CD workflows.</p>
              <div className="skill-list">
                <span className="skill-tag">BLE Integration</span>
                <span className="skill-tag">Thermal Printers</span>
                <span className="skill-tag">Google Maps</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="container section-animate" ref={setSectionRef}>
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-header">
                <span className="timeline-meta">Apr 2022 – Present</span>
                <h3 className="timeline-title">Senior Flutter Developer</h3>
                <div className="timeline-company">Mindster (Aufait Technologies)</div>
              </div>
              <ul className="timeline-desc">
                <li>Lead engineering for complex Flutter apps targeting iOS, Android, and Web platforms.</li>
                <li>Architect robust offline-first applications with seamless background sync capabilities.</li>
                <li>Integrate hardware SDKs including Bluetooth Low Energy (BLE) locks and thermal printers.</li>
                <li>Drive sprint planning, feature estimation, and maintain high standards via code reviews.</li>
              </ul>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-header">
                <span className="timeline-meta">Aug 2021 – Mar 2022</span>
                <h3 className="timeline-title">Flutter Developer</h3>
                <div className="timeline-company">Keytech Build and Software</div>
              </div>
              <ul className="timeline-desc">
                <li>Built Android applications using Flutter with pixel-perfect UI components and robust REST APIs.</li>
                <li>Participated actively in agile delivery planning and continuous lifecycle management.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="container section-animate" ref={setSectionRef}>
          <h2 className="section-title">Featured Work</h2>
          <div className="projects-grid">
            
            <div className="project-card">
              <div className="project-content">
                <h3>IDrive Salesman App</h3>
                <p>A massive field sales and distribution platform operating seamlessly across India, UAE, and KSA markets. Built with an offline-first architecture.</p>
                <div className="skill-list">
                  <span className="skill-tag">Flutter</span>
                  <span className="skill-tag">REST API</span>
                  <span className="skill-tag">Offline-first</span>
                </div>
              </div>
              <div className="project-image" aria-hidden="true">Logistics UI</div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <h3>ONEIC Pay</h3>
                <p>Comprehensive utility bill payment and digital wallet system featuring P2P transfers and secure payment gateways.</p>
                <div className="skill-list">
                  <span className="skill-tag">Flutter</span>
                  <span className="skill-tag">Firebase</span>
                  <span className="skill-tag">Fintech</span>
                </div>
              </div>
              <div className="project-image" aria-hidden="true">Wallet UI</div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <h3>ACIX Locker Management</h3>
                <p>A smart locker ecosystem tightly integrated with BLE and secure LAN locking hardware mechanisms.</p>
                <div className="skill-list">
                  <span className="skill-tag">Flutter</span>
                  <span className="skill-tag">BLE Integration</span>
                  <span className="skill-tag">Hardware Control</span>
                </div>
              </div>
              <div className="project-image" aria-hidden="true">Hardware UI</div>
            </div>

          </div>
        </section>

        <section id="contact" className="container section-animate contact-section" ref={setSectionRef}>
          <h2>Let's build something.</h2>
          <p>I'm currently open for new opportunities and interesting collaborations. Let's discuss your next project.</p>
          <div className="contact-links">
            <a href="mailto:sreejithgopinadhan073@gmail.com" className="btn btn-primary">
              Email Me
            </a>
            <a href="https://linkedin.com/in/sreejith-m-393274222" target="_blank" rel="noreferrer" className="btn btn-outline">
              LinkedIn
            </a>
            <a href="tel:+918921049675" className="btn btn-outline">
              Call Me
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Sreejith M. Designed & Engineered with precision.</p>
      </footer>
    </>
  );
};

export default Portfolio;
