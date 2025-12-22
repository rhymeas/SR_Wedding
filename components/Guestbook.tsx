import React, { useState } from 'react';
import { Send, Heart } from 'lucide-react';

interface Entry {
  id: number;
  name: string;
  message: string;
  date: string;
}

const Guestbook: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([
    { id: 1, name: "Grandma Rose", message: "Can't wait to see you both walk down the aisle!", date: "2 days ago" },
    { id: 2, name: "Tom & Jerry", message: "Booking our tickets now! TUSCANY BABY!", date: "1 week ago" }
  ]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    
    const newEntry = {
      id: Date.now(),
      name,
      message,
      date: "Just now"
    };
    
    setEntries([newEntry, ...entries]);
    setName('');
    setMessage('');
  };

  return (
    <section className="py-24 bg-forest-light/10 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <Heart className="mx-auto text-citron mb-4 animate-pulse" size={24} />
          <h2 className="font-serif text-4xl text-forest">Leave a Note</h2>
          <p className="text-forest/60 font-sans text-sm mt-4 tracking-wide uppercase">Share your excitement with the couple</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
           {/* Form */}
           <div className="reveal">
              <form onSubmit={handleSubmit} className="bg-white p-8 border border-forest/5 shadow-sm space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-citron to-forest"></div>
                
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-forest/60 mb-2">From</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-creme/50 border-b border-forest/10 p-3 font-serif text-xl text-forest focus:outline-none focus:border-citron transition-colors placeholder-forest/20"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-forest/60 mb-2">Message</label>
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Write something sweet..."
                    className="w-full bg-creme/50 border-b border-forest/10 p-3 font-sans text-sm text-forest focus:outline-none focus:border-citron transition-colors resize-none placeholder-forest/20"
                  />
                </div>

                <button type="submit" className="w-full bg-forest text-creme py-4 text-xs font-bold uppercase tracking-widest hover:bg-citron hover:text-forest transition-colors flex items-center justify-center gap-2 group">
                   Send Love <Send size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
           </div>

           {/* List */}
           <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 scrollbar-hide reveal reveal-delay-200">
             {entries.map((entry) => (
               <div key={entry.id} className="bg-white p-6 border-l-2 border-citron shadow-sm animate-fade-in">
                 <p className="font-serif italic text-lg text-forest mb-3">"{entry.message}"</p>
                 <div className="flex justify-between items-center">
                   <span className="font-sans text-xs font-bold text-forest uppercase tracking-wider">{entry.name}</span>
                   <span className="font-sans text-[10px] text-forest/40">{entry.date}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;