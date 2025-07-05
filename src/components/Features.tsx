import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MessageSquare,
  Globe,
  Zap,
  Brain,
  Mic,
  BarChart3,
} from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  delay: number;
}

const features: Feature[] = [
  {
    title: 'Natural Conversations',
    description: 'Engage in human-like dialogues with advanced natural language processing',
    icon: <MessageSquare className="w-6 h-6" />,
    gradient: 'from-primary-50 to-primary-100',
    delay: 0,
  },
  {
    title: 'Multi-language Support',
    description: 'Communicate seamlessly in multiple languages with real-time translation',
    icon: <Globe className="w-6 h-6" />,
    gradient: 'from-primary-50 to-primary-100',
    delay: 0.1,
  },
  {
    title: 'Real-time Processing',
    description: 'Experience instant responses with our advanced processing capabilities',
    icon: <Zap className="w-6 h-6" />,
    gradient: 'from-primary-50 to-primary-100',
    delay: 0.2,
  },
  {
    title: 'Smart Context',
    description: 'Maintain conversation context for more meaningful interactions',
    icon: <Brain className="w-6 h-6" />,
    gradient: 'from-primary-50 to-primary-100',
    delay: 0.3,
  },
  {
    title: 'Customizable Voice',
    description: 'Choose from various voice options or create your own custom voice',
    icon: <Mic className="w-6 h-6" />,
    gradient: 'from-primary-50 to-primary-100',
    delay: 0.4,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track performance and gain insights with detailed analytics',
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: 'from-primary-50 to-primary-100',
    delay: 0.5,
  },
];

// interface FeatureCardProps {
//   feature: Feature;
//   index: number;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.5, delay: feature.delay }}
//       className="group"
//     >
//       <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
//         <div className="flex items-start gap-4">
//           <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform duration-300`}>
//             {feature.icon}
//           </div>
//           <div className="flex-1">
//             <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
//               {feature.title}
//             </h3>
//             <p className="text-gray-600">
//               {feature.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-accent-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-8"
            >
              <Zap className="w-4 h-4" />
              <span>Powerful Features</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Everything You Need to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Build Voice AI
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Our comprehensive suite of tools and features makes it easy to create, deploy, and scale your voice AI applications.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl transform transition-transform duration-300 group-hover:scale-105" />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 