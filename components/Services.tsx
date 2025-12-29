
import React from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-brand-beige">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-serif text-brand-dark">Наши Услуги</h2>
          <p className="text-brand-muted">Широкий спектр процедур для сохранения вашей молодости и красоты на основе медицинских знаний.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all border border-brand-rose/20 group flex flex-col h-full">
              <div className="h-48 mb-6 overflow-hidden rounded-sm">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-sm text-brand-muted mb-6 flex-grow line-clamp-3">{service.shortDescription}</p>
              
              <div className="pt-4 border-t border-brand-beige flex justify-between items-center">
                <span className="font-bold text-brand-dark">{service.price}</span>
                <button 
                  onClick={() => onSelectService(service)}
                  className="text-xs uppercase font-bold tracking-tighter text-brand-gold hover:text-brand-dark transition-colors"
                >
                  Подробнее →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
