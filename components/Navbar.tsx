import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const renderLink = (item: { label: string, path: string }, isMobile: boolean = false) => {
    const isExternal = item.path.startsWith('http');
    // For HashRouter, pathname still works the same way
    const isActive = location.pathname === item.path;
    
    const baseClass = isMobile 
      ? `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`
      : `text-sm font-medium transition-colors hover:text-blue-600 focus-ring rounded p-1 ${isActive ? 'text-blue-600 underline underline-offset-8 decoration-2' : 'text-slate-600'}`;

    if (isExternal) {
      return (
        <a
          key={item.path}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link
        key={item.path}
        to={item.path}
        onClick={() => isMobile && setIsOpen(false)}
        className={baseClass}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold text-blue-700 tracking-tight focus-ring rounded p-1"
              aria-label="Desmond Delgadillo Home"
            >
              Desmond Delgadillo
            </Link>
            <span className="hidden md:block ml-4 text-xs font-medium text-slate-500 uppercase tracking-widest border-l border-slate-200 pl-4">
              Assistive Tech Trainer
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => renderLink(item))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-600 focus-ring"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => renderLink(item, true))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;