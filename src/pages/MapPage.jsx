import React from 'react';
import WeatherMap from '../components/map/WeatherMap';
import { MapPin } from 'lucide-react';

export default function MapPage() {
  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-text">Weather Map</h1>
          <div className="flex items-center text-sm text-text-secondary mt-1">
            <MapPin size={14} className="mr-1" />
            <span>Nagpur, Maharashtra</span>
          </div>
        </div>
      </header>

      <main>
        <WeatherMap height="h-[calc(100vh-14rem)] md:h-[calc(100vh-12rem)]" />
      </main>
    </div>
  );
}
