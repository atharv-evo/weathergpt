import React from 'react';
import { currentWeather } from '../../data/weatherData';
import { WeatherIcon } from '../common/WeatherIcon';

export function WeatherCard() {
  return (
    <div className="bg-white rounded-xl p-6 border border-border flex items-center justify-between">
      <div>
        <div className="text-5xl font-light text-text mb-2">
          {currentWeather.temperature}°
        </div>
        <div className="text-lg font-medium text-text mb-1">
          {currentWeather.condition}
        </div>
        <div className="text-sm text-text-secondary">
          Feels like {currentWeather.feelsLike}°
        </div>
      </div>
      <div>
        <WeatherIcon name={currentWeather.conditionIcon} size={80} className="text-text-secondary" />
      </div>
    </div>
  );
}
