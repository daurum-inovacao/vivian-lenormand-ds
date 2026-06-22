import React from 'react';
import { ProgressBar } from '../ProgressBar';

type BadgeType = 'CURSO' | 'LIVRO DIGITAL' | 'ÁUDIO' | 'GRUPO' | string;
type CardState = 'CONCLUÍDO' | 'NOVO' | null;

interface PurchaseCardProps {
  title: string;
  imageUrl?: string;
  progress?: number;
  badgeType?: BadgeType;
  state?: CardState;
  onContinue?: () => void;
  className?: string;
}

export function PurchaseCard({
  title,
  imageUrl,
  progress = 0,
  badgeType = 'CURSO',
  state = null,
  onContinue,
  className = '',
}: PurchaseCardProps) {
  return (
    <div
      className={className}
      style={{
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.38)',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(67,41,39,0.10)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 700ms ease, box-shadow 700ms ease',
      }}
    >
      {/* Ilustração 3:4 */}
      <div style={{ position: 'relative', paddingBottom: '133.33%' }}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #E7D7D2 0%, #F7C2CA 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '2.5rem', opacity: 0.25 }}>✦</span>
          </div>
        )}

        {/* Badge tipo */}
        <div style={{
          position: 'absolute', top: 10, left: 10,
          background: 'rgba(255,255,255,0.78)', backdropFilter: 'blur(8px)',
          borderRadius: 9999, padding: '3px 10px',
          fontFamily: 'Poppins, sans-serif', fontSize: 9, fontWeight: 700,
          color: '#6D4742', textTransform: 'uppercase', letterSpacing: '0.14em',
        }}>
          {badgeType}
        </div>

        {/* Badge de estado */}
        {state && (
          <div style={{
            position: 'absolute', top: 10, right: 10,
            background: state === 'CONCLUÍDO' ? 'rgba(70,141,0,0.15)' : 'rgba(247,194,202,0.92)',
            borderRadius: 9999, padding: '3px 10px',
            fontFamily: 'Poppins, sans-serif', fontSize: 9, fontWeight: 700,
            color: state === 'CONCLUÍDO' ? '#468D00' : '#6D4742',
            textTransform: 'uppercase', letterSpacing: '0.14em',
          }}>
            {state}
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        <h3 style={{
          fontFamily: 'Abhaya Libre, serif', fontSize: '1rem',
          fontWeight: 700, color: '#3F3F3F', margin: 0, lineHeight: 1.35,
        }}>
          {title}
        </h3>
        <ProgressBar value={progress} />
        <button
          onClick={onContinue}
          style={{
            marginTop: 2,
            background: 'rgba(255,255,255,0.55)',
            color: '#6D4742',
            border: '1px solid rgba(109,71,66,0.22)',
            borderRadius: 9999,
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '9px 16px',
            cursor: 'pointer',
            transition: 'all 200ms ease',
          }}
        >
          Continuar ▸
        </button>
      </div>
    </div>
  );
}
