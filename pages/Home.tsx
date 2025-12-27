
import React from 'react';
import { Link } from 'react-router-dom';
import RecentPosts from '../components/RecentPosts';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 md:py-20 space-y-24 animate-in fade-in duration-700">
      {/* Hero / Bio Section */}
      <section className="space-y-8" aria-labelledby="hero-heading">
        <div className="space-y-4">
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Empowering Independence Through <span className="text-blue-700">Assistive Technology.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-medium leading-relaxed">
            Desmond Delgadillo is an Assistive Tech Trainer specializing in digital inclusion, screen reader mastery, and accessible workflows.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/consultation" 
            className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
          >
            Get Expert Advice
          </Link>
          <Link 
            to="/about" 
            className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-xl font-bold hover:border-slate-900 transition-all"
          >
            My Background
          </Link>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-blue-50/50 rounded-[2rem] p-8 md:p-12 border border-blue-100">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Lifelong Expertise.</h2>
          <div className="prose prose-slate prose-lg text-slate-700 leading-relaxed">
            <p>
              I have been using assistive technology my entire life. From mastering screen readers 
              at a young age to navigating the world with braille, I have firsthand, lifelong 
              experience with the tools that empower independence. 
            </p>
            <p>
              Today, I leverage that expertise to train individuals and organizations, 
              ensuring digital platforms are truly inclusive and that technology serves 
              as a bridge rather than a barrier.
            </p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100/50 space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Professional Focus</h3>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✔</span>
              <span>Screen Reader Proficiency (JAWS, NVDA, VoiceOver)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✔</span>
              <span>WCAG 2.1/2.2 Compliance & Auditing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✔</span>
              <span>Inclusive UX Design Strategy</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="pt-8 border-t border-slate-200" aria-labelledby="blog-heading">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-2">
            <h2 id="blog-heading" className="text-3xl font-bold text-slate-900">Perspective on Accessibility</h2>
            <p className="text-slate-600 text-lg">Insights and news from the field of inclusive design.</p>
          </div>
          <Link to="/blog" className="hidden sm:block text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors uppercase tracking-widest">
            View all posts &rarr;
          </Link>
        </div>
        <RecentPosts />
        <Link to="/blog" className="mt-8 block sm:hidden text-center text-sm font-bold text-blue-700 uppercase tracking-widest">
          View all posts &rarr;
        </Link>
      </section>

      {/* Quick Contact Footer */}
      <section className="bg-slate-900 text-white rounded-[2rem] p-12 text-center space-y-8 shadow-2xl shadow-blue-900/10">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to make your project accessible?</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Whether you're an individual seeking training or a company building the next big thing, I can help you navigate the world of assistive tech.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="mailto:desdelgadillo@gmail.com" 
            className="px-10 py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-all text-lg"
          >
            Email Me Directly
          </a>
          <a 
            href="https://linkedin.com/in/desdelgadillo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-10 py-4 bg-slate-800 rounded-xl font-bold hover:bg-slate-700 transition-all text-lg"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
