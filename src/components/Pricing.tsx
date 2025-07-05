import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Zap,
  Headphones,
  MessageSquare,
  Check,
  CreditCard,
} from 'lucide-react';

interface PricingTier {
  name: string;
  price: {
    monthly: string;
    yearly: string;
  };
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  icon: React.ReactNode;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: {
      monthly: '$49',
      yearly: '$39',
    },
    description: 'Perfect for small businesses starting with voice AI',
    features: [
      'Up to 1,000 voice interactions/month',
      'Basic voice customization',
      'Email support',
      '2 voice agents',
      'Basic analytics',
    ],
    cta: 'Start Free Trial',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: 'Professional',
    price: {
      monthly: '$149',
      yearly: '$119',
    },
    description: 'Ideal for growing businesses with advanced needs',
    features: [
      'Up to 10,000 voice interactions/month',
      'Advanced voice customization',
      'Priority support',
      '5 voice agents',
      'Advanced analytics',
      'Custom integrations',
      'Multi-language support',
    ],
    cta: 'Start Free Trial',
    popular: true,
    icon: <Headphones className="w-6 h-6" />,
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 'Custom',
      yearly: 'Custom',
    },
    description: 'Tailored solutions for large organizations',
    features: [
      'Unlimited voice interactions',
      'Custom voice development',
      '24/7 dedicated support',
      'Unlimited voice agents',
      'Enterprise analytics',
      'Custom integrations',
      'SLA guarantee',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    icon: <MessageSquare className="w-6 h-6" />,
  },
];

export default function Pricing() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
              <CreditCard className="w-4 h-4" />
              <span>Simple, Transparent Pricing</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Choose Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Voice AI Plan
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            >
              Start with a free trial and scale as you grow. All plans include our core voice AI features.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-4 mb-12"
            >
              <span className={`text-sm ${!isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                    isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                Yearly
                <span className="ml-2 text-xs text-primary-600 dark:text-primary-400">Save 20%</span>
              </span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  tier.popular
                    ? 'border-primary-500 dark:border-primary-400'
                    : 'border-gray-100 dark:border-gray-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {tier.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {isYearly ? tier.price.yearly : tier.price.monthly}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    {tier.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <Check className="w-5 h-5 text-primary-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                      tier.popular
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-300">
              Need a custom plan?{' '}
              <a href="#contact" className="text-primary-600 dark:text-primary-400 hover:underline">
                Contact us
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 