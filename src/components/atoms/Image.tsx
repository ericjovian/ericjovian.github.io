import React from 'react'

export interface ImageProps {
    className?: string
    src: string
    alt: string
    loading?: "eager" | "lazy"
    onLoad?: () => void
}

export const Image: React.FC<ImageProps> = ({ className, src, alt, loading, onLoad }) => {
    return (
        <img className={className} src={src} alt={alt} loading={loading} onLoad={onLoad}/>
    )
}