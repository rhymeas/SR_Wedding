import React from 'react';
import { Wine, Landmark, Mountain, Sun } from 'lucide-react';

const ThingsToDo: React.FC = () => {
  const activities = [
    {
      icon: <Landmark className="w-8 h-8 text-citron" />,
      title: "Siena City Tour",
      description: "Explore the Piazza del Campo and the magnificent Duomo. Just 20 minutes away.",
      tag: "Culture"
    },
    {
      icon: <Wine className="w-8 h-8 text-citron" />,
      title: "Chianti Wine Tasting",
      description: "Visit nearby vineyards like Castello di Ama for world-class tastings.",
      tag: "Gastronomy"
    },
    {
      icon: <Sun className="w-8 h-8 text-citron" />,
      title: "San Gimignano",
      description: "The 'Manhattan of the Middle Ages', famous for its towers and saffron.",
      tag: "Day Trip"
    },
    {
      icon: <Mountain className="w-8 h-8 text-citron" />,
      title: "Hot Air Balloon",
      description: "See the rolling hills of Tuscany from above at sunrise.",
      tag: "Adventure"
    }
  ];

  return (
    <section className="py-24 bg-creme relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
          <div className="max-w-xl">
             <span className="inline-block bg-citron-light text-forest px-3 py-1 mb-4 font-sans text-xs tracking-[0.2em] uppercase font-bold shadow-sm">Discover</span>
             <div>
                <h2 className="inline bg-citron-light text-forest px-4 py-2 box-decoration-clone font-serif text-5xl leading-tight shadow-sm">While You're Here</h2>
             </div>
          </div>
          <p className="font-sans text-forest/60 text-sm max-w-xs mt-6 md:mt-0 leading-relaxed text-right">
             Make the most of your trip with these curated experiences near Villa Cetinale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal reveal-delay-200">
          {activities.map((activity, idx) => (
            <div key={idx} className="group bg-white p-8 border border-forest/5 hover:border-citron/50 hover:shadow-lg transition-all duration-500 cursor-pointer relative overflow-hidden">
               <div className="absolute top-0 right-0 w-16 h-16 bg-citron/10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
               
               <div className="mb-6 relative z-10 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                  {activity.icon}
               </div>
               
               <span className="block text-[10px] font-bold uppercase tracking-widest text-forest/40 mb-3 group-hover:text-forest/60">
                 {activity.tag}
               </span>
               
               <h3 className="font-serif text-2xl text-forest mb-3 group-hover:text-citron-pop transition-colors">
                 {activity.title}
               </h3>
               
               <p className="font-sans text-sm text-forest/60 leading-relaxed">
                 {activity.description}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsToDo;