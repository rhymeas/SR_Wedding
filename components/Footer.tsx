import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest py-12 text-center text-creme/40 border-t border-creme/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
         <h2 className="font-serif text-2xl text-creme">Susanne & Rimas</h2>
         <p className="font-sans text-xs tracking-widest uppercase">Villa Cetinale, Tuscany</p>
         <div className="flex gap-4">
           <a href="#" className="hover:text-citron transition-colors text-sm">Instagram</a>
           <a href="#" className="hover:text-citron transition-colors text-sm">Registry</a>
           <a href="#" className="hover:text-citron transition-colors text-sm">Contact</a>
         </div>
         <p className="text-[10px] mt-8">© 2025 S&R Wedding. Made with Love & AI.</p>
      </div>
    </footer>
  );
};

export default Footer;
