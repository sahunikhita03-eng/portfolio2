import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Research from './sections/Research';
import Activities from './sections/Activities';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Research />
        <Activities />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
