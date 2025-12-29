
import React, { useEffect, useMemo, useState } from 'react';
import { Service } from '../types';
import { REVIEWS, BLOG_POSTS } from '../constants';

interface ServicePageProps {
  service: Service;
  onBack: () => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ service, onBack }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relevantReviews = useMemo(() => {
    return REVIEWS.filter(review => review.serviceId === service.id);
  }, [service.id]);

  const relevantPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => post.serviceId === service.id);
  }, [service.id]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center text-brand-dark mb-8 group hover:text-brand-gold transition-colors font-medium"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Назад к списку
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">{service.category}</span>
              <h1 className="text-4xl md:text-6xl font-serif text-brand-dark leading-tight">{service.title}</h1>
            </div>

            <div className="prose prose-brand max-w-none">
              <p className="text-lg text-brand-dark font-medium leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {(service.indications || service.benefits) && (
              <div className="space-y-6">
                <h3 className="text-xl font-serif text-brand-dark border-b border-brand-rose pb-2 inline-block">
                  {service.indications ? 'Показания к процедуре' : 'Преимущества'}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {(service.indications || service.benefits)?.map((item, index) => (
                    <li key={index} className="flex items-start text-brand-muted">
                      <span className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-white p-10 rounded-sm shadow-lg border border-brand-rose/30 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-rose/10 rounded-full -mr-16 -mt-16 z-0"></div>
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-serif text-brand-dark italic">Ожидаемый результат</h3>
                <p className="text-brand-muted leading-relaxed">{service.results}</p>
                <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-brand-beige">
                  <div className="text-3xl font-bold text-brand-dark">{service.price}</div>
                  <a 
                    href="#contact" 
                    onClick={onBack} 
                    className="w-full sm:w-auto px-10 py-4 bg-brand-dark text-white text-sm uppercase font-bold tracking-widest hover:bg-black shadow-md hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95 transition-all duration-300 text-center"
                  >
                    Записаться на процедуру
                  </a>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-brand-muted italic">* Требуется консультация специалиста.</p>
          </div>

          <div className="sticky top-32">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        {service.faq && service.faq.length > 0 && (
          <div className="mb-24">
            <h2 className="text-3xl font-serif text-brand-dark mb-12 border-b border-brand-rose/30 pb-4">Часто задаваемые вопросы</h2>
            <div className="space-y-4 max-w-3xl">
              {service.faq.map((item, index) => (
                <div key={index} className="bg-white border border-brand-rose/20 rounded-sm overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-brand-rose/5 transition-colors"
                  >
                    <span className="font-serif text-lg text-brand-dark">{item.question}</span>
                    <svg 
                      className={`w-5 h-5 text-brand-gold transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`px-8 transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 py-6 border-t border-brand-beige opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-brand-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles Section */}
        {relevantPosts.length > 0 && (
          <div className="mb-24">
            <h2 className="text-3xl font-serif text-brand-dark mb-12 border-b border-brand-rose/30 pb-4">Статьи по теме</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relevantPosts.map((post) => (
                <div key={post.id} className="group cursor-pointer bg-white p-4 rounded-sm border border-brand-rose/10 shadow-sm hover:shadow-md transition-all">
                  <div className="aspect-video overflow-hidden mb-4 rounded-sm">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{post.date}</span>
                    <h3 className="text-xl font-serif text-brand-dark group-hover:text-brand-gold transition-colors leading-snug">{post.title}</h3>
                    <p className="text-xs text-brand-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <button className="text-[10px] font-bold uppercase tracking-widest border-b border-brand-dark pb-0.5 mt-2 inline-block">Читать полностью</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Section */}
        <div className="border-t border-brand-rose/30 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <h2 className="text-3xl font-serif text-brand-dark mb-4 md:mb-0">Отзывы о процедуре</h2>
            <p className="text-brand-muted text-sm italic">Ваше мнение помогает нам становиться лучше</p>
          </div>

          {relevantReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relevantReviews.map((review) => (
                <div key={review.id} className="bg-white p-8 rounded-sm shadow-sm border border-brand-rose/10 flex flex-col justify-between">
                  <div>
                    <div className="text-brand-gold mb-4 text-lg">
                      {"★".repeat(review.rating)}
                    </div>
                    <p className="text-brand-dark mb-6 leading-relaxed italic">"{review.text}"</p>
                  </div>
                  <div className="flex justify-between items-center text-xs text-brand-muted font-bold tracking-widest uppercase mt-4">
                    <span>{review.author}</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/50 border border-dashed border-brand-rose p-12 text-center rounded-sm">
              <div className="max-w-md mx-auto space-y-4">
                <div className="text-brand-gold text-4xl mb-4 opacity-50 font-serif italic">“</div>
                <h4 className="text-xl font-serif text-brand-dark">Поделитесь своим опытом</h4>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Пока никто не оставил отзыв об этой услуге. Станьте первым! После прохождения процедуры мы будем рады узнать ваше мнение.
                </p>
                <a href="#contact" className="inline-block mt-4 px-6 py-2 border border-brand-dark text-brand-dark text-xs font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all">
                  Оставить отзыв
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
