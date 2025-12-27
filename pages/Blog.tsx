
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('./posts.json');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error loading posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) || 
    p.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto py-12 animate-in slide-in-from-bottom-4 duration-500">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Perspective on Accessibility</h1>
        <p className="text-lg text-slate-600">Sharing insights, news, and tutorials on the intersection of disability and digital technology.</p>
        
        <div className="mt-8 relative max-w-md">
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm"
            aria-label="Search blog posts"
          />
          <svg className="absolute right-4 top-3.5 h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </header>

      {isLoading ? (
        <div className="space-y-8">
          {[1, 2].map(i => (
            <div key={i} className="animate-pulse flex flex-col md:flex-row gap-6">
              <div className="h-48 md:w-64 bg-slate-200 rounded-2xl flex-shrink-0"></div>
              <div className="flex-1 space-y-4 py-2">
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                <div className="h-4 bg-slate-200 rounded w-full"></div>
                <div className="h-4 bg-slate-200 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-12">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group flex flex-col md:flex-row gap-8 items-start border-b border-slate-100 pb-12 last:border-0">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                    {post.date}
                  </span>
                </div>
                <Link to={`/blog/${post.id}`} className="block focus-ring rounded">
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-3 leading-tight">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  Read Article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-100 rounded-3xl border border-dashed border-slate-300">
          <p className="text-slate-500 font-medium">No posts found.</p>
          <button 
            onClick={() => setSearch('')}
            className="mt-4 text-blue-600 font-bold hover:underline"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
