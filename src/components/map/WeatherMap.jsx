import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Thermometer, CloudRain, Wind, Cloud, AlertTriangle, Search } from 'lucide-react';

L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const LAYERS = [
  { id: 'temp', label: 'Temperature', icon: Thermometer },
  { id: 'rain', label: 'Rainfall', icon: CloudRain },
  { id: 'wind', label: 'Wind', icon: Wind },
  { id: 'clouds', label: 'Clouds', icon: Cloud },
  { id: 'alerts', label: 'Alerts', icon: AlertTriangle },
];

export default function WeatherMap({ height = 'h-[calc(100vh-12rem)]', className = '' }) {
  const [activeLayer, setActiveLayer] = useState('temp');
  const nagpurPos = [21.1458, 79.0882];

  return (
    <div className={`relative w-full rounded-xl overflow-hidden border border-border shadow-sm ${height} ${className}`}>
      {/* Overlay UI */}
      <div className="absolute top-4 left-4 right-4 z-[1000] flex justify-between pointer-events-none">
        <div className="pointer-events-auto bg-white rounded-xl shadow-md border border-border flex items-center px-3 py-2 w-72">
          <Search size={18} className="text-text-secondary mr-2" />
          <input 
            type="text" 
            placeholder="Search location..." 
            className="bg-transparent border-none outline-none text-sm w-full"
          />
        </div>
        
        <div className="pointer-events-auto bg-white rounded-xl shadow-md border border-border p-2 hidden md:flex flex-col gap-1">
          {LAYERS.map(layer => {
            const Icon = layer.icon;
            const isActive = activeLayer === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive ? 'bg-blue-50 text-primary font-medium' : 'text-text-secondary hover:bg-gray-50'
                }`}
              >
                <Icon size={16} />
                <span>{layer.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Layer Control */}
      <div className="absolute bottom-4 left-4 right-4 z-[1000] md:hidden pointer-events-auto">
        <div className="bg-white rounded-xl shadow-md border border-border p-2 flex justify-between overflow-x-auto">
           {LAYERS.map(layer => {
            const Icon = layer.icon;
            const isActive = activeLayer === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg text-xs transition-colors min-w-[4rem] ${
                  isActive ? 'bg-blue-50 text-primary font-medium' : 'text-text-secondary hover:bg-gray-50'
                }`}
              >
                <Icon size={16} />
                <span>{layer.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <MapContainer center={nagpurPos} zoom={10} scrollWheelZoom={true} className="w-full h-full z-0">
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={nagpurPos}>
          <Popup>
            <div className="text-center">
              <div className="font-semibold text-text">Nagpur, India</div>
              <div className="text-2xl font-bold text-text my-1">34°C</div>
              <div className="text-sm text-text-secondary">Partly Cloudy</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
