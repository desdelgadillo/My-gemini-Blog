
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 md:py-24 space-y-24 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="space-y-10" aria-labelledby="hero-heading">
        <div className="space-y-6">
          <h1 id="hero-heading" className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Desmond Delgadillo | <span className="text-blue-700">Assistive Technology Trainer</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-medium leading-relaxed">
            Certified NVDA and JAWS expert and trainer. I specialize in unlocking digital potential through master-level screen reader instruction and high-impact accessibility advocacy.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-6">
          <Link 
            to="/consultation" 
            className="px-10 py-5 bg-blue-700 text-white rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-xl shadow-blue-100 text-lg"
          >
            Work With Me
          </Link>
          <Link 
            to="/about" 
            className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-bold hover:border-slate-900 transition-all text-lg"
          >
            My Story
          </Link>
        </div>
      </section>

      {/* Connect Section */}
      <section className="space-y-12" aria-labelledby="connect-heading">
        <div className="flex items-center gap-6">
          <h2 id="connect-heading" className="text-3xl md:text-4xl font-black text-slate-900 whitespace-nowrap">Connect with me</h2>
          <div className="h-px w-full bg-slate-100"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a 
            href="https://linkedin.com/in/desdelgadillo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-blue-600 hover:shadow-2xl transition-all focus-ring"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            <div className="ml-8">
              <h3 className="font-black text-slate-900 text-2xl">LinkedIn</h3>
              <p className="text-slate-500 font-medium">Professional networking</p>
            </div>
          </a>
          <a 
            href="mailto:desdelgadillo@gmail.com" 
            className="group flex items-center p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-blue-600 hover:shadow-2xl transition-all focus-ring"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div className="ml-8">
              <h3 className="font-black text-slate-900 text-2xl">Email</h3>
              <p className="text-slate-500 font-medium">desdelgadillo@gmail.com</p>
            </div>
          </a>
        </div>
      </section>

      {/* Expertise Summary */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-blue-50 border border-blue-100 rounded-[3rem] p-10 md:p-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Lifelong Expertise.</h2>
          <p className="text-lg text-slate-700 leading-relaxed font-medium">
            I have been navigating the digital world with assistive technology since I was a child. 
            This lived experience, combined with professional certifications, allows me to provide 
            training that is both technically rigorous and deeply practical.
          </p>
        </div>
        <div className="bg-white p-10 rounded-3xl shadow-sm space-y-6 border border-blue-200/50">
          <h3 className="text-xl font-black text-slate-900">Specializations</h3>
          <ul className="space-y-4 text-slate-700 font-bold">
            <li className="flex items-center gap-3">
              <span className="text-blue-600">»</span> Expert JAWS & NVDA Instruction
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600">»</span> Mac & iOS VoiceOver Mastery
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600">»</span> Accessible Workflow Optimization
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
