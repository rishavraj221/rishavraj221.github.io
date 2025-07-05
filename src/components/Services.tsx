import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cpu, Smartphone, Database, Globe, Zap, ArrowRight } from 'lucide-react';

const offerings = [
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'End-to-end web applications with modern tech stacks',
    highlight: 'React, Next.js, Node.js'
  },
  {
    icon: Cpu,
    title: 'Gen AI Solutions',
    description: 'Intelligent applications powered by cutting-edge AI',
    highlight: 'OpenAI, LangGraph, Custom Models'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps for iOS and Android',
    highlight: 'React Native, Flutter'
  },
  {
    icon: Database,
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and deployment',
    highlight: 'AWS, Docker, CI/CD'
  },
  {
    icon: Globe,
    title: 'Global Solutions',
    description: 'Worldwide applications with international reach',
    highlight: 'Multi-region, Localization'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications with optimal efficiency',
    highlight: 'Speed, Scalability, SEO'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-100/30 to-blue-100/30 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-emerald-100/30 to-blue-100/30 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              What I Offer
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Comprehensive solutions that combine technical expertise with innovative thinking
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {offerings.map((offering, index) => (
              <motion.div 
                key={index}
                className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                variants={item}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <offering.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {offering.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                  {offering.description}
                </p>
                
                {/* Highlight */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {offering.highlight}
                  </span>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="mt-16 sm:mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <button 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  // Dynamic offset - when header is hidden, use less offset
                  // const headerHeight = 80; // Height of the navbar
                  // const padding = 40; // Additional padding
                  const offset = 40; // Use minimal offset since header might be hidden
                  const sectionTop = (contactSection as HTMLElement).offsetTop;
                  
                  window.scrollTo({
                    top: sectionTop - offset,
                    behavior: 'smooth'
                  });
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
            >
              <span>Let's Build Something Amazing</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
