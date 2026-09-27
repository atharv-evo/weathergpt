import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../components/chat/ChatMessage';
import { chatPageSuggestions, initialMessages, mockResponses } from '../data/chatData';
import { queryWeatherGPT } from '../services/weatherApi';

export default function AskWeatherGPT() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  const hasStarted = messages.length > 0;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text) => {
    if (!text.trim()) return;
    
    const userMsg = { id: Date.now(), role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const result = await queryWeatherGPT(text);

    const aiMsg = { id: Date.now() + 1, role: 'assistant', ...result.response };
    setMessages(prev => [...prev, aiMsg]);
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-3xl mx-auto w-full relative">
      {!hasStarted ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center mt-[-10vh]">
          <div className="bg-blue-50 p-4 rounded-full mb-6">
            <Sparkles size={32} className="text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold text-text mb-3">Ask WeatherGPT</h1>
          <p className="text-text-secondary mb-10 max-w-md">
            Ask anything about current weather, long-term climate trends, or specific forecasts.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
            {chatPageSuggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(suggestion)}
                className="border border-border bg-white rounded-full px-4 py-2 text-sm text-text-secondary hover:text-text hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 pb-24">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChatMessage message={msg} />
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles size={16} className="text-primary" />
                  </div>
                  <div className="bg-white border border-border shadow-sm rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1 h-[46px]">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto flex items-end gap-2 bg-white border border-border rounded-2xl shadow-sm p-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
          <button className="p-3 text-text-secondary hover:text-text rounded-xl hover:bg-gray-50 transition-colors">
            <Mic size={20} />
          </button>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend(input);
              }
            }}
            placeholder="Ask WeatherGPT..."
            className="flex-1 max-h-32 min-h-[44px] py-3 bg-transparent border-none outline-none resize-none text-text text-sm"
            rows={1}
          />
          <button 
            onClick={() => handleSend(input)}
            disabled={!input.trim()}
            className="p-3 bg-primary text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-primary transition-colors flex-shrink-0"
          >
            <Send size={18} />
          </button>
        </div>
        <div className="text-center mt-2 text-xs text-text-secondary">
          WeatherGPT can make mistakes. Check important information.
        </div>
      </div>
    </div>
  );
}
