
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { fetchFromSanity } from '../services/sanityService';

const RecentPosts: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const getRecentPosts = async () => {
    // Fetch 2 most recent posts for a cleaner homepage look
    const query = `*[_type == "post"] | order(date desc, _createdAt desc) [0...2] {
      "id": _id,
      title,
      date,
      excerpt
    }`;
    
    const data = await fetchFromSanity(query);
    if (data) setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    getRecentPosts();
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

  if (loading) return (
    <div className="space-y-8 animate-pulse">
      {[1, 2].map(i => (
        <div key={i} className="space-y-3">
          <div className="h-4 bg-slate-200 rounded w-24"></div>
          <div className="h-6 bg-slate-200 rounded w-3/4"></div>
          <div className="h-4 bg-slate-200 rounded w-full"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-12">
      {posts.map(post => (
        <article key={post.id} className="group">
          <time dateTime={post.date} className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2 block">
            {formatDate(post.date)}
          </time>
          <Link to={`/blog/${post.id}`} className="block focus-ring rounded">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              {post.title}
            </h3>
          </Link>
          <p className="text-slate-600 text-base leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <Link 
            to={`/blog/${post.id}`} 
            className="text-sm font-bold text-blue-600 hover:underline underline-offset-4 decoration-1"
          >
            Read Article
          </Link>
        </article>
      ))}
    </div>
  );
};

export default RecentPosts;
