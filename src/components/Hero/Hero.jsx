import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFAFA]">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-950/5 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8"
          >
            Innovating the Future of <span className="gradient-text">Textile Technology</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed"
          >
            AI-powered software solutions transforming sustainable fashion, textile manufacturing, smart supply chains, and digital apparel ecosystems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href="#products" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-indigo-950 hover:bg-indigo-900 transition-colors shadow-lg hover:shadow-xl">
              Explore Products
              <FiArrowRight className="ml-2" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-indigo-950 bg-white border border-indigo-100 hover:bg-indigo-50 transition-colors shadow-sm">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
