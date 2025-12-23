import React, { useEffect, useState } from 'react';
import { Share2, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'Susanne & Rimas | Tuscany 2025',
      text: 'We are getting married! Join us in Tuscany on July 04, 2025.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <section className="relative h-[calc(100vh-100px)] min-h-[600px] flex items-center justify-center overflow-hidden bg-creme">
      
      {/* Background Vertical Texture - The "Straights" */}
      <div className="absolute top-0 right-[15%] w-[15%] h-full bg-stripes-citron-thin opacity-60 hidden md:block" />
      <div className="absolute top-0 left-[5%] w-px h-full bg-forest/5" />
      <div className="absolute top-0 left-[25%] w-px h-full bg-forest/5" />

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full pt-12">
        
        {/* Text Side (Left) */}
        <div className="md:col-span-5 text-center md:text-left order-2 md:order-1 reveal relative">
           
           {/* Decorative Top Line */}
           <div className="w-12 h-0.5 bg-forest mb-8 mx-auto md:mx-0"></div>

           <div className="relative leading-tight">
              {/* Name 1 - Strict & Serif */}
              <h1 className="font-serif text-6xl md:text-8xl text-forest leading-none tracking-tight mb-2 relative z-10">
                <span className="bg-citron-light px-4 py-1 box-decoration-clone">Susanne</span>
              </h1>
              
              {/* Ampersand - Highlighted */}
              <div className="font-serif italic text-4xl text-forest font-light my-2 pl-2 md:pl-12 relative z-10">
                 <span className="bg-citron-light px-3 py-1 inline-block transform -rotate-3 shadow-sm">
                   &
                 </span>
              </div>

              {/* Name 2 - Italic & Flowing */}
              <h1 className="font-serif italic text-6xl md:text-8xl text-forest leading-none tracking-tight relative z-10 pl-8 md:pl-24">
                 <span className="bg-citron-light px-4 py-1 box-decoration-clone">Rimas</span>
              </h1>
              
              {/* The Pushel behind text - Softening the strict type */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pushel-citron z-0 pointer-events-none opacity-30"></div>
           </div>

           <div className="mt-12 flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start text-forest/80 font-sans tracking-[0.2em] text-xs uppercase">
              <div className="flex flex-col gap-2">
                 <span className="font-bold text-forest">Date</span>
                 <span>July 04, 2025</span>
              </div>
              <div className="w-px h-8 bg-forest/20 hidden md:block"></div>
              <div className="flex flex-col gap-2">
                 <span className="font-bold text-forest">Location</span>
                 <span>Villa Cetinale, Tuscany</span>
              </div>
              <div className="mt-4 md:mt-0 md:ml-auto">
                <button 
                  onClick={handleShare}
                  className="group relative flex items-center gap-2 border border-forest/20 px-4 py-2 hover:border-citron transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-citron/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  <div className="relative flex items-center gap-2">
                    {copied ? (
                      <>
                        <Check size={14} className="text-citron transition-all duration-300" />
                        <span className="font-bold tracking-[0.2em] text-[10px] text-forest">Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 size={14} className="group-hover:text-forest transition-colors" />
                        <span className="font-bold tracking-[0.2em] text-[10px] text-forest">Share invitation</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
           </div>
        </div>

        {/* Image Side (Right) - Straights & Pushel Translation */}
        <div className="md:col-span-7 h-[50vh] md:h-[65vh] relative order-1 md:order-2 reveal reveal-delay-200">
           
           {/* Layer 1: Vertical Stripe Panel (Strict Straight) */}
           <div className="absolute top-0 right-12 w-32 h-[90%] bg-stripes-citron hidden md:block z-0 transform translate-y-8"></div>

           {/* Layer 2: Main Image Container (Strict Box) */}
           <div className="absolute top-8 bottom-8 left-8 right-8 md:right-24 md:left-auto md:w-[65%] z-10">
              <div className="w-full h-full overflow-hidden relative border-l border-t border-forest/10 p-2">
                 <div className="w-full h-full overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop" 
                      alt="Susanne and Rimas" 
                      className="w-full h-[120%] object-cover object-center transition-transform duration-100 ease-out will-change-transform"
                      style={{ transform: `translateY(-${offset * 0.3}px)` }}
                    />
                 </div>
              </div>
           </div>

           {/* Layer 3: The Pushel Overlay (Breaking the Lines) */}
           {/* A soft, blurred element floating over the strict image edge */}
           <div className="absolute bottom-[10%] right-[15%] w-48 h-64 bg-creme/30 backdrop-blur-sm z-20 animate-float-delayed border-l border-white/20">
              <div className="absolute inset-0 pushel opacity-80"></div>
           </div>
           
           {/* Layer 4: Floating Detail (Strict Line + Pushel) */}
           <div className="absolute top-[20%] left-0 md:left-[10%] z-30 animate-float">
              <div className="relative">
                 <div className="absolute inset-0 bg-white/40 blur-xl rounded-full transform scale-150"></div>
                 <div className="relative bg-creme border border-forest/10 px-6 py-4 shadow-sm flex items-center gap-4">
                    <span className="block font-serif italic text-2xl text-forest">04.07</span>
                    <div className="h-px w-8 bg-citron"></div>
                 </div>
              </div>
           </div>

        </div>

      </div>
      
      {/* Scroll Indicator - Minimal Vertical Line */}
      <div className="absolute bottom-0 left-8 md:left-[50%] h-24 w-px bg-forest/20 z-20 overflow-hidden">
        <div className="w-full h-full bg-forest animate-slide-up" style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}></div>
      </div>
    </section>
  );
};

export default Hero;