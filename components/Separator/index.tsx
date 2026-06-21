import React from 'react';
import Image from 'next/image';

type SeparatorVariant = 'top' | 'bottom';

interface SeparatorProps {
    variant?: SeparatorVariant;
    className?: string;
}

export function Separator({ variant = 'bottom', className = '' }: SeparatorProps) {
    return (
        <div className={`w-full -mb-[1px] leading-none ${className}`}>
            <Image
                src={variant === 'bottom' ? '/separador-secao-bottom.svg' : '/separador-secao-top.svg'}
                alt=""
                width={1440}
                height={120}
                className="w-full h-auto block"
            />
        </div>
    );
}
