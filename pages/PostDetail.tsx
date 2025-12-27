
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { fetchFromSanity } from '../services/sanityService';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const consultationUrl = "/consultation";

  useEffect(() => {
    const getPost = async () => {
      if (!id) return;
      
      const query = `*[_type == "post" && _id == "${id}"][0] {
        "id": _id,
        title,
        date,
        excerpt,
        content
      }`;
      
      const data = await fetchFromSanity(query);
      setPost(data || null);
      setLoading(false);
    };

    getPost();
  }, [id]);

  if (loading) {
    return <div className="max-w-3xl mx-auto py-20 text-center text-slate-500">Loading post...</div>;
  }

  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-900">Post not found</h2>
        <Link to="/blog" className="mt-4 inline-block text-blue-600 font-medium">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-12 animate-in fade-in duration-500">
      <Link to="/blog" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-8 transition-colors group">
        <svg className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Blog
      </Link>
      
      <header className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">D</div>
          <div>
            <p className="text-sm font-bold text-slate-900">Desmond Delgadillo</p>
            <p className="text-xs text-slate-500">{post.date}</p>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">{post.title}</h1>
      </header>

      <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:leading-relaxed prose-p:text-slate-700">
        {post.excerpt && (
          <p className="text-xl font-medium text-slate-900 italic mb-8 border-l-4 border-blue-600 pl-6 py-2">
            {post.excerpt}
          </p>
        )}
        <div 
          dangerouslySetInnerHTML={{ __html: post.content }} 
          className="space-y-4"
        />
      </div>

      <footer className="mt-16 pt-8 border-t border-slate-200">
        <div className="bg-blue-50 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Enjoying my perspective?</h3>
            <p className="text-blue-800 text-sm opacity-90">I host bi-weekly workshops for developers and content creators on digital inclusive design.</p>
          </div>
          <Link 
            to={consultationUrl}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-200 flex-shrink-0"
          >
            Join a Workshop
          </Link>
        </div>
      </footer>
    </article>
  );
};

export default PostDetail;
