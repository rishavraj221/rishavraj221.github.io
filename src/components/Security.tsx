import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

const securityFeatures = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary-600" />,
    title: 'Enterprise-Grade Security',
    description: 'End-to-end encryption for all data in transit and at rest using industry-standard protocols.'
  },
  {
    icon: <Lock className="w-8 h-8 text-primary-600" />,
    title: 'Access Control',
    description: 'Role-based access controls and multi-factor authentication to protect sensitive information.'
  },
  {
    icon: <Server className="w-8 h-8 text-primary-600" />,
    title: 'Secure Infrastructure',
    description: 'Hosted on SOC 2 Type II and ISO 27001 certified cloud infrastructure with regular security audits.'
  },
  {
    icon: <EyeOff className="w-8 h-8 text-primary-600" />,
    title: 'Data Privacy',
    description: 'Strict data handling procedures in compliance with GDPR, CCPA, and other global privacy regulations.'
  },
  {
    icon: <FileText className="w-8 h-8 text-primary-600" />,
    title: 'Compliance Certifications',
    description: 'Regular third-party audits and compliance with industry standards to ensure your data is always protected.'
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-primary-600" />,
    title: 'Continuous Monitoring',
    description: '24/7 security monitoring and incident response to protect against emerging threats.'
  }
];

const complianceStandards = [
  { name: 'GDPR Compliant', icon: '🌐' },
  { name: 'CCPA Ready', icon: '🔒' },
  { name: 'SOC 2 Type II', icon: '🛡️' },
  { name: 'ISO 27001', icon: '🏆' },
  { name: 'HIPAA Eligible', icon: '⚕️' },
  { name: 'Enterprise SLA', icon: '📈' },
];

export default function Security() {
  return (
    <section id="security" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-50/20 via-transparent to-transparent -z-10" />
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Security & Compliance
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Your data's security is our top priority. We implement enterprise-grade security measures
            and maintain strict compliance with global data protection regulations.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary-50 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-100"
        >
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-8">
            We're committed to maintaining the highest standards
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors min-w-[120px]"
              >
                <span className="text-3xl mb-2">{standard.icon}</span>
                <span className="text-sm font-medium text-gray-700 text-center">{standard.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 mb-6">
              Have specific compliance requirements? Our team is ready to help.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Contact Security Team
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
