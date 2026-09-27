export const hourlyForecast = [
  { time: 'Now', temp: 27, icon: 'cloud-sun', rain: 20, wind: 14 },
  { time: '1 PM', temp: 28, icon: 'cloud-sun', rain: 25, wind: 15 },
  { time: '2 PM', temp: 29, icon: 'cloud', rain: 35, wind: 16 },
  { time: '3 PM', temp: 30, icon: 'cloud-rain', rain: 60, wind: 18 },
  { time: '4 PM', temp: 29, icon: 'cloud-rain', rain: 72, wind: 20 },
  { time: '5 PM', temp: 28, icon: 'cloud-rain', rain: 75, wind: 19 },
  { time: '6 PM', temp: 27, icon: 'cloud-drizzle', rain: 55, wind: 16 },
  { time: '7 PM', temp: 26, icon: 'cloud', rain: 40, wind: 14 },
  { time: '8 PM', temp: 25, icon: 'cloud', rain: 30, wind: 12 },
  { time: '9 PM', temp: 24, icon: 'moon', rain: 20, wind: 10 },
  { time: '10 PM', temp: 24, icon: 'moon', rain: 15, wind: 9 },
  { time: '11 PM', temp: 23, icon: 'moon', rain: 10, wind: 8 },
];

export const dailyForecast = [
  { day: 'Mon', date: 'Sep 28', condition: 'Sunny', icon: 'sun', high: 30, low: 23, rain: 10 },
  { day: 'Tue', date: 'Sep 29', condition: 'Rain', icon: 'cloud-rain', high: 28, low: 22, rain: 72 },
  { day: 'Wed', date: 'Sep 30', condition: 'Cloudy', icon: 'cloud', high: 29, low: 24, rain: 30 },
  { day: 'Thu', date: 'Oct 1', condition: 'Rain', icon: 'cloud-rain', high: 26, low: 21, rain: 80 },
  { day: 'Fri', date: 'Oct 2', condition: 'Sunny', icon: 'sun', high: 31, low: 24, rain: 5 },
  { day: 'Sat', date: 'Oct 3', condition: 'Cloudy', icon: 'cloud', high: 30, low: 23, rain: 25 },
  { day: 'Sun', date: 'Oct 4', condition: 'Sunny', icon: 'sun', high: 32, low: 24, rain: 8 },
];

export const extendedForecast = [
  ...dailyForecast,
  { day: 'Mon', date: 'Oct 5', condition: 'Partly Cloudy', icon: 'cloud-sun', high: 31, low: 24, rain: 15 },
  { day: 'Tue', date: 'Oct 6', condition: 'Sunny', icon: 'sun', high: 33, low: 25, rain: 5 },
  { day: 'Wed', date: 'Oct 7', condition: 'Rain', icon: 'cloud-rain', high: 27, low: 22, rain: 65 },
  { day: 'Thu', date: 'Oct 8', condition: 'Cloudy', icon: 'cloud', high: 28, low: 23, rain: 35 },
  { day: 'Fri', date: 'Oct 9', condition: 'Sunny', icon: 'sun', high: 30, low: 24, rain: 10 },
  { day: 'Sat', date: 'Oct 10', condition: 'Sunny', icon: 'sun', high: 31, low: 24, rain: 8 },
  { day: 'Sun', date: 'Oct 11', condition: 'Partly Cloudy', icon: 'cloud-sun', high: 30, low: 23, rain: 20 },
  { day: 'Mon', date: 'Oct 12', condition: 'Cloudy', icon: 'cloud', high: 29, low: 23, rain: 30 },
];

export const temperatureChartData = [
  { time: '6AM', temp: 23, feelsLike: 24 },
  { time: '9AM', temp: 25, feelsLike: 26 },
  { time: '12PM', temp: 28, feelsLike: 30 },
  { time: '3PM', temp: 30, feelsLike: 32 },
  { time: '6PM', temp: 27, feelsLike: 28 },
  { time: '9PM', temp: 24, feelsLike: 25 },
  { time: '12AM', temp: 23, feelsLike: 23 },
];

export const rainChartData = [
  { time: '6AM', probability: 10 },
  { time: '9AM', probability: 15 },
  { time: '12PM', probability: 35 },
  { time: '1PM', probability: 50 },
  { time: '2PM', probability: 60 },
  { time: '3PM', probability: 72 },
  { time: '4PM', probability: 75 },
  { time: '5PM', probability: 65 },
  { time: '6PM', probability: 55 },
  { time: '7PM', probability: 40 },
  { time: '8PM', probability: 30 },
  { time: '9PM', probability: 20 },
];

export const windChartData = [
  { time: '6AM', speed: 8, gusts: 14 },
  { time: '9AM', speed: 12, gusts: 18 },
  { time: '12PM', speed: 14, gusts: 22 },
  { time: '3PM', speed: 18, gusts: 28 },
  { time: '6PM', speed: 16, gusts: 24 },
  { time: '9PM', speed: 10, gusts: 16 },
  { time: '12AM', speed: 8, gusts: 12 },
];

export const humidityChartData = [
  { time: '6AM', humidity: 78 },
  { time: '9AM', humidity: 72 },
  { time: '12PM', humidity: 65 },
  { time: '3PM', humidity: 60 },
  { time: '6PM', humidity: 68 },
  { time: '9PM', humidity: 75 },
  { time: '12AM', humidity: 80 },
];
