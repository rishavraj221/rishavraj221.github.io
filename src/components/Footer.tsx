import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Heart, ArrowUp } from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
}

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ] as FooterLink[],
  services: [
    { name: 'Custom Software', href: '#services' },
    { name: 'AI & ML', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Data Analytics', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
  ] as FooterLink[],
  legal: [
    // { name: 'Privacy Policy', href: '/privacy' },
    // { name: 'Terms of Service', href: '/terms' },
    // { name: 'Cookie Policy', href: '/cookies' },
  ] as FooterLink[],
};

const socialLinks = [
  { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/rishavraj221' },
  { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/rairishav221' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/rishav-raj-2639341a5/' },
  // { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/rairishav221/' },
];

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    text: 'rairishav221@gmail.com',
    href: 'mailto:rairishav221@gmail.com',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    text: '+91 9798600997',
    href: 'tel:+919798600997',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    text: 'Hyderabad, India',
    href: 'https://www.google.com/maps/place/Hyderabad',
  },
];

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button when user is in bottom 30% of the page and not in hero section
      const heroSection = document.querySelector('#home') || document.querySelector('section:first-child');
      const heroHeight = (heroSection as HTMLElement)?.offsetHeight || 0;
      
      if (scrollY > heroHeight && scrollY > (documentHeight - windowHeight) * 0.7) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden" ref={ref}>
      {/* Background Elements - match Contact section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-100/30 to-blue-100/30 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-emerald-100/30 to-blue-100/30 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand and description */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Rishav Raj
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Full Stack Developer & AI Enthusiast crafting digital experiences that make an impact. Let's build something amazing together!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100/80 dark:bg-white/10 backdrop-blur-sm border border-slate-200 dark:border-white/20 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  aria-label={social.name}
                  variants={fadeInUp}
                  custom={index + 1}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  whileHover={{ y: -2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.1}
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={fadeInUp}
                  custom={0.1 + (index * 0.05)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 relative transition-all duration-300 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:text-blue-600 dark:hover:text-blue-300 hover:after:w-full after:absolute after:left-0 after:bottom-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.2}
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={fadeInUp}
                  custom={0.2 + (index * 0.05)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 relative transition-all duration-300 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:text-blue-600 dark:hover:text-blue-300 hover:after:w-full after:absolute after:left-0 after:bottom-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.3}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white dark:text-white">Get in Touch</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                  custom={0.3 + (index * 0.1)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white">{item.icon}</span>
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-300 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 mt-12 border-t border-slate-200 dark:border-white/10"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.5}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <span>© {new Date().getFullYear()} Rishav Raj. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in India</span>
            </div>
            {footerLinks.legal.length > 0 && (
              <div className="flex items-center gap-6">
                {footerLinks.legal.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    className="text-sm text-slate-600 dark:text-slate-400 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-300 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -2 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 mx-auto" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;