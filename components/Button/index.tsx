import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize    = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    children: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

const variantClasses: Record<ButtonVariant, string> = {
    primary:   'btn-vivian-lenormand',
    secondary: 'btn-vivian-lenormand-secondary',
    ghost:     'bg-transparent text-vivian-lenormand-700 hover:bg-vivian-lenormand-50 rounded-full font-poppins font-medium transition-colors duration-200',
    danger:    'bg-[#9B001C] text-white rounded-full font-poppins font-semibold hover:bg-[#7a0016] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]',
};

export function Button({
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled,
    children,
    className = '',
    ...props
}: ButtonProps) {
    return (
        <button
            disabled={disabled || loading}
            className={`
                inline-flex items-center justify-center gap-2
                ${sizeClasses[size]}
                ${variantClasses[variant]}
                ${className}
            `.trim()}
            {...props}
        >
            {loading && (
                <span className="animate-vl-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
            )}
            {children}
        </button>
    );
}
