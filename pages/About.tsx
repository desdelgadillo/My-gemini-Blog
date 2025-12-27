
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 animate-in fade-in duration-500">
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Biography & Credentials</h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Driven by personal experience and a passion for technology, I've spent the last decade 
          closing the gap between high-end software and those who use it with specialized tools.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">My Journey</h2>
            <div className="prose prose-slate prose-lg text-slate-700 space-y-4">
              <p>
                My name is Desmond Delgadillo, and I am an Assistive Technology Trainer based in Southern California. 
                My interest in technology began early, but it was my transition into professional settings that 
                revealed how much work was still needed in digital inclusion.
              </p>
              <p>
                After obtaining my certification from California State University, Northridge (CSUN), I began working 
                directly with vocational rehabilitation agencies to help blind and low-vision clients return to work 
                with confidence.
              </p>
              <p>
                Today, I bridge the gap between users and creators. I teach the users how to master the tools, and 
                I teach the creators how to build better ones.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">Experience</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-slate-900">Lead Trainer, Visionary Tech Solutions</h3>
                  <p className="text-sm text-slate-500">2020 - Present</p>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">Managing curriculum development for national training programs focusing on screen reader integration with CRM platforms.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-slate-300 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-slate-900">Accessibility Consultant, FinTech Collective</h3>
                  <p className="text-sm text-slate-500">2018 - 2020</p>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">Audited customer-facing banking applications to ensure compliance with ADA standards and improved user flows for VoiceOver users.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-12">
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Certifications</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="h-6 w-6 bg-white border border-slate-200 rounded flex items-center justify-center flex-shrink-0">📜</div>
                <span className="text-sm font-medium text-slate-700">Certified Assistive Technology Instructional Specialist (CATIS)</span>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 bg-white border border-slate-200 rounded flex items-center justify-center flex-shrink-0">📜</div>
                <span className="text-sm font-medium text-slate-700">DHS Section 508 Trusted Tester</span>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 bg-white border border-slate-200 rounded flex items-center justify-center flex-shrink-0">📜</div>
                <span className="text-sm font-medium text-slate-700">IAAP WAS Certification</span>
              </li>
            </ul>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Speaking Engagements</h3>
            <div className="space-y-4">
              <div className="text-sm">
                <p className="font-bold text-blue-600">CSUN Assistive Tech Conference 2023</p>
                <p className="text-slate-500">Topic: AI and the Future of Vision Services</p>
              </div>
              <div className="text-sm">
                <p className="font-bold text-blue-600">A11yNYC Meetup 2022</p>
                <p className="text-slate-500">Topic: Workplace Accommodations that Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
