import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Droplets, Wind } from 'lucide-react';

function parseContent(text) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-[85%] px-4 py-3 text-sm ${
        isUser 
          ? 'bg-primary text-white rounded-2xl rounded-br-sm' 
          : 'bg-white border border-border text-text rounded-2xl rounded-bl-sm'
      }`}>
        <div className="leading-relaxed whitespace-pre-wrap">
          {parseContent(message.content)}
        </div>

        {message.weatherCard && (
          <div className="mt-3 grid grid-cols-2 gap-2 bg-gray-50 rounded-lg p-3 border border-border/50 text-text">
            <div>
              <div className="text-xs text-text-secondary">Temperature</div>
              <div className="font-medium">{message.weatherCard.temperature}</div>
            </div>
            <div>
              <div className="text-xs text-text-secondary">Rain Probability</div>
              <div className="font-medium flex items-center gap-1">
                <Droplets size={12} className="text-primary" />
                {message.weatherCard.rainProbability}
              </div>
            </div>
            <div>
              <div className="text-xs text-text-secondary">Expected Rainfall</div>
              <div className="font-medium">{message.weatherCard.expectedRainfall || message.weatherCard.rainfall}</div>
            </div>
            <div>
              <div className="text-xs text-text-secondary">Wind</div>
              <div className="font-medium flex items-center gap-1">
                <Wind size={12} className="text-text-secondary" />
                {message.weatherCard.wind}
              </div>
            </div>
          </div>
        )}

        {message.recommendation && (
          <div className="mt-3 flex gap-2 bg-blue-50 text-blue-900 rounded-lg p-3">
            <Lightbulb size={16} className="text-primary shrink-0 mt-0.5" />
            <div>
              <div className="font-medium mb-1 text-xs uppercase tracking-wide">Recommendation</div>
              <div className="text-sm opacity-90">{message.recommendation}</div>
            </div>
          </div>
        )}

        {/* Simplistic forecast & alert placeholders to fit within simple Chat */}
        {message.forecast && (
          <div className="mt-3 flex gap-2 overflow-x-auto text-text">
            {message.forecast.map((f, i) => (
              <div key={i} className="bg-white border border-border rounded-lg p-2 min-w-[60px] text-center shrink-0">
                <div className="text-xs text-text-secondary mb-1">{f.time || f.day}</div>
                <div className="text-sm font-medium">{f.temp || f.high}°</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
