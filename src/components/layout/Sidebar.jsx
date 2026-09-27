import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Calendar, AlertTriangle, Map, BarChart3, MessageSquare, Settings } from 'lucide-react';

const mainNavItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/forecast', icon: Calendar, label: 'Forecast' },
  { to: '/alerts', icon: AlertTriangle, label: 'Alerts' },
  { to: '/map', icon: Map, label: 'Map' },
  { to: '/climate', icon: BarChart3, label: 'Climate' },
  { to: '/ask', icon: MessageSquare, label: 'Ask WeatherGPT' },
];

export default function Sidebar() {
  return (
    <aside className="w-16 lg:w-60 h-full bg-white border-r border-border flex flex-col transition-all duration-300">
      <div className="flex-1 py-6 flex flex-col gap-2 px-2 lg:px-4">
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-primary border-r-2 border-primary lg:border-none' // In prompt, border-r-2 is mentioned, let's keep it.
                    : 'text-text-secondary hover:bg-gray-50 hover:text-text'
                }`
              }
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span className="text-sm font-medium hidden lg:block truncate">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-border">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
              isActive
                ? 'bg-blue-50 text-primary'
                : 'text-text-secondary hover:bg-gray-50 hover:text-text'
            }`
          }
        >
          <Settings className="w-5 h-5 shrink-0" />
          <span className="text-sm font-medium hidden lg:block">Settings</span>
        </NavLink>
      </div>
    </aside>
  );
}
