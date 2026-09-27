import { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Search } from 'lucide-react';
// import { locations } from '../../data/weatherData';

// Mocking locations since data file might not exist yet
const mockLocations = [
  { id: 1, name: 'Mumbai, Maharashtra' },
  { id: 2, name: 'Delhi, NCT' },
  { id: 3, name: 'Bengaluru, Karnataka' }
];

const recentLocations = [
  { id: 4, name: 'Pune, Maharashtra' }
];

export default function LocationSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Nagpur, Maharashtra');
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors text-text"
      >
        <MapPin className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium hidden sm:inline-block">{selectedLocation}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 sm:left-auto sm:-right-4 mt-2 w-72 bg-white rounded-xl shadow-lg border border-border overflow-hidden z-50">
          <div className="p-3 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input
                type="text"
                placeholder="Search location..."
                className="w-full pl-9 pr-3 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:border-primary text-text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <button className="w-full flex items-center gap-2 p-3 text-sm text-primary hover:bg-gray-50 border-b border-border text-left">
            <Navigation className="w-4 h-4" />
            Use current location
          </button>

          <div className="max-h-60 overflow-y-auto">
            {recentLocations.length > 0 && (
              <div className="p-2">
                <div className="text-xs font-semibold text-text-secondary px-2 mb-1 uppercase tracking-wider">Recent</div>
                {recentLocations.map(loc => (
                  <button
                    key={loc.id}
                    className="w-full text-left px-3 py-2 text-sm text-text hover:bg-gray-50 rounded-lg"
                    onClick={() => { setSelectedLocation(loc.name); setIsOpen(false); }}
                  >
                    {loc.name}
                  </button>
                ))}
              </div>
            )}
            
            <div className="p-2">
              <div className="text-xs font-semibold text-text-secondary px-2 mb-1 uppercase tracking-wider">Suggested</div>
              {mockLocations.map(loc => (
                <button
                  key={loc.id}
                  className="w-full text-left px-3 py-2 text-sm text-text hover:bg-gray-50 rounded-lg"
                  onClick={() => { setSelectedLocation(loc.name); setIsOpen(false); }}
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
