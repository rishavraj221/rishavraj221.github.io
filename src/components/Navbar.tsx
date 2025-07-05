import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

interface MenuItem {
  title: string;
  href: string;
  offset: number;
}

const menuItems: MenuItem[] = [
  { title: 'About', href: '#about', offset: 100 },
  { title: 'Projects', href: '#projects', offset: 100 },
  { title: 'Blogs', href: '#blog', offset: 100 },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.querySelector('#home') || document.querySelector('section:first-child');
      const heroHeight = (heroSection as HTMLElement)?.offsetHeight || 0;
      
      // Always show navbar in hero section
      if (currentScrollY < heroHeight) {
        setIsVisible(true);
        setIsScrolled(currentScrollY > 20);
      } else {
        // Hide/show based on scroll direction outside hero
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - hide navbar
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show navbar
          setIsVisible(true);
        }
        setIsScrolled(true);
      }
      
      setLastScrollY(currentScrollY);
      
      // Update active section
      const sections = document.querySelectorAll('section');
      const scrollPosition = currentScrollY + 20;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionId = section.id;
        if (scrollPosition >= sectionTop) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleScrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      // Dynamic offset based on header visibility
      const headerHeight = 80; // Height of the navbar
      const padding = 40; // Additional padding
      const offset = isVisible ? headerHeight + padding : padding;
      const sectionTop = (section as HTMLElement).offsetTop;
      
      window.scrollTo({
        top: sectionTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg border-b border-slate-200/50 dark:border-slate-700/50'
          : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a 
            href="/" 
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Rishav Raj
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                onClick={() => handleScrollToSection(item.href)}
                className={`relative text-sm text-slate-600 dark:text-slate-300 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === item.href.slice(1) 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : ''
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <span className="relative">
                  {item.title}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                    activeSection === item.href.slice(1) ? 'w-full' : 'group-hover:w-full'
                  }`}></span>
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <motion.button
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-blue-500/25 text-sm"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>
    </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200/50 dark:border-slate-700/50 relative z-40"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(item.href);
                    setTimeout(() => setIsMobileMenuOpen(false), 100);
                  }}
                  className={`block py-2.5 text-sm text-slate-600 dark:text-slate-300 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item.href.slice(1) 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : ''
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.title}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="pt-4"
              >
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('#contact');
                    setTimeout(() => setIsMobileMenuOpen(false), 100);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}