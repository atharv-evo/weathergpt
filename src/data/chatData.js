export const suggestedQuestions = [
  'Will it rain today?',
  'What should I wear?',
  'Is it safe to travel?',
  'Weather this weekend?',
  'Any weather alerts?',
  'Explain today\'s weather.',
  'Why is the temperature increasing?',
];

export const chatPageSuggestions = [
  'Will it rain tomorrow?',
  'Is it safe to travel?',
  'Explain today\'s weather.',
  'What will the weather be this weekend?',
  'Why is the temperature increasing?',
  'Are there any alerts near me?',
];

export const initialMessages = [
  {
    id: 1,
    role: 'assistant',
    content: 'Hello! I\'m WeatherGPT, your weather intelligence assistant. Ask me anything about weather, forecasts, or climate data for your location.',
    timestamp: '6:45 PM',
  },
];

export const mockResponses = {
  'Will it rain tomorrow?': {
    content: 'There is a **72% chance of rain** tomorrow between 2 PM and 6 PM in Nagpur.',
    weatherCard: {
      temperature: '24–30°C',
      rainProbability: '72%',
      expectedRainfall: '18–25 mm',
      wind: '16 km/h',
    },
    recommendation: 'Carry an umbrella if you are travelling after 2 PM.',
  },
  'Will it rain today?': {
    content: 'Yes, there is a **60–75% chance of rain** this afternoon. Expect moderate to heavy showers between 3 PM and 7 PM.',
    weatherCard: {
      temperature: '25–30°C',
      rainProbability: '75%',
      expectedRainfall: '15–30 mm',
      wind: '18 km/h',
    },
    recommendation: 'Keep an umbrella handy if you plan to step out this afternoon.',
  },
  'What should I wear?': {
    content: 'Given the current conditions in Nagpur — **27°C, partly cloudy** with a chance of rain later — I\'d suggest:',
    recommendation: 'Wear light, breathable cotton clothing. Carry a light rain jacket or umbrella as rain is expected in the afternoon. Avoid dark colors as it may get warm in the morning.',
  },
  'Is it safe to travel?': {
    content: 'There is an **active weather warning** for Nagpur with heavy rainfall expected (65–90 mm). Travel conditions may be affected between 2 PM and 8 PM.',
    weatherCard: {
      temperature: '24–30°C',
      rainProbability: '72%',
      expectedRainfall: '65–90 mm',
      wind: '20 km/h',
    },
    recommendation: 'If possible, postpone non-essential travel during peak rainfall hours. If you must travel, avoid waterlogged roads and low-lying bridges.',
  },
  'Weather this weekend?': {
    content: 'The weekend forecast for Nagpur looks mixed:',
    forecast: [
      { day: 'Saturday', condition: 'Cloudy', high: 30, low: 23, rain: 25 },
      { day: 'Sunday', condition: 'Sunny', high: 32, low: 24, rain: 8 },
    ],
    recommendation: 'Saturday may see some cloud cover and a slight chance of drizzle. Sunday looks great for outdoor activities.',
  },
  'Any weather alerts?': {
    content: 'Yes, there is **1 active warning** for your area:',
    alert: {
      type: 'Heavy Rainfall Warning',
      severity: 'Warning',
      rainfall: '65–90 mm',
      validUntil: '8:00 PM today',
      areas: 'Nagpur, Wardha, Bhandara',
    },
    recommendation: 'Stay updated and avoid unnecessary outdoor travel during peak rainfall.',
  },
  default: {
    content: 'Based on current data for Nagpur, conditions are **partly cloudy at 27°C** with moderate humidity. Rain is likely later today with a 72% probability in the afternoon.',
    recommendation: 'Stay prepared for changing weather conditions this evening.',
  },
};
