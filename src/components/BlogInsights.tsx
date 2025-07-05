import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight, BookOpen, Zap, Cpu } from 'lucide-react';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  slug: string;
  icon: any;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable Microservices with Node.js and Docker',
    excerpt: 'Learn how to design and deploy scalable microservices architecture using Node.js, Express, and Docker containers.',
    category: 'Backend',
    readTime: '8 min read',
    date: '2023-06-15',
    image: '/blog/microservices.jpg',
    slug: 'scalable-microservices-nodejs-docker',
    icon: Zap
  },
  {
    id: 2,
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how artificial intelligence is revolutionizing web development and what it means for developers.',
    category: 'AI/ML',
    readTime: '6 min read',
    date: '2023-05-22',
    image: '/blog/ai-web-dev.jpg',
    slug: 'future-ai-web-development',
    icon: Cpu
  },
  {
    id: 3,
    title: 'Mastering React Performance Optimization',
    excerpt: 'Advanced techniques to optimize your React applications for better performance and user experience.',
    category: 'Frontend',
    readTime: '10 min read',
    date: '2023-04-10',
    image: '/blog/react-performance.jpg',
    slug: 'react-performance-optimization',
    icon: BookOpen
  }
];

const BlogInsights = () => {
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

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden" id="blog">
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
              Latest Insights
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Thoughts, tutorials, and insights on technology and development
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div 
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {blogPosts.map((post) => (
              <motion.article 
                key={post.id}
                className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
                variants={item}
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                    <post.icon className="w-16 h-16 text-slate-400 dark:text-slate-500" />
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-600">
                      {post.category}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex items-center gap-2 text-white text-sm">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                        <span>•</span>
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    {/* Read More Link */}
                    <a 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                    >
                      <span>Read more</span>
                      <ArrowRight className="w-3 h-3 ml-1 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.article>
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
              href="/blog" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;
