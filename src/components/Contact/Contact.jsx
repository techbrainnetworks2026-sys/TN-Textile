import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-950 uppercase tracking-widest mb-2">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Partner With Us</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-950 focus:border-transparent transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-950 focus:border-transparent transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-950 focus:border-transparent transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-950 focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-lg bg-indigo-950 text-white font-medium hover:bg-indigo-900 transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-indigo-950 text-white p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <h4 className="text-xl font-bold mb-6">Contact Information</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FiPhone className="w-6 h-6 mr-4 mt-1 text-indigo-300" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-indigo-200">+91 8754906714</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMail className="w-6 h-6 mr-4 mt-1 text-indigo-300" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-indigo-200">contact@techbrainnetworks.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <FiMapPin className="w-8 h-8 text-indigo-950 mb-4" />
                <h5 className="font-bold text-slate-900 mb-2">India Office</h5>
                <p className="text-slate-600 text-sm">Thanjavur,<br />Tamil Nadu</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <FiMapPin className="w-8 h-8 text-indigo-950 mb-4" />
                <h5 className="font-bold text-slate-900 mb-2">UK Office</h5>
                <p className="text-slate-600 text-sm">London,<br />United Kingdom</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
