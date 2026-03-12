import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'ghost'
}

export default function Button({ variant = 'primary', children, ...rest }: Props) {
    const base = 'px-4 py-2 rounded-md font-medium shadow-sm'
    const cls = variant === 'primary' ? `${base} bg-emerald-600 text-white` : `${base} bg-white border`
    return (
        <button className={cls} {...rest}>{children}</button>
    )
}
