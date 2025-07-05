import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Github, Linkedin, Mail, Twitter, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

// Social links data
const socialLinks = [
  { 
    icon: Github, 
    url: 'https://github.com/rishavraj221',
    label: 'GitHub',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  { 
    icon: Linkedin, 
    url: 'https://www.linkedin.com/in/rishav-raj-2639341a5/',
    label: 'LinkedIn',
    color: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  { 
    icon: Twitter, 
    url: 'https://x.com/rairishav221',
    label: 'Twitter',
    color: 'hover:text-sky-500 dark:hover:text-sky-400'
  },
  { 
    icon: Mail, 
    url: 'mailto:rairishav221@gmail.com',
    label: 'Email',
    color: 'hover:text-red-600 dark:hover:text-red-400'
  }
];

// Quick stats data
const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Technologies', value: '40+' },
];

const roles = [
  'Full Stack Dev',
  'Gen AI Engineer',
  'Tech Innovator',
  'Problem Solver'
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animate role text
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => 
          prevIndex === roles.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Get current time in Hyderabad
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setCurrentTime(formatter.format(new Date()));
    };
    
    updateTime();
    const timer = setInterval(updateTime, 60000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        {/* Soft gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-100/30 to-blue-100/30 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 pt-12 sm:pt-16 lg:pt-20">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-6 sm:mb-8"
              >
                <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-full text-emerald-700 dark:text-emerald-300">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium">Available for opportunities</span>
                  {currentTime && (
                    <span className="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-800 rounded-full ml-2">
                      {currentTime} IST
                    </span>
                  )}
                </div>
              </motion.div>

              {/* Greeting */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="space-y-3 sm:space-y-4"
              >
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-700 dark:text-slate-300">
                  Hi, I am <span className="font-semibold text-slate-900 dark:text-white">Rishav Raj</span>
                </h2>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="space-y-3 sm:space-y-4"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 dark:text-white leading-[0.9]">
                  <span className="block">I'm a</span>
                  <div className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 flex items-center">
                    <AnimatePresence mode="wait">
                      {isVisible && (
                        <motion.span
                          key={roles[currentRoleIndex]}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight"
                        >
                          {roles[currentRoleIndex]}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Crafting intelligent solutions that bridge the gap between code and AI, 
                turning complex problems into elegant, user-centric experiences.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <a 
                  href="#projects"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a 
                  href="#contact"
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-medium transition-all duration-300 border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 sm:gap-3 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <span>Let's Connect</span>
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-6 sm:pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Follow me on</span>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map(({ icon: Icon, url, label, color }, index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-1.5 sm:p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 ${color} transition-all duration-300 hover:scale-110 hover:shadow-md`}
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative">
                {/* Image container with subtle effects */}
                <div className="relative z-10">
                  <img 
                    src="/hero_image.png" 
                    alt="Rishav Raj - Full Stack Developer" 
                    className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl"
                    loading="eager"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 