import React from 'react';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-32 bg-creme relative overflow-hidden">
      
      {/* Background Stripe Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stripes-citron opacity-20 -z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1 reveal bg-creme/90 backdrop-blur-sm p-8 md:p-12 border-l-2 border-forest/10">
            <span className="inline-block bg-citron-light text-forest px-3 py-1 font-serif italic text-xl mb-6 shadow-sm">Our Journey</span>
            <div className="mb-8">
               <h2 className="inline bg-citron-light text-forest px-3 py-1 box-decoration-clone font-serif text-5xl md:text-6xl leading-tight shadow-sm">
                Six years,<br/>
                One Adventure.
               </h2>
            </div>
            <div className="space-y-6">
              <p className="font-sans text-forest/70 leading-relaxed">
                It started with a chance meeting in a London coffee shop and led to adventures across three continents. We've hiked the Andes, sailed the Mediterranean, and built a life we love in between.
              </p>
              <p className="font-sans text-forest/70 leading-relaxed">
                Now, we are inviting you to join us in our favorite place on earth, Tuscany, to celebrate our next chapter. We envision a weekend of great food, wine, laughter, and love under the Tuscan sun.
              </p>
            </div>
          </div>

          {/* Collage */}
          <div className="order-1 md:order-2 relative h-[600px] reveal reveal-delay-200">
             
             {/* Main Image with Pushel overlay */}
             <div className="absolute top-0 right-0 w-3/4 h-3/4 z-10 overflow-hidden shadow-xl group">
                <div className="absolute inset-0 bg-forest/5 group-hover:bg-transparent transition-colors z-20"></div>
                <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Couple" />
             </div>
             
             {/* Secondary Image - Feathery/Tulle Texture */}
             <div className="absolute bottom-0 left-0 w-3/5 h-3/5 z-20 overflow-hidden border-8 border-creme shadow-lg">
                <img src="https://images.unsplash.com/photo-1583995026937-29653db38308?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Detail" />
             </div>

             {/* Soft Feathery Orb */}
             <div className="absolute top-1/2 left-1/4 w-48 h-48 pushel rounded-full z-30 animate-pulse pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;