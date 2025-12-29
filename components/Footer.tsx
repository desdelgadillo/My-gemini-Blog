import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 border-b border-slate-800 pb-16">
          <div>
            <h3 className="text-white text-2xl font-black mb-6">Desmond Delgadillo</h3>
            <p className="text-lg leading-relaxed max-w-md">
              Empowering independence through master-level technology training and accessibility advocacy.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Explore</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#/" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#/about" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#/blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#/consultation" className="hover:text-blue-400 transition-colors">Consultation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="https://linkedin.com/in/desdelgadillo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="mailto:desdelgadillo@gmail.com" className="hover:text-blue-400 transition-colors">Email Me</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Desmond Delgadillo. Built for everyone.</p>
          <p className="mt-4 md:mt-0 italic">Optimized for Assistive Technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;