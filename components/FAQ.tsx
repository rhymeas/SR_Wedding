import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the dress code?",
      answer: "For the Wedding Day: Black Tie Optional. We ask that men wear tuxedos or dark suits and women wear evening gowns or formal cocktail dresses. For the Welcome Aperitivo: Smart Casual (Linens, sundresses). For the Brunch: Pool Chic."
    },
    {
      question: "Are children invited?",
      answer: "We love your little ones, but our wedding will be an adults-only affair to allow all our guests to relax and enjoy the celebration. We thank you for your understanding."
    },
    {
      question: "How do I get to the venue?",
      answer: "We will be providing shuttle transportation from Hotel Borgo to Villa Cetinale for all wedding events. If you are driving, there is parking available at the Villa, but we recommend using the shuttle so you can enjoy the local wines."
    },
    {
      question: "What will the weather be like?",
      answer: "July in Tuscany is typically warm and sunny. Expect daytime highs around 30°C (86°F) and pleasant evenings around 20°C (68°F). The ceremony and aperitivo will be outdoors, while dinner will be in a courtyard."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-creme relative overflow-hidden">
      {/* Background Texture - Vertical Lines Only */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg, #1A3C34 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
           <span className="inline-block bg-citron-light text-forest px-3 py-1 mb-4 font-sans text-xs tracking-[0.2em] uppercase font-bold shadow-sm">Information</span>
           <div>
              <h2 className="inline bg-citron-light text-forest px-4 py-2 box-decoration-clone font-serif text-5xl leading-tight shadow-sm">Common Questions</h2>
           </div>
        </div>

        <div className="space-y-4 reveal reveal-delay-200">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-forest/10 bg-white transition-all duration-500 ${openIndex === idx ? 'shadow-lg' : 'hover:border-forest/30'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-serif text-2xl text-forest transition-colors ${openIndex === idx ? 'text-forest' : 'text-forest/80'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-all duration-300 ${openIndex === idx ? 'bg-citron text-forest rotate-180' : 'bg-forest/5 text-forest/40'}`}>
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 font-sans text-forest/70 leading-relaxed text-sm border-t border-dashed border-forest/10 mt-2">
                   {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;