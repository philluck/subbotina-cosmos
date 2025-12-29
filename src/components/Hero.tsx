
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-beige">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-rose/30 skew-x-12 transform origin-right -z-10 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1 bg-brand-rose text-brand-dark text-xs font-semibold tracking-widest uppercase rounded-full">
              Медицинский подход к красоте
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight text-brand-dark">
              Комплексный уход <br />
              <span className="italic">за вашей красотой</span>
            </h1>
            <p className="text-lg text-brand-muted max-w-lg leading-relaxed">
              Меня зовут Ирина Субботина. Я косметолог с медицинским образованием. Мой подход сочетает глубокие знания медицины и современные техники для совершенства вашей кожи.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 bg-brand-dark text-white rounded-none hover:bg-black transition-all text-center tracking-widest uppercase text-sm">
              Записаться на консультацию
            </a>
            <a href="#services" className="px-8 py-4 border border-brand-dark text-brand-dark rounded-none hover:bg-brand-dark hover:text-white transition-all text-center tracking-widest uppercase text-sm">
              Наши услуги
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
            <img 
              src="irina.jpg" 
              alt="Ирина Субботина" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-8 shadow-xl hidden md:block">
            <p className="font-serif text-2xl italic text-brand-dark">"Красота — это <br/> здоровье кожи"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
