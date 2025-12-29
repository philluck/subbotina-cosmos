
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <img src="irina1.jpg" alt="Процедура" className="rounded-sm shadow-lg mt-12" />
            <img src="irina2.jpg" alt="Клиника" className="rounded-sm shadow-lg" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl font-serif text-brand-dark">Обо мне</h2>
            <div className="space-y-6 text-brand-muted leading-relaxed">
              <p>
                Я — дипломированный косметолог с медицинским образованием. В индустрии красоты мой опыт позволяет не просто проводить процедуры, а глубоко понимать физиологию кожи.
              </p>
              <p>
                Моя философия — индивидуальность. Я не использую шаблонных решений, создавая для каждого клиента персональную программу ухода. Моя гордость — безупречная репутация и сотни довольных пациентов.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-brand-rose flex items-center justify-center rounded-full text-brand-dark font-bold">1</div>
                  <div>
                    <h4 className="font-serif font-bold text-brand-dark">Индивидуальность</h4>
                    <p className="text-sm">Учет всех особенностей вашей кожи.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-brand-rose flex items-center justify-center rounded-full text-brand-dark font-bold">2</div>
                  <div>
                    <h4 className="font-serif font-bold text-brand-dark">Безопасность</h4>
                    <p className="text-sm">Только сертифицированные препараты.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
