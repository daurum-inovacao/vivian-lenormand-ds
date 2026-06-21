'use client';

import React, { useEffect } from 'react';

type ModalVariant = 'confirm' | 'alert';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    variant?: ModalVariant;
    title: string;
    message?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm?: () => void;
    danger?: boolean;
    children?: React.ReactNode;
}

export function Modal({
    open,
    onClose,
    variant = 'alert',
    title,
    message,
    confirmLabel = 'Confirmar',
    cancelLabel = 'Cancelar',
    onConfirm,
    danger = false,
    children,
}: ModalProps) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-vl-fade-in"
            onClick={onClose}
        >
            <div
                className="w-full max-w-md bg-vivian-lenormand-cream rounded-[24px] p-10 shadow-2xl border border-white/20 animate-vl-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="font-abhaya font-bold text-[26px] text-vivian-lenormand-700 mb-3 leading-tight">
                    {title}
                </h2>

                {message && (
                    <p className="font-poppins font-light text-[15px] text-vivian-lenormand-text/90 leading-relaxed mb-8">
                        {message}
                    </p>
                )}

                {children}

                <div className={`flex gap-3 mt-8 ${variant === 'confirm' ? 'flex-row' : 'flex-col'}`}>
                    {variant === 'confirm' && (
                        <button
                            onClick={onClose}
                            className="flex-1 h-[48px] rounded-full font-poppins font-medium text-vivian-lenormand-700/60 hover:text-vivian-lenormand-700 transition-colors"
                        >
                            {cancelLabel}
                        </button>
                    )}
                    <button
                        onClick={onConfirm ?? onClose}
                        className={`
                            flex-1 h-[48px] rounded-full
                            font-poppins font-semibold text-[15px]
                            transition-all hover:scale-[1.02] active:scale-[0.98]
                            ${danger
                                ? 'bg-[#9B001C] text-white'
                                : 'bg-vivian-lenormand-700 text-vivian-lenormand-cream'
                            }
                        `.trim()}
                    >
                        {variant === 'confirm' ? confirmLabel : 'Entendi'}
                    </button>
                </div>
            </div>
        </div>
    );
}
