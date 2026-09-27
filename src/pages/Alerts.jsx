import React, { useState } from 'react';
import { AlertCard } from '../components/alerts/AlertCard';
import { activeAlerts, pastAlerts } from '../data/alertsData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Alerts() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showPast, setShowPast] = useState(false);

  const filters = ['All', 'Severe', 'Warning', 'Watch', 'Information'];

  const filteredActive = activeFilter === 'All' 
    ? activeAlerts 
    : activeAlerts.filter(a => a.severity.toLowerCase() === activeFilter.toLowerCase());

  const getCount = (filter) => {
    if (filter === 'All') return activeAlerts.length;
    return activeAlerts.filter(a => a.severity.toLowerCase() === filter.toLowerCase()).length;
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
      <header>
        <h1 className="text-xl font-semibold text-text">Weather Alerts</h1>
        <p className="text-text-secondary text-sm">Stay informed about severe weather</p>
      </header>

      <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="inline-flex bg-gray-100 rounded-lg p-1 min-w-max">
          {filters.map(filter => {
            const count = getCount(filter);
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                  activeFilter === filter ? 'bg-white text-text shadow-sm' : 'text-text-secondary hover:text-text'
                }`}
              >
                {filter}
                {count > 0 && (
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    activeFilter === filter ? 'bg-gray-100 text-text' : 'bg-gray-200 text-text-secondary'
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        {filteredActive.length > 0 ? (
          filteredActive.map((alert, i) => <AlertCard key={i} alert={alert} />)
        ) : (
          <div className="bg-white border border-border rounded-xl p-8 text-center text-text-secondary">
            No active alerts matching this filter.
          </div>
        )}
      </div>

      <div className="pt-6">
        <button 
          onClick={() => setShowPast(!showPast)}
          className="flex items-center gap-2 text-text font-medium w-full text-left bg-white border border-border rounded-xl p-4 hover:bg-gray-50 transition-colors"
        >
          {showPast ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          Past Alerts (Last 7 Days)
        </button>

        {showPast && (
          <div className="mt-4 space-y-4">
            {pastAlerts.map((alert, i) => (
              <div key={i} className="opacity-70">
                <AlertCard alert={alert} compact={true} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
