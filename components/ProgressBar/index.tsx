import React from 'react';

interface ProgressBarProps {
  value: number;
  showLabel?: boolean;
  className?: string;
}

export function ProgressBar({ value, showLabel = true, className = '' }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, value));
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full rounded-full" style={{ height: 6, background: 'rgba(109,71,66,0.12)' }}>
        <div
          className="rounded-full transition-all duration-700"
          style={{
            height: 6,
            width: `${pct}%`,
            background: 'linear-gradient(90deg, #A16E64 0%, #6D4742 100%)',
          }}
        />
      </div>
      {showLabel && (
        <p className="mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, color: '#A16E64', margin: '4px 0 0' }}>
          {pct}% concluído
        </p>
      )}
    </div>
  );
}
