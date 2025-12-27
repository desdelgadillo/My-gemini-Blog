
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { fetchFromSanity } from '../services/sanityService';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      // Fetch all posts ordered by date descending. 
      // If two posts have the same date, order by creation time.
      const query = `*[_type == "post"] | order(date desc, _createdAt desc) {
        "id": _id,
        title,
        date,
        excerpt,
        content
      }`;
      const data = await fetchFromSanity(query);
      if (data) {
        setPosts(data);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);

  const filteredPosts = posts.filter(p => 
    p.title?.toLowerCase().includes(search.toLowerCase()) || 
    p.excerpt?.toLowerCase().includes(search.toLowerCase())
  );

  // Helper to format date if it's in YYYY-MM-DD format
  const formatDate = (dateStr: string) => {
    try {
      if (!dateStr) return '';
      // Check if it's already a friendly string or ISO
      if (dateStr.includes(',')) return dateStr; 
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
    <div className="max-w-4xl mx-auto py-12 animate-in slide-in-from-bottom-4 duration-500">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Perspective on Accessibility</h1>
        <p className="text-lg text-slate-600 max-w-2xl">Sharing insights, news, and tutorials on the intersection of disability and digital technology.</p>
        
        <div className="mt-8 relative max-w-md">
          <label htmlFor="blog-search" className="sr-only">Search blog posts</label>
          <input
            id="blog-search"
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm"
          />
          <div className="absolute right-4 top-3.5 h-5 w-5 text-slate-400 pointer-events-none">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </header>

      {isLoading ? (
        <div className="space-y-12">
          {[1, 2, 3].map(i => (
            <div key={i} className="animate-pulse flex flex-col gap-4">
              <div className="h-4 bg-slate-200 rounded w-24"></div>
              <div className="h-8 bg-slate-200 rounded w-3/4"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      ) : filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-12">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group flex flex-col gap-4 items-start border-b border-slate-100 pb-12 last:border-0">
              <time dateTime={post.date} className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                {formatDate(post.date)}
              </time>
              <div className="space-y-3">
                <Link to={`/blog/${post.id}`} className="block focus-ring rounded group">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-slate-600 leading-relaxed text-lg line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <Link 
                to={`/blog/${post.id}`} 
                className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors group"
                aria-label={`Read more about ${post.title}`}
              >
                Read Article
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
          <p className="text-slate-500 font-medium text-lg">No posts match your search.</p>
          <button 
            onClick={() => setSearch('')}
            className="mt-4 px-6 py-2 bg-white border border-slate-200 rounded-lg text-blue-600 font-bold hover:bg-slate-50 transition-all"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
