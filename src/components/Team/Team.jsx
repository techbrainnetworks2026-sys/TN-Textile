import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <section id="team" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-950/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-950 uppercase tracking-widest mb-2">Leadership</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Meet Our Founder</h3>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center relative"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-indigo-950 to-purple-600 p-1 shadow-xl shadow-indigo-900/20 mb-8">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-4xl text-indigo-950 font-bold">RA</span>
                {/* Replace with actual image: <img src="..." alt="Ramkumar Arunachalam" className="w-full h-full object-cover" /> */}
              </div>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-2">Ramkumar Arunachalam</h4>
            <p className="text-indigo-600 font-medium mb-6">Founder, Techbrain Networks</p>
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Visionary leader dedicated to bridging the gap between traditional textile manufacturing and cutting-edge software engineering. Driving innovation to create sustainable and intelligent solutions for the global apparel ecosystem.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
