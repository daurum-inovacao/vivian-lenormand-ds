import React from 'react';

type InputVariant = 'vivian-lenormand' | 'glass';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: InputVariant;
    label?: string;
    error?: string;
}

const variantClasses: Record<InputVariant, string> = {
    'vivian-lenormand': 'input-vivian-lenormand',
    'glass': [
        'w-full rounded-full',
        'border border-white/50 bg-white/70',
        'px-5 py-3',
        'font-poppins text-sm text-vivian-lenormand-700',
        'placeholder:text-vivian-lenormand-700/45',
        'focus:border-vivian-lenormand-700 focus:outline-none',
        'transition-colors duration-200',
    ].join(' '),
};

export function Input({
    variant = 'vivian-lenormand',
    label,
    error,
    id,
    className = '',
    ...props
}: InputProps) {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="flex flex-col gap-1 w-full">
            {label && (
                <label
                    htmlFor={inputId}
                    className="font-poppins text-sm font-medium text-vivian-lenormand-700"
                >
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={`${variantClasses[variant]} ${className}`}
                {...props}
            />
            {error && (
                <span className="font-poppins text-xs text-[#9B001C]">{error}</span>
            )}
        </div>
    );
}
