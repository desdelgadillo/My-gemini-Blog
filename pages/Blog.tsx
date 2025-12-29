import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { fetchFromSanity } from '../services/sanityService';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      // Query for posts. Using standard blog order (newest first).
      const query = `*[_type == "post"] | order(date desc, _createdAt desc) {
        "id": _id,
        title,
        date,
        excerpt
      }`;
      const data = await fetchFromSanity(query);
      if (data) {
        setPosts(data);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);

  const formatDate = (dateStr: string) => {
    try {
      if (!dateStr) return '';
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 md:py-24 animate-in">
      <header className="mb-20">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Perspective on Accessibility</h1>
        <p className="text-xl text-slate-600 max-w-2xl font-medium leading-relaxed">Insights, news, and technical tutorials from the intersection of disability and digital technology.</p>
      </header>

      {isLoading ? (
        <div className="space-y-16 py-10">
          {[1, 2, 3].map(i => (
            <div key={i} className="animate-pulse space-y-6">
              <div className="h-4 bg-slate-100 rounded w-24"></div>
              <div className="h-10 bg-slate-100 rounded w-3/4"></div>
              <div className="h-20 bg-slate-100 rounded w-full"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-20">
          {posts.map((post) => (
            <article key={post.id} className="group border-b border-slate-100 pb-16 last:border-0">
              <time dateTime={post.date} className="text-xs font-black text-blue-700 uppercase tracking-widest mb-4 block">
                {formatDate(post.date)}
              </time>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 group-hover:text-blue-700 transition-colors leading-tight">
                <Link to={`/blog/${post.id}`} className="focus-ring rounded-lg">
                  {post.title}
                </Link>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-3xl">
                {post.excerpt || "Explore technical insights and the latest news on digital inclusion and assistive technology."}
              </p>
              <Link 
                to={`/blog/${post.id}`} 
                className="inline-flex items-center text-lg font-bold text-blue-700 hover:text-blue-900 transition-all gap-2 group/link"
              >
                <span>Read more</span>
                <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </article>
          ))}
          {posts.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
               <p className="text-slate-500 font-medium">No posts found in Sanity. Check your dataset configuration.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;