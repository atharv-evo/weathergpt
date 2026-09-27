export const temperatureTrend = [
  { year: '2001', avg: 26.2, max: 42.1, min: 10.8 },
  { year: '2003', avg: 26.5, max: 42.8, min: 11.0 },
  { year: '2005', avg: 26.4, max: 43.2, min: 10.5 },
  { year: '2007', avg: 26.8, max: 43.5, min: 11.2 },
  { year: '2009', avg: 26.6, max: 42.9, min: 10.9 },
  { year: '2011', avg: 27.0, max: 43.8, min: 11.5 },
  { year: '2013', avg: 27.1, max: 44.0, min: 11.3 },
  { year: '2015', avg: 27.3, max: 44.5, min: 11.8 },
  { year: '2017', avg: 27.2, max: 44.2, min: 11.6 },
  { year: '2019', avg: 27.5, max: 44.8, min: 12.0 },
  { year: '2021', avg: 27.6, max: 45.1, min: 12.2 },
  { year: '2023', avg: 27.8, max: 45.3, min: 12.5 },
  { year: '2025', avg: 28.0, max: 45.6, min: 12.8 },
];

export const rainfallTrend = [
  { year: '2001', rainfall: 1120 },
  { year: '2003', rainfall: 980 },
  { year: '2005', rainfall: 1250 },
  { year: '2007', rainfall: 1180 },
  { year: '2009', rainfall: 1050 },
  { year: '2011', rainfall: 1320 },
  { year: '2013', rainfall: 1150 },
  { year: '2015', rainfall: 890 },
  { year: '2017', rainfall: 1280 },
  { year: '2019', rainfall: 1050 },
  { year: '2021', rainfall: 1180 },
  { year: '2023', rainfall: 1350 },
  { year: '2025', rainfall: 1220 },
];

export const monthlyRainfall = [
  { month: 'Jan', rainfall: 12 },
  { month: 'Feb', rainfall: 8 },
  { month: 'Mar', rainfall: 15 },
  { month: 'Apr', rainfall: 10 },
  { month: 'May', rainfall: 18 },
  { month: 'Jun', rainfall: 165 },
  { month: 'Jul', rainfall: 310 },
  { month: 'Aug', rainfall: 280 },
  { month: 'Sep', rainfall: 185 },
  { month: 'Oct', rainfall: 55 },
  { month: 'Nov', rainfall: 18 },
  { month: 'Dec', rainfall: 10 },
];

export const extremeEvents = [
  { year: 2019, event: 'Severe flooding', rainfall: '185 mm in 24h', impact: 'Major urban flooding in central Nagpur' },
  { year: 2020, event: 'Heat wave', rainfall: '47.2°C recorded', impact: 'Highest temperature in 10 years' },
  { year: 2021, event: 'Cyclone remnants', rainfall: '220 mm in 36h', impact: 'Widespread waterlogging and power outages' },
  { year: 2022, event: 'Unseasonal rainfall', rainfall: '85 mm in March', impact: 'Crop damage in agricultural areas' },
  { year: 2023, event: 'Flash floods', rainfall: '150 mm in 6h', impact: 'Evacuation of low-lying areas' },
  { year: 2024, event: 'Extended heat wave', rainfall: '46.8°C for 5 days', impact: 'Water shortage, health advisory issued' },
];

export const climateInsights = [
  {
    title: 'Temperature Trend',
    description: 'Average temperature has increased by 1.8°C over the past 25 years, consistent with regional warming trends.',
    icon: 'thermometer',
    trend: 'up',
    value: '+1.8°C',
  },
  {
    title: 'Rainfall Pattern',
    description: 'Annual rainfall varies between 890–1350 mm. Monsoon months (Jun–Sep) account for 85% of total precipitation.',
    icon: 'cloud-rain',
    trend: 'neutral',
    value: '~1100 mm/yr',
  },
  {
    title: 'Extreme Events',
    description: '12 significant weather events recorded in the last decade, with increasing frequency of heavy rainfall episodes.',
    icon: 'alert-triangle',
    trend: 'up',
    value: '12 events',
  },
];
