import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is Kureita?',
    answer:
      'Kureita empowers creators and businesses with advanced AI voice agents for seamless, automated customer engagement and support.',
  },
  {
    question: 'How secure is my data?',
    answer:
      'We use industry-standard encryption and privacy practices to ensure your data is safe and never shared with third parties.',
  },
  {
    question: 'Can I integrate Kureita with my existing tools?',
    answer:
      'Yes! Kureita offers easy integrations with popular CRM, helpdesk, and productivity tools through APIs and native plugins.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Absolutely! You can sign up for a free trial and experience the power of AI voice agents before committing to a plan.',
  },
  {
    question: 'How do I get support?',
    answer:
      'Our support team is available 24/7 via chat, email, and phone. We also offer extensive documentation and onboarding resources.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-100/10 via-transparent to-transparent -z-10" />
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Answers to the most common questions about Kureita’s AI voice platform.
          </p>
        </motion.div>
        <div className="max-w-2xl mx-auto divide-y divide-gray-100 rounded-2xl shadow-md bg-white">
          {faqs.map((faq, idx) => (
            <div key={faq.question} className="border-b border-gray-100 last:border-b-0">
              <button
                className="w-full flex justify-between items-center px-6 py-5 focus:outline-none text-left group hover:bg-gray-50/70 transition-colors duration-200"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-base font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                  {faq.question}
                </span>
                <motion.span
                  initial={false}
                  animate={{ rotate: openIndex === idx ? 90 : 0 }}
                  className="ml-4 text-primary-500 group-hover:text-primary-600 transition-colors"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    id={`faq-answer-${idx}`}
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: 'auto', opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden px-6"
                  >
                    <div className="pb-5 text-gray-500 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
