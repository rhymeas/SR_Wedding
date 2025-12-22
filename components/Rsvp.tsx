import React, { useState, useRef } from 'react';
import { RsvpFormData } from '../types';
import { Camera, User, ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react';

const Rsvp: React.FC = () => {
  const [formData, setFormData] = useState<RsvpFormData>({
    name: '',
    email: '',
    attending: 'yes',
    dietary: '',
    guests: 1
  });
  const [guestPhoto, setGuestPhoto] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  // Dummy data for the "Live" guestbook
  const [guestbookEntries, setGuestbookEntries] = useState([
    { name: "Marco & Elena", photo: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=400&auto=format&fit=crop" },
    { name: "Sarah J.", photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop" },
    { name: "The Millers", photo: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=400&auto=format&fit=crop" },
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      if (guestPhoto) {
        setGuestbookEntries(prev => [{ name: formData.name, photo: guestPhoto }, ...prev]);
      }
      setSubmitted(true);
      setCurrentStep(1); // Reset for next time
    }, 800);
  };

  const handleNext = () => {
    if (currentStep === 1 && (!formData.name || !formData.email)) return; // Basic validation
    setCurrentStep(prev => Math.min(totalSteps, prev + 1));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGuestPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="rsvp" className="py-32 bg-forest text-creme relative overflow-hidden min-h-[900px]">
      {/* Modern ambient shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-forest-light rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-citron rounded-full blur-[100px] opacity-10"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 reveal">
        <div className="text-center mb-12">
          <p className="font-sans text-citron tracking-[0.2em] text-xs uppercase mb-4">The Favor of a Reply</p>
          <h2 className="font-serif text-6xl md:text-7xl mb-6">R.S.V.P</h2>
          <div className="w-12 h-px bg-creme/20 mx-auto"></div>
        </div>

        {submitted ? (
          <div className="max-w-md mx-auto text-center bg-forest-light/30 p-16 rounded-sm backdrop-blur-md border border-creme/10 animate-fade-in scale-reveal active shadow-2xl">
            <Sparkles className="mx-auto text-citron mb-6" size={40} />
            <h3 className="font-serif text-5xl text-creme mb-6 italic">Grazie!</h3>
            <p className="text-creme/70 font-sans text-sm leading-relaxed mb-10">
              We have received your response. We can't wait to celebrate with you under the Tuscan sun.
            </p>
            <button 
              onClick={() => { setSubmitted(false); setFormData({ ...formData, name: '', email: '' }); setGuestPhoto(null); }}
              className="text-xs font-bold uppercase tracking-widest text-citron hover:text-white transition-colors border-b border-citron pb-1"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            {/* Step Indicator */}
            <div className="flex justify-between items-center mb-12 px-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-500 ${
                    currentStep >= step 
                      ? 'bg-citron border-citron text-forest scale-110' 
                      : 'border-creme/20 text-creme/40'
                  }`}>
                    {currentStep > step ? <Check size={14} /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 md:w-32 h-px mx-4 transition-colors duration-500 ${
                      currentStep > step ? 'bg-citron' : 'bg-creme/10'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="bg-forest-light/10 p-8 md:p-12 border border-creme/5 relative overflow-hidden backdrop-blur-sm shadow-xl min-h-[400px] flex flex-col justify-between">
              
              {/* Step 1: Identity */}
              {currentStep === 1 && (
                <div className="space-y-12 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="font-serif text-3xl italic text-creme">Who are you?</h3>
                  </div>
                  
                  <div className="group relative">
                    <input 
                      required
                      type="text" 
                      name="name" 
                      id="name"
                      value={formData.name} 
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b border-creme/20 text-creme text-3xl md:text-4xl pb-4 font-serif focus:outline-none focus:border-citron transition-colors placeholder-transparent"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name" className="absolute left-0 -top-6 text-[10px] font-bold uppercase tracking-widest text-citron transition-all peer-placeholder-shown:text-creme/40 peer-placeholder-shown:top-0 peer-placeholder-shown:text-sm peer-focus:-top-6 peer-focus:text-citron peer-focus:text-[10px]">
                      Full Name
                    </label>
                  </div>

                  <div className="group relative">
                    <input 
                      required
                      type="email" 
                      name="email" 
                      id="email"
                      value={formData.email} 
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b border-creme/20 text-creme text-2xl md:text-3xl pb-4 font-serif focus:outline-none focus:border-citron transition-colors placeholder-transparent"
                      placeholder="Email"
                    />
                    <label htmlFor="email" className="absolute left-0 -top-6 text-[10px] font-bold uppercase tracking-widest text-citron transition-all peer-placeholder-shown:text-creme/40 peer-placeholder-shown:top-0 peer-placeholder-shown:text-sm peer-focus:-top-6 peer-focus:text-citron peer-focus:text-[10px]">
                      Email Address
                    </label>
                  </div>
                </div>
              )}

              {/* Step 2: Attendance */}
              {currentStep === 2 && (
                <div className="space-y-12 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="font-serif text-3xl italic text-creme">Will you join us?</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <label className={`cursor-pointer border p-8 text-center transition-all duration-300 hover:border-citron ${
                      formData.attending === 'yes' 
                        ? 'border-citron bg-citron/10' 
                        : 'border-creme/10 bg-transparent opacity-60 hover:opacity-100'
                    }`}>
                      <input 
                        type="radio" 
                        name="attending" 
                        value="yes" 
                        checked={formData.attending === 'yes'} 
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="block font-serif text-3xl mb-2">Joyfully Accepts</span>
                      <span className="text-[10px] uppercase tracking-widest text-creme/60">Can't wait!</span>
                    </label>

                    <label className={`cursor-pointer border p-8 text-center transition-all duration-300 hover:border-citron ${
                      formData.attending === 'no' 
                        ? 'border-citron bg-citron/10' 
                        : 'border-creme/10 bg-transparent opacity-60 hover:opacity-100'
                    }`}>
                      <input 
                        type="radio" 
                        name="attending" 
                        value="no" 
                        checked={formData.attending === 'no'} 
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="block font-serif text-3xl mb-2">Regretfully Declines</span>
                      <span className="text-[10px] uppercase tracking-widest text-creme/60">In spirit</span>
                    </label>
                  </div>

                  <div className={`transition-all duration-500 overflow-hidden ${formData.attending === 'yes' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="group relative pt-4">
                       <input 
                          type="number" 
                          name="guests" 
                          id="guests"
                          min="1"
                          max="5"
                          value={formData.guests} 
                          onChange={handleChange}
                          className="peer w-full bg-transparent border-b border-creme/20 text-creme text-3xl pb-2 font-serif focus:outline-none focus:border-citron transition-colors"
                        />
                        <label htmlFor="guests" className="absolute left-0 -top-2 text-[10px] font-bold uppercase tracking-widest text-citron">
                          Total Number of Guests
                        </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Details */}
              {currentStep === 3 && (
                <div className="space-y-12 animate-fade-in">
                  <div className="text-center mb-6">
                    <h3 className="font-serif text-3xl italic text-creme">Final Touches</h3>
                  </div>

                  <div className="group relative">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-citron mb-4">Dietary Requirements</label>
                    <textarea 
                      name="dietary" 
                      value={formData.dietary} 
                      onChange={handleChange}
                      rows={2}
                      className="w-full bg-white/5 border border-creme/10 p-4 text-creme text-lg focus:outline-none focus:border-citron transition-colors resize-none placeholder-creme/20"
                      placeholder="Any allergies or restrictions we should know about?"
                    />
                  </div>

                  <div className="border-t border-creme/10 pt-6">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-citron mb-4 flex items-center gap-2">
                       <Camera size={14} /> Virtual Guestbook
                    </span>
                    <div className="flex gap-6 items-center">
                       <div 
                         onClick={() => fileInputRef.current?.click()}
                         className="w-20 h-20 rounded-full border border-dashed border-creme/30 flex items-center justify-center hover:border-citron hover:bg-forest transition-all cursor-pointer overflow-hidden relative group/upload bg-forest-dark"
                       >
                          {guestPhoto ? (
                            <img src={guestPhoto} alt="Preview" className="w-full h-full object-cover" />
                          ) : (
                            <div className="text-creme/30 group-hover/upload:text-citron transition-colors">
                              <Camera size={24} />
                            </div>
                          )}
                       </div>
                       <div className="flex-1">
                         <p className="text-sm text-creme/70 mb-2 font-light">Take a selfie to say hello!</p>
                         <button 
                           type="button" 
                           onClick={() => fileInputRef.current?.click()}
                           className="text-[10px] uppercase tracking-widest border-b border-creme/30 hover:text-citron hover:border-citron transition-colors pb-1"
                         >
                           {guestPhoto ? 'Change Photo' : 'Upload Photo'}
                         </button>
                         <input 
                           type="file" 
                           ref={fileInputRef} 
                           onChange={handlePhotoUpload} 
                           accept="image/*" 
                           capture="user"
                           className="hidden" 
                         />
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="flex justify-between items-center mt-12 pt-6 border-t border-creme/5">
                {currentStep > 1 ? (
                  <button 
                    type="button" 
                    onClick={handleBack}
                    className="flex items-center gap-2 text-xs uppercase tracking-widest text-creme/60 hover:text-creme transition-colors"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : (
                  <div></div>
                )}
                
                {currentStep < 3 ? (
                  <button 
                    type="button" 
                    onClick={handleNext}
                    className="flex items-center gap-3 bg-creme text-forest px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-citron transition-all"
                  >
                    Next <ArrowRight size={16} />
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="flex items-center gap-3 bg-citron text-forest px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(220,207,0,0.3)] hover:shadow-[0_0_30px_rgba(220,207,0,0.5)]"
                  >
                    Confirm RSVP
                  </button>
                )}
              </div>

            </form>
          </div>
        )}

        {/* Guestbook Gallery Display */}
        <div className="mt-24">
           <div className="flex items-center justify-center gap-4 mb-10 opacity-60">
             <div className="h-px w-12 bg-creme"></div>
             <span className="font-serif italic text-2xl text-creme">Guestbook</span>
             <div className="h-px w-12 bg-creme"></div>
           </div>
           
           <div className="flex flex-wrap justify-center gap-6">
              {guestbookEntries.map((entry, idx) => (
                <div key={idx} className="relative group/guest animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                   <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-forest/50 group-hover/guest:border-citron transition-all duration-500 group-hover/guest:scale-110 shadow-lg">
                      <img src={entry.photo} alt={entry.name} className="w-full h-full object-cover filter grayscale sepia-[0.3] group-hover/guest:filter-none transition-all duration-500" />
                   </div>
                   <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/guest:opacity-100 transition-opacity bg-citron text-forest font-bold tracking-wider px-3 py-1 text-[9px] uppercase whitespace-nowrap z-20 shadow-md transform translate-y-2 group-hover/guest:translate-y-0 duration-300">
                     {entry.name}
                   </div>
                </div>
              ))}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-dashed border-creme/10 flex items-center justify-center text-creme/20 hover:text-citron hover:border-citron/50 transition-colors cursor-default">
                 <User size={24} />
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Rsvp;