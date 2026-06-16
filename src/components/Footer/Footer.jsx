import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Techbrain Networks</h2>
            <p className="text-slate-400 mb-6 max-w-sm">
              Innovating the future of textile technology. Delivering sustainable, AI-powered solutions for modern fashion and manufacturing.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors relative group">About <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span></a></li>
              <li><a href="#products" className="hover:text-white transition-colors relative group">Products <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span></a></li>
              <li><a href="#careers" className="hover:text-white transition-colors relative group">Careers <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span></a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Techbrain Networks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
