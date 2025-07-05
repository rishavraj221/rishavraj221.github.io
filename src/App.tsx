import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Features from './components/Features';
// import Showcase from './components/Showcase';
import FeaturedProjects from './components/FeaturedProjects';
import About from './components/About';
import BlogInsights from './components/BlogInsights';
import Services from './components/Services';
// import FAQ from './components/FAQ';
// import Security from './components/Security';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <FeaturedProjects />
          <BlogInsights />
          {/* <Features /> */}
          {/* <Showcase /> */}
          {/* <FAQ /> */}
          {/* <Security /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 