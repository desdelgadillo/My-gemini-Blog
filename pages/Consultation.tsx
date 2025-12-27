
import React, { useState } from 'react';
import { getAccessibilityAdvice } from '../services/geminiService';

const Consultation: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    const advice = await getAccessibilityAdvice(query);
    setResponse(advice || '');
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 animate-in fade-in duration-500">
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
          </svg>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-6">Expert Guidance</h1>
          <p className="text-lg text-slate-300 max-w-xl mb-10 leading-relaxed">
            Need immediate advice on an accessibility challenge? Ask my AI Assistant trained on my expertise, or book a private session.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
            <div className="relative">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: How do I make my PowerPoint presentations accessible for screen reader users?"
                className="w-full h-32 px-6 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-500"
                aria-label="Your accessibility question"
              ></textarea>
            </div>
            <button
              disabled={loading}
              className={`px-8 py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center min-w-[160px] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Get Quick Advice'}
            </button>
          </form>

          {response && (
            <div className="mt-8 p-6 bg-slate-800/50 border border-slate-700 rounded-2xl animate-in slide-in-from-top-4 duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Desmond's AI Response</span>
              </div>
              <p className="text-slate-200 leading-relaxed whitespace-pre-wrap">{response}</p>
            </div>
          )}
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Corporate Training</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Equip your engineering and design teams with the skills to build inclusive products. 
            I offer custom workshops tailored to your tech stack.
          </p>
          <ul className="space-y-3 mb-8 text-sm text-slate-700">
            <li className="flex items-center gap-2"><svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> ARIA Best Practices</li>
            <li className="flex items-center gap-2"><svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Manual Testing with Screen Readers</li>
            <li className="flex items-center gap-2"><svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Inclusive Content Strategy</li>
          </ul>
          <button className="w-full py-3 border-2 border-slate-900 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all">Request a Proposal</button>
        </div>
        
        <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl shadow-blue-200">
          <h2 className="text-2xl font-bold mb-4">One-on-One Mastery</h2>
          <p className="text-blue-50 mb-6 leading-relaxed opacity-90">
            Personalized sessions for individuals looking to master a specific tool or workflow. 
            From college students to career professionals.
          </p>
          <ul className="space-y-3 mb-8 text-sm text-blue-100">
            <li className="flex items-center gap-2"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Individual Education Plans</li>
            <li className="flex items-center gap-2"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Workspace Efficiency Audits</li>
            <li className="flex items-center gap-2"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Braille Productivity Training</li>
          </ul>
          <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-md">Book a Discovery Call</button>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
