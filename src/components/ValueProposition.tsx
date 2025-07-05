import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cpu, Globe, Layers, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Full-Stack Expertise',
    description: 'End-to-end development from concept to deployment with modern tech stacks and best practices.'
  },
  {
    icon: Cpu,
    title: 'Gen AI Integration',
    description: 'Leverage cutting-edge AI to build intelligent, adaptive applications that learn and evolve.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Solutions designed to scale across borders and industries, reaching users worldwide.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Robust security measures to protect your data and ensure compliance with industry standards.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance and lightning-fast load times for exceptional user experiences.'
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Future-proof solutions that grow with your business needs and user base.'
  }
];

const ValueProposition = () => {
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
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="value-proposition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Why Work With Me
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Delivering exceptional value through innovative solutions and technical excellence
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
