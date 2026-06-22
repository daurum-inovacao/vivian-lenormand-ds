import React from 'react';

interface NotificationBellProps {
  count?: number;
  onClick?: () => void;
  className?: string;
}

export function NotificationBell({ count = 0, onClick, className = '' }: NotificationBellProps) {
  return (
    <button
      onClick={onClick}
      aria-label={count > 0 ? `${count} notificações` : 'Notificações'}
      className={className}
      style={{
        position: 'relative',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 8,
        color: '#6D4742',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        transition: 'background 200ms ease',
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
      {count > 0 && (
        <span style={{
          position: 'absolute', top: 6, right: 6,
          width: 8, height: 8,
          borderRadius: '50%',
          background: '#9B001C',
          border: '1.5px solid #fffafa',
        }} />
      )}
    </button>
  );
}
