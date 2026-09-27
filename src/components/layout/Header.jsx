import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CloudSun, Menu, Bell, Settings } from 'lucide-react';
import LocationSelector from '../common/LocationSelector';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Dashboard' },
    { to: '/forecast', label: 'Forecast' },
    { to: '/alerts', label: 'Alerts' },
    { to: '/map', label: 'Map' },
    { to: '/climate', label: 'Climate' },
    { to: '/ask', label: 'Ask WeatherGPT' },
  ];

  return (
    <header className="bg-white border-b border-border h-16 flex items-center justify-between px-4 md:px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button 
          className="md:hidden p-2 -ml-2 text-text-secondary hover:text-text rounded-lg hover:bg-gray-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <CloudSun className="w-8 h-8 text-primary" />
          <span className="text-lg font-semibold text-text">WeatherGPT</span>
        </Link>
      </div>

      <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => 
              `px-3 py-2 rounded-xl text-sm transition-colors ${
                isActive 
                  ? 'text-primary font-medium bg-blue-50' 
                  : 'text-text-secondary hover:text-text hover:bg-gray-50'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden sm:block">
          <LocationSelector />
        </div>
        
        <button className="relative p-2 text-text-secondary hover:text-text hover:bg-gray-50 rounded-xl transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
        </button>
        
        <Link 
          to="/settings"
          className="hidden sm:flex p-2 text-text-secondary hover:text-text hover:bg-gray-50 rounded-xl transition-colors"
        >
          <Settings className="w-5 h-5" />
        </Link>
      </div>

      {/* Mobile Dropdown Nav - simple implementation */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg md:hidden py-2 px-4 flex flex-col gap-1 z-50">
          <div className="mb-2 pb-2 border-b border-border sm:hidden">
            <LocationSelector />
          </div>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => 
                `block px-4 py-3 rounded-xl text-sm transition-colors ${
                  isActive 
                    ? 'text-primary font-medium bg-blue-50' 
                    : 'text-text hover:bg-gray-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/settings"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 rounded-xl text-sm text-text hover:bg-gray-50 sm:hidden"
          >
            Settings
          </Link>
        </div>
      )}
    </header>
  );
}
