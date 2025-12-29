
import React from 'react';
import { SERVICES } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="prices" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-brand-dark text-center mb-16">Прайс-лист</h2>
        
        <div className="max-w-4xl mx-auto overflow-hidden rounded-sm border border-brand-beige">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-brand-rose/20">
                <th className="px-8 py-4 font-serif text-lg text-brand-dark">Процедура</th>
                <th className="px-8 py-4 font-serif text-lg text-brand-dark text-right">Стоимость</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-beige">
              {SERVICES.map((service) => (
                <tr key={service.id} className="hover:bg-brand-beige/30 transition-colors">
                  <td className="px-8 py-4">
                    <div className="font-bold text-brand-dark">{service.title}</div>
                    {/* Fixed: description property does not exist on Service type, using shortDescription instead */}
                    <div className="text-xs text-brand-muted">{service.shortDescription}</div>
                  </td>
                  <td className="px-8 py-4 text-right font-medium text-brand-dark whitespace-nowrap">
                    {service.price}
                  </td>
                </tr>
              ))}
              <tr className="hover:bg-brand-beige/30 transition-colors">
                <td className="px-8 py-4">
                    <div className="font-bold text-brand-dark">Коллагеностимуляция</div>
                    <div className="text-xs text-brand-muted">Запуск процессов естественного омоложения</div>
                </td>
                <td className="px-8 py-4 text-right font-medium text-brand-dark whitespace-nowrap">от 15 000 руб.</td>
              </tr>
              <tr className="hover:bg-brand-beige/30 transition-colors">
                <td className="px-8 py-4">
                    <div className="font-bold text-brand-dark">Тредлифтинг</div>
                    <div className="text-xs text-brand-muted">Нитевой лифтинг для коррекции овала</div>
                </td>
                <td className="px-8 py-4 text-right font-medium text-brand-dark whitespace-nowrap">от 2 000 руб./нить</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-center text-xs text-brand-muted mt-8 italic">
          * Окончательная стоимость определяется на консультации исходя из выбранных препаратов и объемов.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
