import React from 'react';
import { ITINERARY } from '../constants';

const Events: React.FC = () => {
  return (
    <section id="itinerary" className="py-32 bg-forest text-creme relative overflow-hidden">
      {/* Background Texture - Vertical Lines Only */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(90deg, #FDFBF7 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 reveal">
          <span className="text-citron font-sans text-xs tracking-[0.2em] uppercase font-bold">The Weekend</span>
          <h2 className="font-serif text-6xl mt-4 mb-6 text-creme">Itinerary</h2>
          <div className="w-px h-16 bg-citron/50 mx-auto mt-8"></div>
        </div>

        <div className="relative space-y-24">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-creme/10 transform md:-translate-x-1/2"></div>

          {ITINERARY.map((event, index) => (
            <div key={event.id} className="relative pl-12 md:pl-0 reveal group">
              {/* Timeline Dot */}
              <div className="absolute top-2 left-[-5px] md:left-1/2 md:-ml-[5px] w-[10px] h-[10px] bg-forest border-2 border-citron rounded-full z-20 transition-transform duration-500 group-hover:scale-150 group-hover:bg-citron"></div>
              
              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Time Display (Opposite side on Desktop) */}
                <div className={`hidden md:block w-[45%] py-1 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                   <span className="font-sans text-sm tracking-[0.2em] text-citron font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                     {event.time}
                   </span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  {/* Mobile Time */}
                  <div className="md:hidden font-sans text-xs tracking-widest text-citron mb-2">{event.time}</div>
                  
                  <div className="transition-all duration-500 group-hover:-translate-y-1">
                    <h3 className="font-serif text-4xl mb-3 text-creme group-hover:text-citron-light transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <div className={`inline-block border border-creme/20 px-3 py-1 mb-4 rounded-sm ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                      <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-creme/60 group-hover:text-creme transition-colors">
                          {event.location}
                      </p>
                    </div>
                    
                    <p className="font-sans text-creme/60 leading-relaxed text-sm max-w-md ml-0 md:ml-auto">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* End Ornament */}
        <div className="flex justify-center mt-24">
           <div className="w-2 h-2 bg-citron rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Events;