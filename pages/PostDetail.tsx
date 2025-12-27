
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { sanityClient, urlFor } from '../services/sanityService';
import { PortableText } from '@portabletext/react';

const PostDetail: React.FC = () => {
  const { id: slug } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const consultationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe6kCnAw-L-RRtAQnJhDFnq2sSwyXxpSoTGh3_LyZHMLtzH9w/viewform?usp=sf_link";

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0] {
          title,
          body,
          mainImage,
          publishedAt,
          excerpt,
          "author": author->{name},
          "categories": categories[]->{title}
        }`;
        const data = await sanityClient.fetch(query, { slug });
        setPost(data);
      } catch (error) {
        console.error("Sanity fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

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
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            {post.author?.name?.charAt(0) || 'D'}
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">{post.author?.name}</p>
            <p className="text-xs text-slate-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">{post.title}</h1>
        <div className="flex gap-2">
          {post.categories?.map(cat => (
            <span key={cat.title} className="px-3 py-1 bg-slate-100 text-xs font-semibold text-slate-600 rounded-full">#{cat.title}</span>
          ))}
        </div>
      </header>

      {post.mainImage && (
        <div className="rounded-3xl overflow-hidden mb-12 shadow-xl border border-slate-200">
          <img src={urlFor(post.mainImage).width(1200).url()} alt="" className="w-full h-auto" />
        </div>
      )}

      <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:leading-relaxed prose-p:text-slate-700">
        {post.excerpt && (
          <p className="text-xl font-medium text-slate-900 italic mb-8 border-l-4 border-blue-600 pl-6 py-2">
            {post.excerpt}
          </p>
        )}
        
        <PortableText value={post.body} />
      </div>

      <footer className="mt-16 pt-8 border-t border-slate-200">
        <div className="bg-blue-50 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Enjoying my perspective?</h3>
            <p className="text-blue-800 text-sm opacity-90">I host bi-weekly workshops for developers and content creators on digital inclusive design.</p>
          </div>
          <a 
            href={consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-200 flex-shrink-0"
          >
            Join a Workshop
          </a>
        </div>
      </footer>
    </article>
  );
};

export default PostDetail;
