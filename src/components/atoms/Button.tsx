import React from 'react'

export interface ButtonProps {
    text: string
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ text, className, onClick, disabled }) => {
    return <button className={className} onClick={onClick} disabled={disabled}>{text}</button>
}
