import React from 'react';
import { Plane, Info, Phone, Wallet, Languages } from 'lucide-react';

const Registry: React.FC = () => {
  const travelTips = [
    {
      icon: <Wallet size={28} />,
      title: "Currency & Customs",
      content: "Italy uses the Euro (€). While credit cards are widely accepted, we recommend carrying some cash for small cafes and gelato stands. 'Coperto' is a standard cover charge in restaurants.",
      highlight: "Tipping is not mandatory."
    },
    {
      icon: <Plane size={28} />,
      title: "Getting Around",
      content: "We have arranged shuttles for all wedding events. For exploring Tuscany on your own, renting a car is the best option. Trains connect major cities like Florence and Siena efficiently.",
      highlight: "Drive on the right."
    },
    {
      icon: <Languages size={28} />,
      title: "Local Etiquette",
      content: "A friendly 'Buongiorno' (good morning) or 'Buonasera' (good evening) goes a long way. Dinner in Italy is typically eaten later, around 8:00 PM or 9:00 PM.",
      highlight: "Dress modestly for churches."
    },
    {
      icon: <Phone size={28} />,
      title: "Emergency Contacts",
      content: "The general emergency number in Italy is 112. For wedding-related emergencies, please contact our planner, Sofia, or use the Concierge chat on this website.",
      highlight: "Planner: +39 333 123 4567"
    }
  ];

  return (
    <section id="registry" className="py-24 bg-forest text-creme relative overflow-hidden">
      {/* Background Texture - Vertical Lines Only */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(90deg, #FDFBF7 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal">
          <span className="text-citron font-sans text-xs tracking-[0.2em] uppercase font-bold">Preparation</span>
          <div className="mt-4">
            <h2 className="inline bg-citron text-forest px-4 py-2 box-decoration-clone font-serif text-5xl leading-tight shadow-sm">
              Travel Essentials
            </h2>
          </div>
          <p className="mt-8 text-creme/70 max-w-xl mx-auto font-sans text-sm leading-relaxed">
            We want your journey to Tuscany to be as smooth as possible. Here are a few practical tips to help you prepare for your Italian adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 reveal reveal-delay-200">
          {travelTips.map((tip, idx) => (
            <div key={idx} className="group relative bg-forest-light/20 border border-creme/10 p-8 hover:bg-creme hover:text-forest transition-all duration-500 overflow-hidden min-h-[250px] flex flex-col">
               <div className="absolute top-0 right-0 w-20 h-20 bg-citron/10 rounded-bl-full transition-transform duration-500 group-hover:scale-150 origin-top-right"></div>
               
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full border border-creme/20 group-hover:border-forest/20 text-citron group-hover:text-forest transition-colors">
                      {tip.icon}
                    </div>
                    <h3 className="font-serif text-2xl">{tip.title}</h3>
                  </div>
                  
                  <p className="font-sans text-sm opacity-80 leading-relaxed mb-6 flex-grow">
                    {tip.content}
                  </p>
                  
                  <div className="inline-block border-l-2 border-citron pl-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-citron group-hover:text-forest/60 transition-colors">
                      {tip.highlight}
                    </span>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Registry;