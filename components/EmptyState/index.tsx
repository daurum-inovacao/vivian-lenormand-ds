import React from 'react';

interface EmptyStateProps {
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
}

export function EmptyState({
  headline = 'Seu ateliê está pronto para a primeira jornada ✦',
  subtext = 'Explore o catálogo e encontre o curso perfeito para você.',
  ctaLabel,
  onCta,
  className = '',
}: EmptyStateProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3rem 1.5rem',
      }}
    >
      <div style={{ fontSize: '3rem', opacity: 0.35, marginBottom: '1rem', lineHeight: 1 }}>✦</div>
      <h3 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '1.125rem',
        fontWeight: 700,
        color: '#6D4742',
        margin: '0 0 0.5rem',
        lineHeight: 1.4,
        maxWidth: 300,
      }}>
        {headline}
      </h3>
      <p style={{
        fontFamily: 'Lora, serif',
        fontSize: '0.875rem',
        color: '#A16E64',
        maxWidth: 260,
        lineHeight: 1.7,
        margin: 0,
      }}>
        {subtext}
      </p>
      {ctaLabel && (
        <button
          onClick={onCta}
          style={{
            marginTop: '1.5rem',
            background: 'linear-gradient(180deg, #A16E64 0%, #6D4742 100%)',
            color: '#FDF3F6',
            border: 'none',
            borderRadius: 9999,
            fontFamily: 'Abhaya Libre, serif',
            fontWeight: 600,
            fontSize: '1rem',
            padding: '12px 28px',
            cursor: 'pointer',
            boxShadow: '0px 3px 6px rgba(67,45,42,0.27)',
          }}
        >
          {ctaLabel}
        </button>
      )}
    </div>
  );
}
