import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';

const About = () => {
  const cards = [
    {
      icon: <FiEye className="w-8 h-8 text-indigo-950" />,
      title: 'Our Vision',
      desc: 'To pioneer the digital transformation of the global textile industry through innovative, sustainable, and intelligent technology solutions.'
    },
    {
      icon: <FiTarget className="w-8 h-8 text-purple-600" />,
      title: 'Our Mission',
      desc: 'Empowering fashion and textile enterprises with AI-driven tools to optimize production, reduce waste, and build transparent supply chains.'
    },
    {
      icon: <FiHeart className="w-8 h-8 text-rose-400" />,
      title: 'Our Passion',
      desc: 'We are driven by a commitment to sustainability, weaving technology and ecology together to craft a better future for fashion.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-950 uppercase tracking-widest mb-2">About Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Weaving Technology into Tradition</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-indigo-950"
            >
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 shadow-inner">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h4>
              <p className="text-slate-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
