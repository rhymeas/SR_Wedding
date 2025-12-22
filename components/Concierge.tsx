import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/gemini';
import { ChatMessage } from '../types';
import { MessageCircle, Send, X, Sparkles, Loader2 } from 'lucide-react';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Ciao! I'm the digital concierge for Susanne & Rimas. Ask me anything about the Tuscany trip, dress code, or schedule.", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(input);
      const botMessage: ChatMessage = { 
        role: 'model', 
        text: responseText || "I'm momentarily speechless. Try again?", 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (e) {
      // Error handled in service, but safety fallback
      setMessages(prev => [...prev, { role: 'model', text: "Connection error. Please try again.", timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 ${isOpen ? 'bg-forest text-creme rotate-90' : 'bg-citron text-forest'}`}
        aria-label="Open Concierge"
      >
        {isOpen ? <X size={24} /> : <Sparkles size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-[380px] h-[500px] bg-creme border border-forest/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-slide-up font-sans">
          
          {/* Header */}
          <div className="bg-forest p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-citron flex items-center justify-center text-forest">
                <Sparkles size={16} />
              </div>
              <div>
                <h3 className="text-creme font-serif text-lg leading-none">Wedding Concierge</h3>
                <span className="text-creme/60 text-xs uppercase tracking-wider">AI Assistant</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-creme-dark/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-forest text-creme rounded-tr-none' 
                      : 'bg-white text-forest border border-forest/5 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-forest/5 flex items-center gap-2">
                   <Loader2 size={16} className="animate-spin text-citron" />
                   <span className="text-xs text-forest/50">Consulting the planner...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-forest/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about dress code, travel..."
              className="flex-1 bg-creme-dark/50 border-none rounded-xl px-4 py-2 text-sm text-forest focus:outline-none focus:ring-1 focus:ring-forest/20"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-forest text-citron rounded-xl hover:bg-forest-light disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Concierge;
