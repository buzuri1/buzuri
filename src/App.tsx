import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import WatchShorts from './components/WatchShorts';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Certificates />
      <WatchShorts />
      <Contact />
    </Layout>
  );
}

export default App;
