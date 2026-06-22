import React from 'react';

interface SectionHeaderProps {
  title: string;
  linkLabel?: string;
  onLinkClick?: () => void;
  className?: string;
}

export function SectionHeader({ title, linkLabel, onLinkClick, className = '' }: SectionHeaderProps) {
  return (
    <div
      className={className}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}
    >
      <h2 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '1.25rem',
        fontWeight: 700,
        color: '#6D4742',
        margin: 0,
        lineHeight: 1.2,
      }}>
        {title}
      </h2>
      {linkLabel && (
        <button
          onClick={onLinkClick}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#A16E64',
            textDecoration: 'underline',
            textUnderlineOffset: 3,
            padding: 0,
          }}
        >
          {linkLabel}
        </button>
      )}
    </div>
  );
}
