import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiPenTool, FiDatabase } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: 'Software Development',
      desc: 'Custom enterprise software solutions tailored to textile and fashion industry needs.'
    },
    {
      icon: <FiCpu className="w-8 h-8" />,
      title: 'Hardware Engineering',
      desc: 'Smart factory hardware integration for automated textile production.'
    },
    {
      icon: <FiPenTool className="w-8 h-8" />,
      title: 'Product Design',
      desc: 'Intuitive UX/UI and industrial design for modern textile machinery and software.'
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: 'Research & Development',
      desc: 'Pioneering next-generation sustainable materials and AI algorithms.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-950 uppercase tracking-widest mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Premium Services</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-indigo-950 transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {service.icon}
              </div>
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-indigo-950">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">{service.title}</h4>
              <p className="text-slate-600 group-hover:text-indigo-100 transition-colors leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
