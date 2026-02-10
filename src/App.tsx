import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
