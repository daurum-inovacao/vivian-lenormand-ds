import React from 'react';

type CardVariant = 'glass' | 'solid' | 'poster';

interface CardProps {
    variant?: CardVariant;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverable?: boolean;
}

const variantClasses: Record<CardVariant, string> = {
    glass:  'glass-vivian-lenormand shadow-lg',
    solid:  'bg-vivian-lenormand-cream border border-white/20 shadow-lg',
    poster: 'overflow-hidden',
};

export function Card({
    variant = 'glass',
    children,
    className = '',
    onClick,
    hoverable = false,
}: CardProps) {
    return (
        <div
            onClick={onClick}
            className={`
                rounded-2xl
                ${variantClasses[variant]}
                ${hoverable ? 'hover:scale-[1.03] hover:shadow-2xl transition-all duration-700 cursor-pointer' : ''}
                ${onClick ? 'cursor-pointer' : ''}
                ${className}
            `.trim()}
        >
            {children}
        </div>
    );
}
