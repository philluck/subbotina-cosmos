
import React, { useState } from 'react';
import { getSkinAdvice } from '../services/gemini';

const AIAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const result = await getSkinAdvice(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 shadow-2xl rounded-sm overflow-hidden border border-brand-rose flex flex-col max-h-[500px]">
          <div className="bg-brand-dark text-white p-4 flex justify-between items-center">
            <h4 className="font-serif">AI-Консультант</h4>
            <button onClick={() => setIsOpen(false)} className="text-xl">&times;</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm leading-relaxed">
            {response ? (
              <div className="bg-brand-beige p-3 rounded-sm text-brand-dark whitespace-pre-wrap">
                {response}
              </div>
            ) : (
              <p className="text-brand-muted italic text-center py-4">
                Задайте вопрос о процедурах или уходе за кожей, и наш ассистент ответит вам на основе знаний Ирины.
              </p>
            )}
            {loading && <div className="text-center animate-pulse text-brand-gold font-bold">Думаю...</div>}
          </div>
          <form onSubmit={handleAsk} className="p-4 border-t border-brand-beige flex">
            <input 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Как убрать сухость кожи?"
              className="flex-1 text-sm outline-none border-b border-gray-200 focus:border-brand-gold py-1"
            />
            <button disabled={loading} type="submit" className="ml-2 text-brand-gold font-bold uppercase text-xs">Спросить</button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-brand-gold text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        </button>
      )}
    </div>
  );
};

export default AIAdvisor;
