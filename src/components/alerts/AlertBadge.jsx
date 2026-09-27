import React from 'react';
import { severityConfig } from '../../data/alertsData';

export function AlertBadge({ severity }) {
  const config = severityConfig[severity] || severityConfig.information;

  return (
    <span 
      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border border-border/50 shadow-sm"
      style={{ backgroundColor: config.bgColor, color: config.textColor }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.dotColor }} />
      {config.label}
    </span>
  );
}
