import React from 'react'

export interface ButtonProps {
    className?: string
    onClick?: () => void
    children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}