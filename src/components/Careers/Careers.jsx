import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const Careers = () => {
  const jobs = [
    'Android Developer', 'CAD/CAM Designer', 'DFT Engineer', 
    'FARM-stack Developer', 'FPGA Engineer', 'Hardware Design & Testing', 
    'IOS Developer', 'Machine Learning Engineer', 'MEAN-stack Developer', 
    'MERN-stack Developer', 'Physical Design Engineer', 'Robotics Engineer', 
    'Software Tester', 'UX/UI Designer', 'Verification Engineer', 
    'VLSI Design Engineer'
  ];

  return (
    <section id="careers" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-950 uppercase tracking-widest mb-2">Join Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Build the Future of Textiles</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group border border-slate-100 rounded-xl p-6 hover:shadow-lg hover:border-indigo-100 transition-all bg-white relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-950 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-950">
                  <FiBriefcase />
                </div>
                <span className="text-xs font-medium px-2 py-1 bg-green-50 text-green-700 rounded-full">Full-Time</span>
              </div>
              
              <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-950 transition-colors">{job}</h4>
              <p className="text-sm text-slate-500 mb-6">Join our engineering team to develop cutting-edge solutions.</p>
              
              <button className="w-full py-2 px-4 rounded-lg bg-slate-50 text-indigo-950 font-medium text-sm hover:bg-indigo-950 hover:text-white transition-colors">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
