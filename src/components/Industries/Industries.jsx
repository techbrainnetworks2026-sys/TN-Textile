import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const Industries = () => {
  const industriesList = [
    'Aerospace', 'Agriculture', 'Automotive', 'Chemical', 
    'Defence Technology', 'Education', 'Energy & Utilities', 
    'Entertainment & Media', 'Finance', 'Food Technology', 
    'Healthcare', 'Infrastructure', 'Logistics', 'Manufacturing', 
    'Ocean Technology', 'Oil & Gas', 'Pharmaceutical', 'Retail', 
    'Sports', 'Technology', 'Telecommunication', 'Textile', 
    'Transportation', 'Travel'
  ];

  return (
    <section id="industries" className="py-24 bg-[#FAFAFA] pattern-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-950 uppercase tracking-widest mb-2">Industries We Serve</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Transforming Global Sectors</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industriesList.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-indigo-200 transition-all group cursor-pointer"
            >
              <div className="mb-3 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-indigo-50 group-hover:bg-indigo-950 flex items-center justify-center transition-colors">
                  <FiBriefcase className="text-indigo-950 group-hover:text-white transition-colors" />
                </div>
              </div>
              <h4 className="text-sm font-medium text-slate-700 group-hover:text-indigo-950">{industry}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
