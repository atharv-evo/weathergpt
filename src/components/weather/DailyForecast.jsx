import React from 'react';
import { dailyForecast } from '../../data/forecastData';
import { WeatherIcon } from '../common/WeatherIcon';
import { Droplets } from 'lucide-react';

export function DailyForecast({ data = dailyForecast, compact = false }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
      {data.map((day, index) => (
        <div key={index} className="bg-white rounded-xl p-4 border border-border flex flex-col items-center justify-between">
          <div className="text-sm font-medium text-text mb-3">
            {index === 0 ? 'Today' : day.day}
          </div>
          <WeatherIcon name={day.icon} size={32} className="mb-3" />
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-text">{day.high}°</span>
            <span className="text-sm text-text-secondary">{day.low}°</span>
          </div>
          {!compact && (
            <div className="text-xs text-text-secondary mb-2 text-center h-8 flex items-center justify-center">
              {day.condition}
            </div>
          )}
          {day.rainProbability > 20 && (
            <div className="flex items-center gap-1 text-[10px] text-primary mt-auto">
              <Droplets size={10} />
              <span>{day.rainProbability}%</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
