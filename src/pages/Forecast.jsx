import React, { useState } from 'react';
import { HourlyForecast } from '../components/weather/HourlyForecast';
import { DailyForecast } from '../components/weather/DailyForecast';
import { dailyForecast, extendedForecast, temperatureChartData, rainChartData } from '../data/forecastData';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export function Forecast() {
  const [activeTab, setActiveTab] = useState('Hourly');

  const tabs = ['Hourly', '7 Days', '15 Days'];

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
      <header>
        <h1 className="text-xl font-semibold text-text">Weather Forecast</h1>
        <p className="text-text-secondary text-sm">Nagpur, Maharashtra</p>
      </header>

      <div className="inline-flex bg-gray-100 rounded-lg p-1">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
              activeTab === tab ? 'bg-white text-text shadow-sm' : 'text-text-secondary hover:text-text'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Hourly' && (
        <div className="space-y-6">
          <HourlyForecast />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border border-border">
              <h3 className="text-sm font-medium text-text-secondary mb-4">Temperature Trend</h3>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={temperatureChartData}>
                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                    <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }} />
                    <Line type="monotone" dataKey="temp" stroke="#2563EB" strokeWidth={3} dot={{ fill: '#2563EB', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-border">
              <h3 className="text-sm font-medium text-text-secondary mb-4">Rain Probability</h3>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={rainChartData}>
                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                    <Tooltip cursor={{ fill: '#F8FAFC' }} contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0' }} />
                    <Bar dataKey="probability" fill="#2563EB" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === '7 Days' && (
        <div className="space-y-6">
          <DailyForecast data={dailyForecast} />
        </div>
      )}

      {activeTab === '15 Days' && (
        <div className="space-y-6">
          <DailyForecast data={extendedForecast} />
        </div>
      )}
    </div>
  );
}
