
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';

const RecentPosts: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      // Adding a cache-buster query param to simulate "watching" fresh data
      const response = await fetch(`./posts.json?t=${Date.now()}`);
      const data: BlogPost[] = await response.json();
      // Sort by ID descending (assuming higher ID = newer) and take latest 3
      const sortedPosts = data.sort((a, b) => b.id - a.id).slice(0, 3);
      setPosts(sortedPosts);
    } catch (error) {
      console.error("Failed to fetch recent posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    
    // "Watch" for updates by polling every 60 seconds
    const interval = setInterval(fetchPosts, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
      {[1, 2, 3].map(i => (
        <div key={i} className="h-64 bg-slate-200 rounded-2xl"></div>
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map(post => (
        <article key={post.id} className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 block">
            {post.date}
          </span>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
            {post.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
            {post.excerpt}
          </p>
          <Link 
            to={`/blog/${post.id}`} 
            className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
          >
            Continue Reading
            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default RecentPosts;
