import React from 'react';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  className?: string;
}

export function SearchInput({
  placeholder = 'Buscar ofertas, livros e cursos',
  value,
  onChange,
  className = '',
}: SearchInputProps) {
  return (
    <div className={`relative w-full ${className}`} style={{ position: 'relative' }}>
      <span style={{
        position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
        color: '#6D4742', pointerEvents: 'none', display: 'flex',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
      </span>
      <input
        type="search"
        value={value}
        onChange={e => onChange?.(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          height: 48,
          paddingLeft: 44,
          paddingRight: 16,
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.45)',
          borderRadius: 9999,
          fontFamily: 'Poppins, sans-serif',
          fontSize: 14,
          color: '#3F3F3F',
          outline: 'none',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
}
