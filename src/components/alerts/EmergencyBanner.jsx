import { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { emergencyAlert } from '../../data/alertsData';

// Mock data since we need it right now
const emergencyAlert = {
  active: true,
  title: 'Heavy Rainfall Warning',
  message: 'Extremely heavy rainfall expected in the next 24 hours.',
  rainfall: '150-200mm',
  duration: 'Next 24 hrs'
};

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(emergencyAlert?.active);

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-50 border-b border-yellow-200 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3">
          <div className="bg-yellow-100 p-2 rounded-lg shrink-0">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-yellow-800">{emergencyAlert.title}</h4>
            <p className="text-sm text-yellow-700 mt-0.5">
              {emergencyAlert.message} <span className="font-medium">Rainfall: {emergencyAlert.rainfall}</span> ({emergencyAlert.duration})
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Link to="/alerts" className="text-sm font-medium text-yellow-800 hover:text-yellow-900 bg-yellow-100 px-3 py-1.5 rounded-lg flex-1 sm:flex-none text-center">
            View Alert
          </Link>
          <Link to="/map" className="text-sm font-medium text-yellow-800 hover:text-yellow-900 bg-yellow-100 px-3 py-1.5 rounded-lg flex-1 sm:flex-none text-center">
            View Map
          </Link>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-1.5 hover:bg-yellow-100 rounded-lg text-yellow-700 transition-colors ml-auto sm:ml-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
