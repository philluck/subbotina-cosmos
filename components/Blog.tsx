
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif text-brand-dark">Блог о красоте</h2>
            <p className="text-brand-muted">Статьи о тенденциях, советах и уходе за кожей.</p>
          </div>
          <button className="hidden md:block px-8 py-3 border border-brand-dark text-xs font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all">
            Все статьи
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="aspect-video overflow-hidden mb-6 rounded-sm shadow-md">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs text-brand-gold font-bold uppercase tracking-widest">{post.date}</span>
                <h3 className="text-2xl font-serif text-brand-dark group-hover:text-brand-gold transition-colors">{post.title}</h3>
                <p className="text-brand-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
                <button className="text-sm font-bold uppercase tracking-widest border-b border-brand-dark pb-1">Читать далее</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
