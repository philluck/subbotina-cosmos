
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-beige">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 p-12 bg-brand-dark text-white space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif">Контакты</h2>
              <p className="text-gray-400">Свяжитесь со мной любым удобным способом для записи или консультации.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Телефон</p>
                  <a href="tel:+79148959704" className="text-lg">+7 914 895 97 04</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" /></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Telegram</p>
                  <a href="https://t.me/IrinaSubbotina2004" className="text-lg">@IrinaSubbotina2004</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Адрес</p>
                  <p className="text-lg">г. Иркутск / Москва</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
               <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Социальные сети</p>
               <div className="flex space-x-6">
                 <a href="https://t.me/mestokrasotiirk" className="hover:text-brand-gold transition-colors">Telegram Канал</a>
                 <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12">
            <h3 className="text-2xl font-serif text-brand-dark mb-8">Записаться на консультацию</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-brand-muted">Ваше имя</label>
                <input required type="text" className="w-full border-b border-gray-300 py-2 focus:border-brand-dark outline-none transition-colors" placeholder="Иван Иванов" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-brand-muted">Телефон</label>
                <input required type="tel" className="w-full border-b border-gray-300 py-2 focus:border-brand-dark outline-none transition-colors" placeholder="+7 (___) ___-__-__" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-brand-muted">Процедура (необязательно)</label>
                <select className="w-full border-b border-gray-300 py-2 focus:border-brand-dark outline-none transition-colors bg-white">
                  <option>Выберите услугу</option>
                  <option>Чистка лица</option>
                  <option>Мезотерапия</option>
                  <option>Биоревитализация</option>
                  <option>Контурная пластика</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-brand-dark text-white py-4 font-bold uppercase tracking-widest hover:bg-black transition-all">
                Отправить заявку
              </button>
              {status && <p className="text-green-600 text-sm font-medium">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
