
import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-rose/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-brand-dark text-center mb-16">Отзывы клиентов</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-sm shadow-sm relative italic">
              <div className="text-brand-gold mb-4">
                {"★".repeat(review.rating)}
              </div>
              <p className="text-brand-dark mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex justify-between items-center text-xs text-brand-muted not-italic font-bold tracking-widest uppercase">
                <span>{review.author}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
