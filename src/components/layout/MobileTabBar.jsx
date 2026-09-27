import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Calendar, AlertTriangle, Map, MessageSquare } from 'lucide-react';

const tabs = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/forecast', icon: Calendar, label: 'Forecast' },
  { to: '/alerts', icon: AlertTriangle, label: 'Alerts' },
  { to: '/map', icon: Map, label: 'Map' },
  { to: '/ask', icon: MessageSquare, label: 'Chat' },
];

export default function MobileTabBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border h-16 flex items-center justify-around px-2 z-50 pb-safe">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
                isActive ? 'text-primary' : 'text-text-secondary hover:text-text'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </NavLink>
        );
      })}
    </div>
  );
}
