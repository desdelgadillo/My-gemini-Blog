
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-slate-800 pb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Desmond Delgadillo</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering the blind and low-vision community through technology training and advocacy since 2018.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://linkedin.com/in/desdelgadillo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors"
                >
                  Twitter (X)
                </a>
              </li>
              <li>
                <a 
                  href="mailto:desdelgadillo@gmail.com" 
                  className="hover:text-blue-400 transition-colors"
                >
                  Email Me
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Desmond Delgadillo. Built for all abilities.</p>
          <p className="mt-2 md:mt-0 italic">Designed for Screen Readers & Clarity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
