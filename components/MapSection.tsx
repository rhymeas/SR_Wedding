import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="h-[60vh] min-h-[500px] w-full relative group overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-forest/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
      
      {/* Title Overlay */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20 bg-creme px-8 py-4 shadow-lg scale-reveal observed">
         <h2 className="font-serif text-2xl text-forest text-center">Villa Cetinale</h2>
         <p className="text-center font-sans text-[10px] tracking-widest uppercase text-forest/60">Sovicille, Siena</p>
      </div>

      <iframe 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        scrolling="no" 
        marginHeight={0} 
        marginWidth={0} 
        src="https://maps.google.com/maps?q=Villa%20Cetinale&t=m&z=15&output=embed&iwloc=near" 
        className="filter grayscale contrast-75 opacity-90 hover:opacity-100 hover:filter-none transition-all duration-700"
        title="Map to Villa Cetinale"
      ></iframe>
    </section>
  );
};

export default MapSection;