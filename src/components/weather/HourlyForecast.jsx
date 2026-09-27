import React from 'react';
import { hourlyForecast } from '../../data/forecastData';
import { WeatherIcon } from '../common/WeatherIcon';
import { Droplets } from 'lucide-react';

export function HourlyForecast() {
  return (
    <div className="bg-white rounded-xl border border-border p-4">
      <div className="flex overflow-x-auto gap-1 pb-2 snap-x">
        {hourlyForecast.map((hour, index) => {
          const isNow = index === 0;
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-between min-w-[64px] p-2 rounded-lg snap-start shrink-0 ${
                isNow ? 'bg-primary/5 border border-primary/20' : 'border border-transparent'
              }`}
            >
              <div className="text-xs text-text-secondary mb-2">
                {isNow ? 'Now' : hour.time}
              </div>
              <WeatherIcon name={hour.icon} size={24} className="mb-2" />
              <div className="text-sm font-medium text-text mb-1">
                {hour.temp}°
              </div>
              {hour.rain > 0 && (
                <div className="flex items-center gap-1 text-[10px] text-primary">
                  <Droplets size={10} />
                  <span>{hour.rain}%</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
