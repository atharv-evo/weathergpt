import React from 'react';
import { useGreeting } from '../hooks/useGreeting';
import { currentWeather, weatherMetrics } from '../data/weatherData';
import { WeatherCard } from '../components/weather/WeatherCard';
import { WeatherMetric } from '../components/weather/WeatherMetric';
import { HourlyForecast } from '../components/weather/HourlyForecast';
import { DailyForecast } from '../components/weather/DailyForecast';
import { WeatherGPTChat } from '../components/chat/WeatherGPTChat';
import { AlertCard } from '../components/alerts/AlertCard';
import { activeAlerts } from '../data/alertsData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export function Dashboard() {
  const greeting = useGreeting();
  const topAlert = activeAlerts && activeAlerts.length > 0 ? activeAlerts[0] : null;

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6"
    >
      <motion.header variants={item} className="mb-6">
        <h1 className="text-2xl font-semibold text-text">{greeting}</h1>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-text-secondary text-sm">Weather intelligence for your location</p>
          <span className="text-gray-300">•</span>
          <p className="text-sm font-medium text-text">{currentWeather.location}</p>
        </div>
      </motion.header>

      <motion.section variants={item}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <WeatherCard />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {weatherMetrics.map((metric, i) => (
              <WeatherMetric key={i} {...metric} />
            ))}
          </div>
        </div>
      </motion.section>

      {topAlert && (
        <motion.section variants={item}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-medium text-text-secondary uppercase tracking-wide">Active Alerts</h2>
            <Link to="/alerts" className="text-xs text-primary hover:underline">View all alerts</Link>
          </div>
          <AlertCard alert={topAlert} compact={true} />
        </motion.section>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <motion.section variants={item}>
            <h2 className="text-sm font-medium text-text-secondary uppercase tracking-wide mb-3">Hourly Forecast</h2>
            <HourlyForecast />
          </motion.section>

          <motion.section variants={item}>
            <h2 className="text-sm font-medium text-text-secondary uppercase tracking-wide mb-3">7-Day Forecast</h2>
            <DailyForecast compact={true} />
          </motion.section>
        </div>

        <motion.section variants={item} className="h-full">
          <h2 className="text-sm font-medium text-text-secondary uppercase tracking-wide mb-3">Ask WeatherGPT</h2>
          <WeatherGPTChat compact={true} />
        </motion.section>
      </div>
    </motion.div>
  );
}
