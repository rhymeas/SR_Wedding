import React from 'react';

const LocationDetails: React.FC = () => {
  const venueImages = [
    { 
      src: "https://images.unsplash.com/photo-1564756312411-d0b803625732?q=80&w=1000&auto=format&fit=crop", 
      alt: "The Gardens",
      description: "Baroque Statuary"
    },
    { 
      src: "https://images.unsplash.com/photo-1544143365-5f69c4568e6f?q=80&w=1000&auto=format&fit=crop", 
      alt: "The Avenue",
      description: "Cypress Lined Paths"
    },
    { 
      src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop", 
      alt: "The Villa",
      description: "17th Century Architecture"
    }
  ];

  return (
    <section id="details" className="py-24 bg-creme-dark relative overflow-hidden">
      {/* Background Texture - Vertical Lines Only */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg, #1A3C34 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 reveal relative flex flex-col items-center">
           {/* Pushel element behind header */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 pushel z-0"></div>
           
           <span className="inline-block bg-citron-light text-forest px-3 py-1 mb-4 font-sans text-xs tracking-[0.2em] uppercase font-bold relative z-10 shadow-sm">The Venue</span>
           <h2 className="inline-block bg-citron-light text-forest px-6 py-2 font-serif text-5xl md:text-6xl relative z-10 leading-tight shadow-sm">Villa Cetinale</h2>
           <p className="mt-8 text-forest/70 max-w-2xl mx-auto font-serif text-lg leading-relaxed italic relative z-10">
             "The most beautiful villa in all of Tuscany"
           </p>
        </div>

        {/* Location Gallery - Vertical Accordion Strips */}
        <div className="flex flex-col md:flex-row h-[600px] mb-20 border-y-2 border-forest/10 reveal">
          {venueImages.map((img, idx) => (
             <div 
               key={idx} 
               className="relative flex-1 group overflow-hidden border-b md:border-b-0 md:border-r border-forest/10 last:border-0 transition-all duration-700 ease-out hover:flex-[1.5]"
             >
                {/* Overlay for 'Straights' feel - darkens non-active */}
                <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                
                {/* Pushel Accent on Hover - Softens the rigid lines */}
                <div className="absolute inset-0 bg-citron/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 backdrop-blur-[2px]"></div>

                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                
                {/* Vertical Text Label */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-30 bg-gradient-to-t from-forest/80 to-transparent md:bg-none">
                  <div className="md:absolute md:bottom-8 md:left-8 md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                     <span className="block text-creme md:text-white font-sans text-[10px] tracking-[0.3em] uppercase mb-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                       {img.description}
                     </span>
                     <h3 className="text-creme md:text-white font-serif text-3xl italic">
                       {img.alt}
                     </h3>
                  </div>
                </div>
             </div>
          ))}
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto reveal">
           
           {/* Estate Card - Clean & Straight */}
           <div className="bg-creme p-8 md:p-12 shadow-sm border border-forest/5 flex flex-col justify-center relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-forest transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <h3 className="font-serif text-3xl text-forest mb-6">The Estate</h3>
              <p className="text-forest/70 leading-relaxed mb-8 font-sans text-sm">
                Built in 1680 by Cardinal Flavio Chigi for Pope Alexander VII, Villa Cetinale is renowned for its magnificent Baroque gardens and holy wood. Strict symmetries meet organic Tuscan wilderness.
              </p>
              <div className="flex gap-2 items-center text-forest/60 text-xs uppercase tracking-widest mt-auto">
                 <span className="w-2 h-2 bg-citron rounded-full"></span>
                 <span>Sovicille, Siena</span>
              </div>
           </div>

           {/* Travel Card - Vertical Stripes & Fun */}
           <div className="bg-stripes-citron p-8 md:p-12 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/90 group-hover:bg-white/95 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="font-serif text-3xl text-forest mb-6">Travel & Stay</h3>
                <p className="text-forest/70 leading-relaxed mb-8 font-sans text-sm">
                    We have reserved a block of rooms at <strong>Hotel Borgo</strong>. Shuttles will be provided to and from Villa Cetinale for all wedding events. 
                    <br/><br/>
                    For groups, we highly recommend this <a href="https://www.airbnb.ca/rooms/39980692" target="_blank" rel="noreferrer" className="font-bold underline decoration-citron decoration-2 underline-offset-4 hover:bg-citron hover:text-forest transition-all px-1">Stunning Airbnb Villa</a> nearby.
                    <br/><br/>
                    Nearest Airports: Florence (FLR) 1h 15m, Pisa (PSA) 1h 45m.
                </p>
                <div className="inline-block relative group/btn">
                    <div className="absolute inset-0 bg-citron-light transform translate-x-1 translate-y-1 transition-transform group-hover/btn:translate-x-0 group-hover/btn:translate-y-0"></div>
                    <a href="https://www.google.com/maps/place/Villa+Cetinale" target="_blank" rel="noreferrer" className="relative block border border-forest bg-creme text-forest px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-forest hover:text-creme transition-colors z-10">
                        View On Map
                    </a>
                </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default LocationDetails;