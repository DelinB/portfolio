import { useState, useRef, useEffect } from 'react';

// --- SMART RESPONSE LOGIC ---
const getBotResponse = (userText) => {
  const lower = userText.toLowerCase();
  
  if (lower.includes('technolog') || lower.includes('stack') || lower.includes('react')) {
    return { text: "My core stack consists of React, Next.js, TypeScript, and Tailwind CSS, deployed primarily on Vercel.", showForm: false };
  }
  if (lower.includes('hire') || lower.includes('freelance') || lower.includes('price') || lower.includes('cost')) {
    return { text: "I am currently accepting new clients. Please provide your details below, and I will share my rate card and availability.", showForm: true };
  }
  if (lower.includes('project') || lower.includes('work') || lower.includes('portfolio')) {
    return { text: "My case studies are available in the main portfolio section above. Feel free to ask about any specific project.", showForm: false };
  }
  if (lower.includes('contact') || lower.includes('email') || lower.includes('message') || lower.includes('reach')) {
    return { text: "To get in touch, please fill out the contact form below. I typically respond within 24 hours.", showForm: true };
  }
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return { text: "Hello. How can I assist you today? You can ask about my tech stack, availability, or request contact.", showForm: false };
  }
  
  return { text: "I didn't quite catch that. You can ask about my work, or type 'contact' to reach out directly.", showForm: false };
};

export default function ChatWidget() {
  const [chatState, setChatState] = useState('idle');
  const [messages, setMessages] = useState([
    { id: 0, role: 'bot', text: "Hello. I am an assistant for this portfolio. Ask a question, or type 'contact' to reach out." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const chatEndRef = useRef(null);
  const windowRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isBotTyping, showContactForm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (windowRef.current && !windowRef.current.contains(event.target) && chatState !== 'idle') {
        setChatState('idle');
        setTimeout(() => setShowContactForm(false), 300);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [chatState]);

  const handleSendText = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isBotTyping) return;

    const userMsg = { id: Date.now(), role: 'user', text: inputValue.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsBotTyping(true);

    await new Promise(res => setTimeout(res, 600 + Math.random() * 400));

    const response = getBotResponse(userMsg.text);
    setMessages(prev => [...prev, { id: Date.now() + 1, role: 'bot', text: response.text }]);
    setIsBotTyping(false);

    if (response.showForm) {
      setTimeout(() => setShowContactForm(true), 300);
    }
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("from_name", "Portfolio Contact");
    formData.append("subject", "New Portfolio Message");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      
      if (data.success) {
        setMessages(prev => [...prev, { id: Date.now(), role: 'system', text: "Message transmitted successfully." }]);
        event.target.reset();
        setShowContactForm(false);
      } else {
        setMessages(prev => [...prev, { id: Date.now(), role: 'system', text: "Transmission failed. Please try again." }]);
        setShowContactForm(false);
      }
    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now(), role: 'system', text: "Network error. Check connection." }]);
      setShowContactForm(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        /* Native App Scrollbar Hide */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.5); opacity: 0; } }
        @keyframes dot-bounce { 0%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-4px); } }
        .animate-pulse-ring { animation: pulse-ring 2.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .dot-typing span { display: inline-block; width: 5px; height: 5px; border-radius: 50%; background: #cbd5e1; animation: dot-bounce 1.4s infinite ease-in-out both; }
        .dot-typing span:nth-child(1) { animation-delay: -0.32s; }
        .dot-typing span:nth-child(2) { animation-delay: -0.16s; }
      `}</style>

    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4" ref={windowRef}>
      
      {/* --- CHAT WINDOW --- */}
      <div className={`w-[380px] h-[520px] bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-slate-200/60 overflow-hidden transition-all duration-300 ease-out origin-bottom-right flex flex-col
        ${chatState === 'idle' ? 'scale-0 opacity-0 translate-y-2 pointer-events-none' : 'scale-100 opacity-100 translate-y-0 pointer-events-auto'}
      `}>
        
        {/* Header - Sleek Dark */}
        <div className="bg-slate-900 px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
              <svg className="w-4 h-4 text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
            </div>
            <div>
              <p className="text-sm font-medium text-white tracking-tight">Support Assistant</p>
              <p className="text-[11px] text-slate-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                Online
              </p>
            </div>
          </div>
          <button onClick={() => { setChatState('idle'); setTimeout(() => setShowContactForm(false), 300); }} className="text-slate-500 hover:text-slate-300 transition-colors" aria-label="Close chat">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Chat Area - Clean & Minimalist */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 bg-slate-50/50 scrollbar-hide">
          
          {messages.map((msg) => (
            
            // System Messages (Success/Error)
            msg.role === 'system' ? (
              <div key={msg.id} className="flex justify-center pt-2">
                <p className="text-[11px] text-slate-400 font-medium tracking-wide bg-slate-100 px-3 py-1 rounded-full">
                  {msg.text}
                </p>
              </div>
            ) : (
              // User / Bot Messages
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3.5 py-2.5 text-[13px] leading-relaxed
                  ${msg.role === 'user' 
                    ? 'bg-slate-900 text-slate-100 rounded-2xl rounded-br-md' 
                    : 'bg-white text-slate-600 border border-slate-200/80 rounded-2xl rounded-bl-md shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            )
          ))}

          {/* Minimal Typing Indicator */}
          {isBotTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200/80 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                <div className="dot-typing flex gap-1.5">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* --- BOTTOM INPUT AREA --- */}
        <div className="p-3 border-t border-slate-200/60 bg-white flex-shrink-0">
          
          {/* Text Chat Input */}
          {!showContactForm && (
            <form onSubmit={handleSendText} className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                disabled={isBotTyping}
                className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[13px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all disabled:opacity-50"
              />
              <button 
                type="submit" 
                disabled={!inputValue.trim() || isBotTyping}
                className="w-10 h-10 bg-slate-900 hover:bg-slate-800 text-white rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:hover:bg-slate-900 active:scale-95 flex-shrink-0"
              >
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" /></svg>
              </button>
            </form>
          )}

          {/* Interactive Contact Form */}
          {showContactForm && (
            <form onSubmit={onSubmitForm} className="space-y-2 transition-all duration-300">
              <div className="flex gap-2">
                <input type="text" name="name" required placeholder="Full Name" className="w-1/2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all" />
                <input type="email" name="email" required placeholder="Email Address" className="w-1/2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all" />
              </div>
              <div className="flex gap-2">
                <input type="text" name="message" required placeholder="How can I help you?" className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all" />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-[13px] font-medium transition-all flex-shrink-0 flex items-center gap-1.5 disabled:opacity-50 active:scale-95"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-slate-600 border-t-slate-200 rounded-full animate-spin"></div>
                  ) : (
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                  )}
                </button>
              </div>
              <button 
                type="button" 
                onClick={() => setShowContactForm(false)}
                className="text-[11px] text-slate-400 hover:text-slate-600 transition-colors w-full text-center pt-1 font-medium tracking-wide uppercase"
              >
                Back to chat
              </button>
            </form>
          )}
        </div>

      </div>

      {/* --- FLOATING TRIGGER --- */}
      <div className="relative">
        {chatState === 'idle' && (
          <span className="absolute inset-0 w-12 h-12 bg-slate-900 rounded-full animate-pulse-ring"></span>
        )}
        <button 
          onClick={() => setChatState(chatState === 'idle' ? 'open' : 'idle')} 
          className={`relative w-12 h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg shadow-slate-900/20 transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-slate-200 ${chatState !== 'idle' ? 'scale-0' : 'scale-100'}`} 
          aria-label="Open Chat"
        >
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
        </button>
      </div>

    </div>
    </>
  );
}