import React from 'react';

interface OfferCardProps {
  title: string;
  imageUrl?: string;
  benefit?: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  onBuy?: () => void;
  className?: string;
}

export function OfferCard({
  title,
  imageUrl,
  benefit,
  price,
  originalPrice,
  badge = 'OFERTA',
  onBuy,
  className = '',
}: OfferCardProps) {
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
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #F7C2CA 0%, #E7D7D2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '2.5rem', opacity: 0.25 }}>✦</span>
          </div>
        )}

        {/* Badge de oferta */}
        <div style={{
          position: 'absolute', top: 10, left: 10,
          background: 'linear-gradient(135deg, #A16E64, #6D4742)',
          borderRadius: 9999, padding: '3px 10px',
          fontFamily: 'Poppins, sans-serif', fontSize: 9, fontWeight: 700,
          color: '#FDF3F6', textTransform: 'uppercase', letterSpacing: '0.14em',
        }}>
          {badge}
        </div>
      </div>

      {/* Conteúdo */}
      <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
        <h3 style={{
          fontFamily: 'Abhaya Libre, serif', fontSize: '1rem',
          fontWeight: 700, color: '#3F3F3F', margin: 0, lineHeight: 1.35,
        }}>
          {title}
        </h3>
        {benefit && (
          <p style={{
            fontFamily: 'Lora, serif', fontStyle: 'italic',
            fontSize: '0.82rem', color: '#A16E64', margin: 0, lineHeight: 1.55,
          }}>
            {benefit}
          </p>
        )}

        {/* Preço */}
        <div style={{ marginTop: 4 }}>
          {originalPrice && (
            <span style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem',
              color: '#C1C1C1', textDecoration: 'line-through', display: 'block',
            }}>
              {originalPrice}
            </span>
          )}
          <span style={{
            fontFamily: 'Abhaya Libre, serif', fontSize: '1.4rem',
            fontWeight: 700, color: '#6D4742',
          }}>
            {price}
          </span>
          <span style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem',
            color: '#A16E64', display: 'block', marginTop: 1,
          }}>
            pagamento único
          </span>
        </div>

        <button
          onClick={onBuy}
          style={{
            marginTop: 8,
            background: 'linear-gradient(180deg, #A16E64 0%, #6D4742 100%)',
            color: '#FDF3F6',
            border: 'none',
            borderRadius: 9999,
            fontFamily: 'Abhaya Libre, serif',
            fontWeight: 600,
            fontSize: '1rem',
            padding: '11px 18px',
            cursor: 'pointer',
            boxShadow: '0px 3px 6px rgba(67,45,42,0.27)',
            transition: 'all 200ms ease',
          }}
        >
          Quero esta ✦
        </button>
      </div>
    </div>
  );
}
