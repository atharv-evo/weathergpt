import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Mic, ArrowUp } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { mockResponses, suggestedQuestions } from '../../data/chatData';
import { queryWeatherGPT } from '../../services/weatherApi';

export function WeatherGPTChat({ compact = false }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I am WeatherGPT. Ask me anything about the weather, forecasts, or alerts for your location.',
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const newUserMsg = { role: 'user', content: text, timestamp: Date.now() };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    const result = await queryWeatherGPT(text);

    setMessages(prev => [
      ...prev,
      { role: 'assistant', ...result.response, timestamp: Date.now() }
    ]);
    setIsTyping(false);
  };

  const displayedQuestions = compact ? suggestedQuestions.slice(0, 3) : suggestedQuestions;

  return (
    <div className={`bg-white rounded-xl border border-border overflow-hidden flex flex-col ${compact ? 'h-[400px]' : 'h-full'}`}>
      <div className="p-4 border-b border-border flex items-center gap-2">
        <div className="bg-primary/10 p-1.5 rounded-lg text-primary">
          <Sparkles size={18} />
        </div>
        <div>
          <div className="font-semibold text-text text-sm">WeatherGPT</div>
          <div className="text-xs text-text-secondary">Ask anything about the weather</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-white border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-border bg-white">
        <div className="flex flex-wrap gap-2 mb-3">
          {displayedQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="text-xs bg-gray-50 border border-border px-3 py-1.5 rounded-full text-text-secondary hover:bg-gray-100 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
            placeholder="Ask WeatherGPT..."
            className="w-full bg-gray-50 border border-border rounded-full pl-4 pr-20 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 text-text"
          />
          <div className="absolute right-1 flex items-center gap-1">
            <button className="p-1.5 text-text-secondary hover:text-text rounded-full transition-colors">
              <Mic size={18} />
            </button>
            <button 
              onClick={() => handleSend(inputValue)}
              className="p-1.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
