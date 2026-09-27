export const activeAlerts = [
  {
    id: 'alert-1',
    type: 'Heavy Rainfall Warning',
    severity: 'warning',
    description: 'Heavy rainfall expected in parts of Vidarbha region. Rainfall intensity may reach 65–90 mm in isolated areas.',
    expectedConditions: 'Rainfall: 65–90 mm',
    startTime: '2:00 PM, Sep 27',
    endTime: '8:00 PM, Sep 27',
    validUntil: '8:00 PM',
    affectedAreas: ['Nagpur', 'Wardha', 'Bhandara'],
    recommendation: 'Avoid unnecessary outdoor travel during peak rainfall. Secure loose objects and stay updated.',
    issuedBy: 'India Meteorological Department',
    issuedAt: '9:30 AM, Sep 27',
  },
  {
    id: 'alert-2',
    type: 'Thunderstorm Watch',
    severity: 'watch',
    description: 'Thunderstorms with lightning likely in evening hours. Gusty winds up to 40 km/h possible.',
    expectedConditions: 'Winds: up to 40 km/h, Lightning',
    startTime: '5:00 PM, Sep 27',
    endTime: '10:00 PM, Sep 27',
    validUntil: '10:00 PM',
    affectedAreas: ['Nagpur', 'Amravati'],
    recommendation: 'Stay indoors during thunderstorms. Avoid open areas and tall structures.',
    issuedBy: 'India Meteorological Department',
    issuedAt: '10:00 AM, Sep 27',
  },
];

export const pastAlerts = [
  {
    id: 'alert-3',
    type: 'Heat Wave Advisory',
    severity: 'information',
    description: 'Maximum temperatures exceeded 42°C in parts of Vidarbha.',
    expectedConditions: 'Temperature: 42–45°C',
    startTime: '10:00 AM, Sep 25',
    endTime: '5:00 PM, Sep 25',
    validUntil: '5:00 PM',
    affectedAreas: ['Nagpur', 'Chandrapur', 'Akola'],
    recommendation: 'Stay hydrated and avoid direct sun exposure during peak hours.',
    issuedBy: 'India Meteorological Department',
    issuedAt: '8:00 AM, Sep 25',
  },
  {
    id: 'alert-4',
    type: 'Flood Warning',
    severity: 'severe',
    description: 'Water levels in Nag River crossed danger mark following continuous rainfall.',
    expectedConditions: 'Water level: 2.5m above normal',
    startTime: '6:00 AM, Sep 24',
    endTime: '6:00 PM, Sep 24',
    validUntil: '6:00 PM',
    affectedAreas: ['Nagpur Central', 'Sitabuldi', 'Dharampeth'],
    recommendation: 'Evacuate low-lying areas near river banks. Follow local authority instructions.',
    issuedBy: 'Central Water Commission',
    issuedAt: '5:00 AM, Sep 24',
  },
];

export const severityConfig = {
  severe: { color: '#DC2626', bg: '#FEF2F2', border: '#FECACA', label: 'Severe' },
  warning: { color: '#F59E0B', bg: '#FFFBEB', border: '#FDE68A', label: 'Warning' },
  watch: { color: '#EAB308', bg: '#FEFCE8', border: '#FEF08A', label: 'Watch' },
  information: { color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE', label: 'Information' },
};

export const emergencyAlert = {
  active: true,
  title: 'Severe Weather Alert',
  message: 'Heavy rainfall expected in your area.',
  rainfall: '65–90 mm',
  duration: '4–6 hours',
};
