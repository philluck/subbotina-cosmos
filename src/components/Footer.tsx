
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-brand-beige">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-brand-dark">
          <p className="text-xl font-serif font-bold tracking-wider">ИРИНА СУББОТИНА</p>
          <p className="text-xs uppercase tracking-widest text-brand-muted">Косметолог с медицинским образованием</p>
        </div>
        
        <div className="flex space-x-12">
            <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">Меню</p>
                <ul className="text-xs text-brand-muted space-y-1">
                    <li><a href="#" className="hover:text-brand-gold transition-colors">Главная</a></li>
                    <li><a href="#services" className="hover:text-brand-gold transition-colors">Услуги</a></li>
                    <li><a href="#prices" className="hover:text-brand-gold transition-colors">Прайс</a></li>
                </ul>
            </div>
            <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">Связь</p>
                <ul className="text-xs text-brand-muted space-y-1">
                    <li><a href="tel:+79148959704" className="hover:text-brand-gold transition-colors">+7 914 895 97 04</a></li>
                    <li><a href="https://t.me/IrinaSubbotina2004" className="hover:text-brand-gold transition-colors">Telegram</a></li>
                </ul>
            </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs text-brand-muted">&copy; {new Date().getFullYear()} Ирина Субботина. Все права защищены.</p>
          <a href="https://it.burxan.ru" className="hover:text-brand-gold transition-colors">Разработано с заботой о вашей красоте.</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
