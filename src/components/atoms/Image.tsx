import React from 'react'

export interface ImageProps {
    className?: string
    src: string
    alt: string
}

export const Image: React.FC<ImageProps> = ({ className, src, alt }) => {
    return (
        <img className={className} src={src} alt={alt} />
    )
}