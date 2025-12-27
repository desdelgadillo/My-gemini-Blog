
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const consultationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe6kCnAw-L-RRtAQnJhDFnq2sSwyXxpSoTGh3_LyZHMLtzH9w/viewform?usp=sf_link";

  return (
    <div className="space-y-20 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-12 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Making the digital world <span className="text-blue-600 underline decoration-blue-200">accessible</span> for everyone.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              I’m Desmond Delgadillo. I specialize in training individuals and organizations 
              to leverage assistive technology, ensuring that no one is left behind in 
              the digital age.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={consultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all focus-ring"
              >
                Work With Me
              </a>
              <Link 
                to="/blog" 
                className="inline-flex items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all focus-ring"
              >
                Read My Blog
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <img 
                src="https://picsum.photos/seed/desmond/600/600" 
                alt="Portrait of Desmond Delgadillo" 
                className="relative rounded-2xl shadow-2xl object-cover w-full aspect-square border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">My Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl">01</div>
            <h3 className="text-xl font-bold text-slate-900">Screen Reader Training</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Hands-on instruction for JAWS, NVDA, and VoiceOver to help users navigate complex software and web applications.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl">02</div>
            <h3 className="text-xl font-bold text-slate-900">Digital Accessibility Audits</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Evaluating websites and mobile apps against WCAG standards to identify and remediate UX barriers for disabled users.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center font-bold text-xl">03</div>
            <h3 className="text-xl font-bold text-slate-900">Braille Display Mastery</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Helping professionals and students integrate refreshable braille displays into their educational and work environments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
