import React from 'react';
import { Plane, Info, Phone, Wallet, Languages, Globe, MapPin } from 'lucide-react';

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

  const airports = [
    { code: "FLR", name: "Florence Peretola", time: "1h 15m", note: "Closest option. Lufthansa, Air Dolomiti, Vueling." },
    { code: "PSA", name: "Pisa International", time: "1h 45m", note: "Great for budget carriers (Ryanair, EasyJet)." },
    { code: "FCO", name: "Rome Fiumicino", time: "3h 00m", note: "Best for long-haul direct flights (US/Canada)." },
    { code: "BLQ", name: "Bologna Marconi", time: "2h 00m", note: "Good alternative hub with train connections." }
  ];

  const specificRoutes = [
    { 
      from: "Germany", 
      via: "Frankfurt / Munich", 
      detail: "Frankfurt (FRA) offers direct flights to Florence (Lufthansa). From Hamburg (HAM) or Leipzig (LEJ), connect via Frankfurt or Munich. Eurowings serves Pisa/Bologna seasonally." 
    },
    { 
      from: "Spain", 
      via: "Madrid / Barcelona", 
      detail: "Excellent direct connections available from Madrid (MAD) and Barcelona (BCN) to Florence, Pisa, or Bologna via Vueling and Iberia." 
    },
    { 
      from: "Montpellier", 
      via: "Paris / Nice", 
      detail: "Flights via Paris (CDG/ORY) are standard. Alternatively, take a scenic 7-hour drive along the coast via Genoa, or train via Milan." 
    },
    { 
      from: "Canada West Coast", 
      via: "Vancouver (YVR)", 
      detail: "Connect via London (LHR), Frankfurt (FRA), or Munich (MUC). Flying into Rome (FCO) often offers the best schedules, followed by a high-speed train to Florence." 
    },
    { 
      from: "Canada Alberta", 
      via: "Calgary (YYC)", 
      detail: "KLM via Amsterdam (AMS) or Lufthansa via Frankfurt (FRA) are your best bets. WestJet routes via London or Paris also work well to reach Italy." 
    },
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

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 gap-8 reveal reveal-delay-200 mb-24">
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

        {/* Detailed Logistics Section */}
        <div className="border-t border-creme/10 pt-20 reveal">
            <div className="text-center mb-16">
                 <h3 className="font-serif text-4xl mb-6 text-citron-light">Getting to Tuscany</h3>
                 <p className="max-w-2xl mx-auto text-creme/70 font-sans text-sm">
                   Villa Cetinale is located in Sovicille, just southwest of Siena. Here is a guide to help you navigate your way.
                 </p>
            </div>

            {/* Airports Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
               {airports.map((apt, idx) => (
                  <div key={idx} className="bg-creme/5 border border-creme/10 p-6 text-center rounded-sm hover:bg-creme/10 transition-colors group">
                     <span className="block text-3xl font-serif text-citron mb-2 group-hover:scale-110 transition-transform">{apt.code}</span>
                     <h4 className="font-bold text-xs md:text-sm uppercase tracking-wide mb-2 text-creme/90">{apt.name}</h4>
                     <div className="flex items-center justify-center gap-2 text-citron/80 text-[10px] uppercase tracking-widest mb-3">
                       <MapPin size={12} /> {apt.time}
                     </div>
                     <p className="text-[10px] text-creme/50 leading-tight">{apt.note}</p>
                  </div>
               ))}
            </div>

            {/* Specific Routes List */}
            <div className="bg-forest-light/20 border border-creme/5 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-citron"></div>
                
                <h4 className="font-serif text-3xl mb-10 flex items-center gap-3 text-creme">
                   <Globe className="text-citron" size={28} /> 
                   <span>Flight Connections</span>
                </h4>
                
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                   {specificRoutes.map((route, i) => (
                      <div key={i} className="group">
                         <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 border-b border-creme/10 pb-2 group-hover:border-citron/50 transition-colors">
                            <span className="font-bold text-sm uppercase tracking-widest text-citron mb-1 md:mb-0">{route.from}</span>
                            <span className="text-[10px] text-creme/40 font-mono flex items-center gap-1">
                               <Plane size={10} className="transform rotate-[-45deg]" /> 
                               {route.via}
                            </span>
                         </div>
                         <p className="text-creme/70 text-sm leading-relaxed group-hover:text-creme transition-colors">
                            {route.detail}
                         </p>
                      </div>
                   ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Registry;