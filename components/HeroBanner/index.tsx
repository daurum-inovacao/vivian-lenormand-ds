import React, { useState, useEffect, useCallback } from 'react';

export interface HeroBannerSlide {
  image?: string;
  headline: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCta?: () => void;
}

interface HeroBannerProps {
  slides: HeroBannerSlide[];
  autoAdvance?: number;
  className?: string;
}

export function HeroBanner({ slides, autoAdvance = 5000, className = '' }: HeroBannerProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(i => (i + 1) % slides.length), [slides.length]);
  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(next, autoAdvance);
    return () => clearInterval(t);
  }, [next, autoAdvance, slides.length]);

  const slide = slides[current];

  return (
    <div
      className={className}
      style={{ position: 'relative', width: '100%', minHeight: 320, overflow: 'hidden', background: '#E7D7D2' }}
    >
      {/* Imagem de fundo */}
      {slide.image && (
        <img
          key={current}
          src={slide.image}
          alt={slide.headline}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', animation: 'vl-fade-in-up 600ms ease-out both' }}
        />
      )}

      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(67,41,39,0.75) 0%, rgba(67,41,39,0.1) 55%, transparent 100%)' }} />

      {/* Conteúdo */}
      <div style={{ position: 'relative', zIndex: 1, padding: '3rem 1.5rem 5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 320, justifyContent: 'flex-end' }}>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: 'clamp(1.4rem, 5vw, 2.25rem)',
          color: '#FDF3F6',
          lineHeight: 1.25,
          marginBottom: '0.5rem',
          maxWidth: 480,
        }}>
          {slide.headline}
        </h2>
        {slide.subtext && (
          <p style={{ fontFamily: 'Lora, serif', fontSize: '0.95rem', color: 'rgba(253,243,246,0.85)', marginBottom: '1.25rem', maxWidth: 400 }}>
            {slide.subtext}
          </p>
        )}
        {slide.ctaLabel && (
          <a
            href={slide.ctaHref ?? '#'}
            onClick={slide.onCta}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(180deg, #A16E64 0%, #6D4742 100%)',
              color: '#FDF3F6',
              borderRadius: 9999,
              fontFamily: 'Abhaya Libre, serif',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '12px 28px',
              textDecoration: 'none',
              boxShadow: '0px 3px 8px rgba(67,45,42,0.35)',
            }}
          >
            {slide.ctaLabel}
          </a>
        )}
      </div>

      {/* Dot indicators */}
      {slides.length > 1 && (
        <div style={{ position: 'absolute', bottom: '1.25rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 2 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? 20 : 8,
                height: 8,
                borderRadius: 9999,
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                background: i === current ? '#F7C2CA' : 'rgba(247,194,202,0.4)',
                transition: 'all 300ms ease',
              }}
            />
          ))}
        </div>
      )}

      {/* Setas */}
      {slides.length > 1 && (
        <>
          <button onClick={prev} aria-label="Anterior" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.18)', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', color: '#FDF3F6', zIndex: 2, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
          <button onClick={next} aria-label="Próximo" style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.18)', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', color: '#FDF3F6', zIndex: 2, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
        </>
      )}
    </div>
  );
}
