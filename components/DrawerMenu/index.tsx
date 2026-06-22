import React, { useEffect } from 'react';

export interface DrawerMenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
  isCta?: boolean;
  isDivider?: boolean;
}

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
  items: DrawerMenuItem[];
  className?: string;
}

export function DrawerMenu({ open, onClose, items, className = '' }: DrawerMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0, zIndex: 40,
          background: 'rgba(67,41,39,0.32)',
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 300ms ease',
        }}
      />

      {/* Painel lateral */}
      <nav
        aria-label="Menu de navegação"
        className={className}
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: 280,
          zIndex: 50,
          background: 'rgba(253,243,246,0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderLeft: '1px solid rgba(255,255,255,0.40)',
          boxShadow: '-8px 0 32px rgba(67,41,39,0.12)',
          padding: '5rem 1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.125rem',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 320ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          aria-label="Fechar menu"
          style={{
            position: 'absolute', top: 20, right: 20,
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 26, color: '#6D4742', lineHeight: 1, padding: 4,
          }}
        >
          ×
        </button>

        {items.map((item, i) => {
          if (item.isDivider) return <hr key={i} style={{ border: 'none', borderTop: '1px solid rgba(109,71,66,0.12)', margin: '0.5rem 0' }} />;
          if (item.isCta) return (
            <a
              key={i}
              href={item.href ?? '#'}
              onClick={item.onClick}
              style={{
                marginTop: '1rem', display: 'block', textAlign: 'center',
                background: 'linear-gradient(180deg, #A16E64 0%, #6D4742 100%)',
                color: '#FDF3F6', borderRadius: 9999,
                fontFamily: 'Abhaya Libre, serif', fontWeight: 600, fontSize: '1rem',
                padding: '13px 24px', textDecoration: 'none',
                boxShadow: '0px 3px 6px rgba(67,45,42,0.27)',
              }}
            >
              {item.label}
            </a>
          );
          return (
            <a
              key={i}
              href={item.href ?? '#'}
              onClick={item.onClick}
              style={{
                display: 'block', padding: '14px 0',
                fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', fontWeight: 500,
                color: '#3F3F3F', textDecoration: 'none',
                borderBottom: '1px solid rgba(109,71,66,0.08)',
                transition: 'color 200ms ease',
              }}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </>
  );
}
