
import React from 'react';
import { Link } from 'react-router-dom';
import RecentPosts from '../components/RecentPosts';

const Home: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 md:py-24 space-y-16 animate-in fade-in duration-700">
      {/* Bio Section */}
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          Desmond Delgadillo | Assistive Tech Trainer
        </h1>
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
      </section>

      {/* Connection Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Connect with me</h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-lg">
          <a 
            href="https://linkedin.com/in/desdelgadillo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-1 font-medium focus-ring rounded"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:desdelgadillo@gmail.com" 
            className="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-1 font-medium focus-ring rounded"
          >
            Email me
          </a>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="pt-8 border-t border-slate-200">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-slate-900">Recent Blog Posts</h2>
          <Link to="/blog" className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
            View all posts &rarr;
          </Link>
        </div>
        <RecentPosts />
      </section>
    </div>
  );
};

export default Home;
