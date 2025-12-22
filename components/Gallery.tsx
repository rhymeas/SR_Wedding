import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<{src: string, alt: string} | null>(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1623157876802-0e86b02a2468?q=80&w=1500", alt: "Tulle & Lace" },
    { src: "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1500", alt: "The Long Table" },
    { src: "https://images.unsplash.com/photo-1585598686524-77e7740523fc?q=80&w=1500", alt: "Fresh Lemons" },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1500", alt: "Florals" },
    { src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=1500", alt: "Details" },
    { src: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1500", alt: "Celebration" },
  ];

  // Custom cubic easing for smoother, more elegant scroll feel
  const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const scrollToPosition = (target: number, duration: number = 800) => {
    if (!scrollRef.current) return;
    const element = scrollRef.current;
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      if (timeElapsed < duration) {
        const progress = easeInOutCubic(timeElapsed / duration);
        element.scrollLeft = start + change * progress;
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollLeft = target;
      }
    };
    requestAnimationFrame(animateScroll);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll('.gallery-card');
    
    if (cards[index]) {
       const card = cards[index] as HTMLElement;
       // Calculate center position: card offset - half container + half card
       const scrollLeft = card.offsetLeft - (container.clientWidth / 2) + (card.clientWidth / 2);
       scrollToPosition(scrollLeft);
       setActiveIndex(index);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
      const newIndex = direction === 'left' 
        ? Math.max(0, activeIndex - 1) 
        : Math.min(images.length - 1, activeIndex + 1);
      scrollToIndex(newIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scroll('left');
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scroll('right');
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setLightboxImage(images[activeIndex]);
    }
  };

  // Intersection Observer to track active slide
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Read data-index to get the correct index
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
                setActiveIndex(index);
            }
        }
      });
    }, { root: container, threshold: 0.6 });

    const cards = container.querySelectorAll('.gallery-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [images.length]);

  return (
    <section id="gallery" className="py-24 bg-creme overflow-hidden relative group/section">
      
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[60] bg-forest/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-creme/60 hover:text-citron transition-colors p-2"
            onClick={() => setLightboxImage(null)}
            aria-label="Close Lightbox"
          >
            <X size={32} />
          </button>
          
          <div className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
             <img 
               src={lightboxImage.src} 
               alt={lightboxImage.alt} 
               className="max-h-[80vh] w-auto object-contain shadow-2xl border border-creme/10"
             />
             <div className="mt-6 text-center">
                <span className="text-citron font-sans text-xs tracking-[0.2em] uppercase block mb-2">Moment</span>
                <h3 className="text-creme font-serif text-3xl italic">{lightboxImage.alt}</h3>
             </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12 reveal">
           <span className="h-16 w-px bg-forest/20 mb-6"></span>
           <h2 className="font-serif text-4xl text-forest">Moments of Wonder</h2>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full group/controls">
        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          disabled={activeIndex === 0}
          className="hidden md:block absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-40 bg-creme/90 backdrop-blur-md p-4 rounded-full text-forest border border-forest/10 shadow-xl hover:bg-forest hover:text-citron transition-all duration-500 opacity-0 group-hover/controls:opacity-100 hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => scroll('right')}
          disabled={activeIndex === images.length - 1}
          className="hidden md:block absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-40 bg-creme/90 backdrop-blur-md p-4 rounded-full text-forest border border-forest/10 shadow-xl hover:bg-forest hover:text-citron transition-all duration-500 opacity-0 group-hover/controls:opacity-100 hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>

        {/* Scroll Track */}
        <div 
          ref={scrollRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="flex overflow-x-auto gap-4 px-4 md:px-12 pb-8 snap-x snap-mandatory scrollbar-hide focus:outline-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, idx) => (
            <div 
              key={idx} 
              data-index={idx}
              onClick={() => setLightboxImage(img)}
              className="gallery-card flex-none w-[85vw] md:w-[40vw] lg:w-[30vw] h-[60vh] md:h-[500px] relative overflow-hidden snap-center group/card scale-reveal observed rounded-sm cursor-pointer"
            >
              {/* Image with Lazy Loading & Zoom */}
              <img 
                src={img.src} 
                alt={img.alt}
                loading="lazy" 
                className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-[1.5s] ease-out will-change-transform" 
              />
              
              {/* View Icon Hint */}
              <div className="absolute top-4 right-4 z-30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 text-white/80 drop-shadow-md">
                 <Maximize2 size={20} />
              </div>
              
              {/* Dark Overlay - Fades in on hover */}
              <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 ease-out z-10 backdrop-blur-[2px]"></div>
              
              {/* Text Reveal - Slides up on hover */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="transform translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-700 ease-out flex flex-col items-center">
                   <span className="text-citron font-sans text-[10px] tracking-[0.3em] uppercase mb-3 opacity-80">0{idx + 1}</span>
                   <span className="text-creme font-serif italic text-4xl drop-shadow-lg tracking-wide">{img.alt}</span>
                   <div className="w-12 h-px bg-creme/60 mt-4 transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700 delay-100"></div>
                </div>
              </div>

              {/* Animated Border Overlay */}
              <div className="absolute inset-0 border border-creme/10 z-30 pointer-events-none transition-all duration-700 ease-out group-hover/card:border-creme/30 group-hover/card:inset-4 group-hover/card:border-2"></div>
            </div>
          ))}
          {/* Spacer for end padding */}
          <div className="w-4 md:w-8 flex-none"></div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-4">
           {images.map((_, idx) => (
             <button
               key={idx}
               onClick={() => scrollToIndex(idx)}
               aria-label={`Go to slide ${idx + 1}`}
               className={`transition-all duration-500 rounded-full ${
                 idx === activeIndex 
                   ? 'w-8 h-1 bg-forest' 
                   : 'w-1 h-1 bg-forest/20 hover:bg-forest/40 hover:scale-150'
               }`}
             />
           ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;