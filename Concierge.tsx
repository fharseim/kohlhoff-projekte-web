import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/gemini';
import { MessageSquare, X, Send } from 'lucide-react';

export const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Willkommen bei Kohlhoffprojekte. Wie kann ich Ihnen behilflich sein?', timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(messages.concat(userMsg), input);
    
    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-white text-luxury-text border border-luxury-border shadow-2xl hover:bg-luxury-gold hover:text-white transition-all duration-300 group ${isOpen ? 'hidden' : 'flex'}`}
      >
        <span className="uppercase tracking-widest text-xs font-semibold">Concierge</span>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </button>

      {/* Chat Interface */}
      <div 
        className={`fixed bottom-0 right-0 md:bottom-8 md:right-8 z-50 w-full md:w-[400px] h-[500px] bg-luxury-bg border border-luxury-border shadow-2xl flex flex-col transition-all duration-500 transform ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-luxury-border bg-white">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-luxury-gold rotate-45"></div>
                <h3 className="font-serif text-luxury-text tracking-wide">Kohlhoff Concierge</h3>
            </div>
            <button onClick={toggleChat} className="text-gray-400 hover:text-luxury-text">
                <X size={20} />
            </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/50">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 text-sm font-light leading-relaxed ${
                        msg.role === 'user' 
                        ? 'bg-luxury-text text-white' 
                        : 'bg-white text-luxury-text border border-luxury-border'
                    }`}>
                        {msg.text}
                    </div>
                </div>
            ))}
            {isLoading && (
                 <div className="flex justify-start">
                    <div className="bg-white p-4 border border-luxury-border flex gap-1">
                        <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-luxury-border">
            <div className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Fragen Sie nach unseren Projekten..."
                    className="w-full bg-luxury-bg border-b border-luxury-border text-luxury-text p-3 pr-10 focus:outline-none focus:border-luxury-gold placeholder-gray-400 font-light text-sm transition-colors"
                />
                <button 
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-luxury-gold hover:text-luxury-text disabled:opacity-50 transition-colors"
                >
                    <Send size={18} />
                </button>
            </div>
        </form>
      </div>
    </>
  );
};