import React, { useState } from 'react';
import { MapPin, TrendingUp, Minus } from 'lucide-react';
import ClimateChart from '../components/climate/ClimateChart';
import { climateInsights, temperatureTrend, rainfallTrend, monthlyRainfall, extremeEvents } from '../data/climateData';

const PERIODS = ['1 Year', '5 Years', '10 Years', '25 Years'];

export default function Climate() {
  const [period, setPeriod] = useState('10 Years');

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-6">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-text">Climate Intelligence</h1>
          <div className="flex items-center text-sm text-text-secondary mt-1">
            <MapPin size={14} className="mr-1" />
            <span>Nagpur, Maharashtra</span>
          </div>
        </div>
        
        <div className="inline-flex bg-gray-100 rounded-lg p-1 self-start md:self-auto">
          {PERIODS.map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                period === p ? 'bg-white shadow-sm text-text font-medium' : 'text-text-secondary hover:text-text'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </header>

      {/* Insights Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {climateInsights.map((insight, idx) => (
          <div key={idx} className="bg-white rounded-xl p-5 border border-border shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="text-sm text-text-secondary">{insight.title}</div>
              <div className={`p-1.5 rounded-lg ${insight.trend === 'up' ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-600'}`}>
                {insight.trend === 'up' ? <TrendingUp size={16} /> : <Minus size={16} />}
              </div>
            </div>
            <div className="text-2xl font-semibold text-text mb-1">{insight.value}</div>
            <div className="text-xs text-text-secondary">{insight.description}</div>
          </div>
        ))}
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <ClimateChart 
          title="Temperature Trend (°C)" 
          data={temperatureTrend} 
          dataKey="avg" 
          type="line" 
          color="#EF4444" 
          unit="°C"
        />
        <ClimateChart 
          title="Annual Rainfall (mm)" 
          data={rainfallTrend} 
          dataKey="rainfall" 
          type="bar" 
          color="#3B82F6" 
          unit="mm"
        />
        <div className="lg:col-span-2">
          <ClimateChart 
            title="Monthly Rainfall Distribution" 
            data={monthlyRainfall} 
            dataKey="rainfall" 
            xAxisKey="month"
            type="area" 
            color="#06B6D4" 
            unit="mm"
            height={300}
          />
        </div>
      </section>

      {/* Extreme Events */}
      <section>
        <h3 className="text-lg font-semibold text-text mb-4">Extreme Weather Events</h3>
        <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-text-secondary">
                <tr>
                  <th className="px-4 py-3 font-medium">Year</th>
                  <th className="px-4 py-3 font-medium">Event Type</th>
                  <th className="px-4 py-3 font-medium">Details</th>
                  <th className="px-4 py-3 font-medium">Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {extremeEvents.map((evt, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-text font-medium">{evt.year}</td>
                    <td className="px-4 py-3 text-text">{evt.event}</td>
                    <td className="px-4 py-3 text-text-secondary">{evt.rainfall}</td>
                    <td className="px-4 py-3 text-text-secondary">{evt.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
