import React from 'react';
import { Droplets, Wind, Eye, Gauge, Sunrise, Sunset } from 'lucide-react';

const iconMap = {
  droplets: Droplets,
  wind: Wind,
  eye: Eye,
  gauge: Gauge,
  sunrise: Sunrise,
  sunset: Sunset,
};

export function WeatherMetric({ label, value, icon }) {
  const IconComponent = iconMap[icon];

  return (
    <div className="bg-white rounded-xl p-4 border border-border flex flex-col gap-2">
      <div className="flex items-center gap-2 text-text-secondary">
        {IconComponent && <IconComponent size={18} />}
        <span className="text-xs">{label}</span>
      </div>
      <div className="text-sm font-medium text-text">
        {value}
      </div>
    </div>
  );
}
