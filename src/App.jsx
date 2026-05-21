import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Architecture from './components/Architecture/Architecture';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const baseTitle = 'Yuda Satria - Portfolio';
    let timeoutId = null;
    let currentActiveId = '';
    
    const trackGAEvent = (id, title) => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: title,
          page_location: window.location.href,
          page_path: `/#${id}`
        });
      }
    };

    const options = {
      // Trigger when the section crosses the middle of the screen
      rootMargin: '-49% 0px -49% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          
          if (id !== currentActiveId) {
            currentActiveId = id;
            
            // 1. Update Title Immediately for UX
            let sectionName = id.charAt(0).toUpperCase() + id.slice(1);
            if (id === 'home') sectionName = 'Home';
            const newTitle = `${sectionName} | ${baseTitle}`;
            document.title = newTitle;

            // 2. Debounce GA Event (Wait 1 second before sending)
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              trackGAEvent(id, newTitle);
            }, 1000);
          }
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Architecture /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
