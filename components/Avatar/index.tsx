import React from 'react';

interface AvatarProps {
  src?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = { sm: 36, md: 44, lg: 56 };
const fontSizes = { sm: 13, md: 16, lg: 20 };

function initials(name?: string): string {
  if (!name) return '?';
  return name
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();
}

export function Avatar({ src, name, size = 'md', className = '' }: AvatarProps) {
  const px = sizes[size];
  const fs = fontSizes[size];
  return (
    <div
      className={className}
      style={{
        width: px, height: px,
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
        background: '#E7D7D2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid rgba(255,255,255,0.6)',
      }}
    >
      {src ? (
        <img src={src} alt={name ?? 'Avatar'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: fs, fontWeight: 600, color: '#6D4742' }}>
          {initials(name)}
        </span>
      )}
    </div>
  );
}
