import React, { useState } from 'react';

const Toggle = ({ checked, onChange }) => (
  <button
    role="switch"
    aria-checked={checked}
    onClick={() => onChange(!checked)}
    className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
      checked ? 'bg-primary' : 'bg-gray-200'
    }`}
  >
    <span
      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
        checked ? 'translate-x-2.5' : '-translate-x-2.5'
      }`}
    />
  </button>
);

export function Settings() {
  const [tempUnit, setTempUnit] = useState('c');
  const [windUnit, setWindUnit] = useState('kmh');
  const [notifications, setNotifications] = useState({
    severe: true,
    daily: false,
    rain: true
  });
  const [language, setLanguage] = useState('english');
  const [theme, setTheme] = useState('system');

  return (
    <div className="p-4 sm:p-6 max-w-2xl mx-auto space-y-6 pb-20">
      <header>
        <h1 className="text-xl font-semibold text-text">Settings</h1>
      </header>

      <div className="space-y-4">
        <section className="bg-white rounded-xl p-5 border border-border">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-medium text-text">Location</h2>
              <p className="text-xs text-text-secondary mt-1">Nagpur, Maharashtra, India</p>
            </div>
            <button className="text-sm font-medium text-primary hover:underline">Edit</button>
          </div>
        </section>

        <section className="bg-white rounded-xl p-5 border border-border">
          <h2 className="text-sm font-medium text-text mb-4">Units</h2>
          
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Temperature</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button 
                  onClick={() => setTempUnit('c')}
                  className={`px-3 py-1 text-sm font-medium rounded-md ${tempUnit === 'c' ? 'bg-white shadow-sm text-text' : 'text-text-secondary'}`}
                >°C</button>
                <button 
                  onClick={() => setTempUnit('f')}
                  className={`px-3 py-1 text-sm font-medium rounded-md ${tempUnit === 'f' ? 'bg-white shadow-sm text-text' : 'text-text-secondary'}`}
                >°F</button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Wind Speed</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                {['kmh', 'mph', 'ms'].map(u => (
                  <button 
                    key={u}
                    onClick={() => setWindUnit(u)}
                    className={`px-3 py-1 text-sm font-medium rounded-md uppercase ${windUnit === u ? 'bg-white shadow-sm text-text' : 'text-text-secondary'}`}
                  >
                    {u === 'ms' ? 'm/s' : u}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-5 border border-border">
          <h2 className="text-sm font-medium text-text mb-4">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Severe weather alerts</span>
              <Toggle checked={notifications.severe} onChange={(v) => setNotifications(prev => ({...prev, severe: v}))} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Daily forecast summary</span>
              <Toggle checked={notifications.daily} onChange={(v) => setNotifications(prev => ({...prev, daily: v}))} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Rain alerts</span>
              <Toggle checked={notifications.rain} onChange={(v) => setNotifications(prev => ({...prev, rain: v}))} />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-5 border border-border">
          <h2 className="text-sm font-medium text-text mb-4">Language</h2>
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full bg-gray-50 border border-border rounded-lg p-2.5 text-sm text-text focus:outline-none focus:ring-1 focus:ring-primary/50"
          >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="marathi">Marathi</option>
          </select>
        </section>

        <section className="bg-white rounded-xl p-5 border border-border">
          <h2 className="text-sm font-medium text-text mb-4">Theme</h2>
          <div className="flex bg-gray-100 rounded-lg p-1 w-full max-w-[300px]">
            {['Light', 'Dark', 'System'].map(t => (
              <button 
                key={t}
                onClick={() => setTheme(t.toLowerCase())}
                className={`flex-1 py-1.5 text-sm font-medium rounded-md ${theme === t.toLowerCase() ? 'bg-white shadow-sm text-text' : 'text-text-secondary'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
