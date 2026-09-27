import {
  Sun,
  Cloud,
  CloudRain,
  CloudDrizzle,
  CloudSun,
  CloudLightning,
  Snowflake,
  Wind,
  Moon,
  CloudFog,
} from 'lucide-react';

const iconMap = {
  'sun': Sun,
  'cloud': Cloud,
  'cloud-rain': CloudRain,
  'cloud-drizzle': CloudDrizzle,
  'cloud-sun': CloudSun,
  'cloud-lightning': CloudLightning,
  'snowflake': Snowflake,
  'wind': Wind,
  'moon': Moon,
  'cloud-fog': CloudFog,
};

export function WeatherIcon({ name, size = 20, className = '' }) {
  const Icon = iconMap[name] || Cloud;
  return <Icon size={size} className={className} />;
}
