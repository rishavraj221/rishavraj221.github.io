import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  link?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Rishav delivered exceptional work on our AI integration project. His expertise in machine learning and problem-solving skills were instrumental in meeting our tight deadlines.",
    author: "Alex Johnson",
    role: "Engineering Manager",
    company: "TechNova Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    link: "https://linkedin.com"
  },
  {
    quote: "Working with Rishav was a great experience. His attention to detail and clean code practices significantly improved our application's performance and maintainability.",
    author: "Sarah Williams",
    role: "Product Lead",
    company: "InnoTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    link: "https://linkedin.com"
  },
  {
    quote: "Rishav's full-stack development skills are top-notch. He consistently delivered high-quality work and was always willing to go the extra mile to ensure project success.",
    author: "Michael Chen",
    role: "CTO",
    company: "Digital Innovations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    link: "https://linkedin.com"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
    >
      <Quote className="w-8 h-8 text-primary-500 mb-6" />
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{testimonial.quote}</p>
      <a 
        href={testimonial.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-primary-500 transition-colors duration-200"
          />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors duration-200">
              {testimonial.author}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary-500 dark:text-primary-400 mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What People Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's what colleagues and clients have to say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Ready to start your next project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
} 