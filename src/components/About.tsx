import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cpu, Server, Smartphone, Database, Cloud, GraduationCap, Briefcase, Rocket, Target as TargetIcon, Award, Globe } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', level: 90, icon: Code, description: 'React, Next.js, TypeScript' },
  { name: 'Backend Development', level: 85, icon: Server, description: 'Node.js, Python, APIs' },
  { name: 'Gen AI', level: 80, icon: Cpu, description: 'OpenAI, Claude, LangGraph, LangChain, Custom Models' },
  { name: 'Mobile Development', level: 75, icon: Smartphone, description: 'React Native' },
  { name: 'Database & Cloud', level: 85, icon: Database, description: 'PostgreSQL, MongoDB, AWS' },
  { name: 'DevOps & Tools', level: 80, icon: Cloud, description: 'Docker, CI/CD, Git' },
];

const backgroundInfo = [
  {
    icon: GraduationCap,
    title: "IIT Madras Graduate",
    description: "Class of 2023"
  },
  {
    icon: Briefcase,
    title: "3+ Years Experience",
    description: "Full Stack Development & Gen AI"
  },
  {
    icon: Rocket,
    title: "15+ Projects Completed",
    description: "Web Apps, Mobile & AI Solutions"
  },
  {
    icon: TargetIcon,
    title: "Gen AI",
    description: "OpenAI, LangGraph, Custom Models"
  },
  {
    icon: Award,
    title: "Problem Solver",
    description: "Complex Solutions & Optimization"
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Remote Work & International Projects"
  }
];

const About = () => {
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
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-100/30 to-blue-100/30 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-emerald-100/30 to-blue-100/30 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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
              About Me
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Building intelligent solutions with code & AI
            </p>
          </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content - Skills */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                  Technical Expertise
                </h3>
              </div>
              
              <motion.div 
                ref={ref}
                className="space-y-4"
                variants={container}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                {skills.map((skill, index) => (
                  <motion.div key={index} variants={item} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <skill.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white">
                            {skill.name}
                          </span>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Right Content - About & Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="space-y-8 flex flex-col justify-center items-start lg:items-center min-h-full"
            >
              {/* Background Info */}
              <motion.div 
                className="space-y-6"
                variants={container}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                {backgroundInfo.map((info, index) => (
                  <motion.div key={index} variants={item} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <info.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {info.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
