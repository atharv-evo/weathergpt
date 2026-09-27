import React from 'react';
import { AlertBadge } from './AlertBadge';
import { Link } from 'react-router-dom';

const severityColors = {
  severe: 'border-severe',
  warning: 'border-warning',
  watch: 'border-watch',
  information: 'border-info'
};

export function AlertCard({ alert, compact = false }) {
  if (!alert) return null;

  return (
    <div className={`bg-white rounded-xl p-5 border border-border border-l-4 ${severityColors[alert.severity] || 'border-l-border'}`}>
      <div className="flex flex-col gap-4">
        <div>
          <div className="mb-2">
            <AlertBadge severity={alert.severity} />
          </div>
          <h3 className="font-medium text-text text-lg">{alert.type}</h3>
          <p className="text-sm text-text-secondary mt-1">{alert.timeRange}</p>
        </div>
        
        <p className="text-sm text-text">{alert.description}</p>
        
        {!compact && (
          <div className="space-y-4">
            <div>
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wide">Affected Areas</span>
              <p className="text-sm text-text mt-1">{alert.affectedAreas.join(', ')}</p>
            </div>
            
            {alert.expectedConditions && (
              <div>
                <span className="text-xs font-medium text-text-secondary uppercase tracking-wide">Expected Conditions</span>
                <p className="text-sm text-text mt-1">{alert.expectedConditions}</p>
              </div>
            )}

            {alert.recommendation && (
              <div className="bg-gray-50 rounded-lg p-3 text-sm text-text border border-border/50">
                <span className="font-medium">Recommendation:</span> {alert.recommendation}
              </div>
            )}

            <div className="flex items-center gap-3 pt-2">
              <Link to="/map" className="text-sm bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                View affected area
              </Link>
              <button className="text-sm border border-border text-text px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                More information
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
