import React from 'react';

type BadgeVariant = 'success' | 'danger' | 'info' | 'neutral' | 'lock' | 'brand';

interface BadgeProps {
    variant?: BadgeVariant;
    children: React.ReactNode;
    className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
    success: 'bg-[#468D00]/10 text-[#468D00] border border-[#468D00]/20',
    danger:  'bg-[#9B001C]/10 text-[#9B001C] border border-[#9B001C]/20',
    info:    'bg-vivian-lenormand-50 text-vivian-lenormand-700 border border-vivian-lenormand-200',
    neutral: 'bg-white/60 text-vivian-lenormand-700/70 border border-white/40',
    lock:    'bg-[#2d1e1c]/82 text-vivian-lenormand-50 backdrop-blur-sm',
    brand:   'bg-vivian-lenormand-pink/90 text-vivian-lenormand-900',
};

export function Badge({ variant = 'neutral', children, className = '' }: BadgeProps) {
    return (
        <span
            className={`
                inline-flex items-center gap-1
                px-2.5 py-0.5
                rounded-full
                font-poppins text-[10px] font-semibold uppercase tracking-[0.18em]
                ${variantClasses[variant]}
                ${className}
            `.trim()}
        >
            {children}
        </span>
    );
}
