import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  className?: string;
}

export function TestimonialCard({ quote, author, role, className = '' }: TestimonialCardProps) {
  return (
    <div
      className={className}
      style={{
        background: 'rgba(255,255,255,0.52)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.38)',
        borderRadius: 20,
        padding: '1.5rem',
        position: 'relative',
      }}
    >
      {/* Aspas decorativas */}
      <span style={{
        position: 'absolute', top: 10, left: 18,
        fontFamily: 'Playfair Display, serif',
        fontSize: '4.5rem', lineHeight: 1,
        color: 'rgba(109,71,66,0.10)',
        userSelect: 'none', pointerEvents: 'none',
      }}>
        "
      </span>

      <p style={{
        fontFamily: 'Lora, serif',
        fontStyle: 'italic',
        fontSize: '0.9rem',
        color: '#3F3F3F',
        lineHeight: 1.75,
        marginTop: '1.75rem',
        marginBottom: '1rem',
        position: 'relative',
        zIndex: 1,
      }}>
        {quote}
      </p>

      <div>
        <span style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: '#6D4742',
          display: 'block',
        }}>
          {author}
        </span>
        {role && (
          <span style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.72rem',
            color: '#A16E64',
          }}>
            {role}
          </span>
        )}
      </div>
    </div>
  );
}
