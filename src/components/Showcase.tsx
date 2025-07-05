import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const industries = [
  {
    name: 'Retail',
    description: 'Order tracking & returns',
    icon: '🛍️',
    demoScript: [
      { speaker: 'AI', text: "Hello Sarah! This is Kuri, your ShopEasy virtual shopping assistant. How can I help you today?" },
      { speaker: 'Customer', text: "Hi Kuri, I'd like to check the status of my order #12345" },
      { speaker: 'AI', text: "Thanks for reaching out, Sarah! I found your order for the Sony WH-1000XM4 wireless headphones. Would you like to know the delivery status or do you need something else?" },
      { speaker: 'Customer', text: "Yes, when will it be delivered?" },
      { speaker: 'AI', text: "Great news, Sarah! Your order is out for delivery and will arrive by 8 PM today. Would you like me to send real-time tracking updates to your phone?" },
      { speaker: 'Customer', text: "That would be wonderful, thank you Kuri!" },
      { speaker: 'AI', text: "You're welcome, Sarah! I've enabled SMS updates for your order. You'll receive notifications at every delivery milestone. Is there anything else I can assist you with today?" }
    ],
  },
  {
    name: 'Healthcare',
    description: 'Appointments & insurance',
    icon: '🏥',
    demoScript: [
      { speaker: 'AI', text: "Thank you for calling City Medical Center. My name is Ava, your virtual health assistant. May I have your name and date of birth for verification?" },
      { speaker: 'Customer', text: "Hi Ava, I'm Michael Johnson, my date of birth is 05/15/1985" },
      { speaker: 'AI', text: "Thank you, Michael. How may I assist you today?" },
      { speaker: 'Customer', text: "I need to schedule an appointment with Dr. Smith" },
      { speaker: 'AI', text: "I can help with that, Michael. Dr. Smith has availability next Tuesday at 2 PM or Thursday at 10 AM. Which works better for you?" },
      { speaker: 'Customer', text: "Tuesday at 2 PM works for me" },
      { speaker: 'AI', text: "Perfect, Michael! I've scheduled your appointment for Tuesday at 2 PM. Will this be a routine check-up or is there a specific concern?" },
      { speaker: 'Customer', text: "It's a follow-up for my recent blood work" },
      { speaker: 'AI', text: "Got it, Michael. I've made a note for Dr. Smith about your blood work follow-up. You'll receive a confirmation text with preparation instructions. Is there anything else I can help you with today?" }
    ],
  },
  {
    name: 'Finance',
    description: 'Balance & transactions',
    icon: '💳',
    demoScript: [
      { speaker: 'AI', text: "Welcome to First National Bank. My name is Finn, your AI banking assistant. Could I have your name and the last 4 digits of your account to assist you better?" },
      { speaker: 'Customer', text: "Hi Finn, I'm David Chen. The last 4 digits are 9876" },
      { speaker: 'AI', text: "Thank you for verifying, Mr. Chen. How can I assist you with your banking today?" },
      { speaker: 'Customer', text: "I'd like to check my checking account balance" },
      { speaker: 'AI', text: "I can help with that, Mr. Chen. For security, could you please verify your mother's maiden name?" },
      { speaker: 'Customer', text: "It's Rodriguez" },
      { speaker: 'AI', text: "Thank you for verifying, Mr. Chen. Your current checking account balance is $2,856.42. Would you like to see recent transactions or perform another action?" },
      { speaker: 'Customer', text: "Can you list my last 3 transactions, Finn?" },
      { speaker: 'AI', text: "Of course, Mr. Chen! Here are your 3 most recent transactions: 1) $45.67 at Amazon, 2) $23.50 at Starbucks, 3) $150.00 transfer to savings. Would you like me to email you a detailed statement to david.chen@email.com?" }
    ],
  },
];

export default function Showcase() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSpeaking] = useState(false);
  const containerRef = useRef(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({               behavior: 'smooth',
      block: 'nearest',
      inline: 'start', });
  }, [currentStep]);

  useEffect(() => {
    if (isDemoActive) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= selectedIndustry.demoScript.length - 1) {
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [isDemoActive, selectedIndustry.demoScript.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="showcase" className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            AI Voice Agents in Action
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            {industries.map((industry) => (
              <motion.button
                key={industry.name}
                onClick={() => {
                  setSelectedIndustry(industry);
                  setIsDemoActive(false);
                  setCurrentStep(0);
                }}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 border-2 ${
                  selectedIndustry.name === industry.name
                    ? 'bg-white shadow-lg border-primary-500'
                    : 'bg-white/50 hover:bg-white/80 border-transparent'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{industry.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
         
            variants={itemVariants}
            className="bg-white rounded-2xl p-6 shadow-xl relative"
          >
            <div  ref={containerRef} className="relative h-[500px] flex flex-col overflow-auto">
              <div className="flex-shrink-0">
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{
                      scale: isDemoActive ? [1, 1.2, 1] : 1,
                      opacity: isDemoActive ? [1, 0.5, 1] : 1,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <span className="text-sm text-gray-600">
                    {isDemoActive ? 'Live' : 'Ready'}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col bg-gradient-to-br from-primary-50 to-white rounded-xl mb-4 p-4">
                <div className="h-12 flex-shrink-0"></div> {/* Spacer for the live indicator */}
                <AnimatePresence mode="wait">
                  {isDemoActive ? (
                    <motion.div
                      key="demo"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div className="flex-1 flex items-center justify-center">
                        <motion.div
                          className="relative"
                          animate={{
                            scale: isSpeaking ? [1, 1.1, 1] : 1,
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                            <span className="text-3xl">🎙️</span>
                          </div>
                          {isSpeaking && (
                            <>
                              <motion.div
                                className="absolute inset-0 rounded-full border-2 border-primary-300"
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [1, 0, 1],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                }}
                              />
                              <motion.div
                                className="absolute inset-0 rounded-full border-2 border-primary-400"
                                animate={{
                                  scale: [1, 1.8, 1],
                                  opacity: [1, 0, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                }}
                              />
                            </>
                          )}
                        </motion.div>
                      </div>

                      <div className="h-[300px] overflow-y-auto space-y-3 pr-2 -mr-2 overscroll-contain">
                        <div className="h-4 flex-shrink-0"></div> {/* Top padding */}
                        {selectedIndustry.demoScript.slice(0, currentStep + 1).map((message, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3 }}
                            className={`flex ${message.speaker === 'AI' ? 'justify-start' : 'justify-end'}`}
                          >
                            <div
                              className={`max-w-[80%] p-3 rounded-2xl ${
                                message.speaker === 'AI'
                                  ? 'bg-primary-100 text-gray-900'
                                  : 'bg-primary-600 text-white'
                              }`}
                            >
                              <p className="text-sm">{message.text}</p>
                            </div>
                          </motion.div>
                        ))}
                        <div className="h-4 flex-shrink-0"></div> {/* Bottom padding */}
                        <div ref={messagesEndRef} />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="start"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col items-center justify-center"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-3xl">🎙️</span>
                        </div>
                        <motion.button
                          onClick={() => setIsDemoActive(true)}
                          className="btn-primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Start Demo
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {isDemoActive && (
                <motion.button
                  onClick={() => {
                    setIsDemoActive(false);
                    setCurrentStep(0);
                  }}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reset Demo
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 