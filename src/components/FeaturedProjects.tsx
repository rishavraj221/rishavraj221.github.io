import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye, Sparkles, Zap, Globe, Cpu } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  category: string;
  icon: any;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Voice AI Assistant',
    description: 'An intelligent voice assistant that understands natural language and performs tasks using advanced NLP and speech recognition.',
    tags: ['React', 'Node.js', 'Python', 'TensorFlow', 'WebRTC'],
    image: '/voice-ai-demo.jpg',
    githubUrl: 'https://github.com/yourusername/voice-ai',
    liveUrl: 'https://voice-ai-demo.com',
    caseStudyUrl: '/projects/voice-ai',
    category: 'AI & ML',
    icon: Cpu
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart, checkout, and payment integration.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    image: '/ecommerce-demo.jpg',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.com',
    category: 'Full Stack',
    icon: Globe
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time data visualization and predictive analytics dashboard for business intelligence.',
    tags: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    image: '/analytics-dashboard.jpg',
    githubUrl: 'https://github.com/yourusername/analytics-dashboard',
    liveUrl: 'https://analytics-demo.com',
    category: 'Data & Analytics',
    icon: Sparkles
  },
  {
    id: 4,
    title: 'Mobile Task Manager',
    description: 'A cross-platform mobile app for task management with offline support and cloud sync.',
    tags: ['React Native', 'Expo', 'Firebase', 'Redux'],
    image: '/task-manager.jpg',
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://apps.apple.com/app/task-manager',
    category: 'Mobile',
    icon: Zap
  }
];

const FeaturedProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden" id="projects">
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
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A showcase of innovative solutions that demonstrate technical expertise and creative problem-solving
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            ref={ref}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
                variants={item}
              >
                {/* Project Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-slate-400 dark:text-slate-500" />
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-600">
                      {project.category}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                        {project.caseStudyUrl && (
                          <a 
                            href={project.caseStudyUrl}
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <Eye className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 pt-2 border-t border-slate-200 dark:border-slate-700">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-1.5" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-1.5" />
                        Live Demo
                      </a>
                    )}
                    {project.caseStudyUrl && (
                      <a 
                        href={project.caseStudyUrl}
                        className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Eye className="w-4 h-4 mr-1.5" />
                        Case Study
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          {/* <motion.div 
            className="mt-16 sm:mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <a 
              href="/projects" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
