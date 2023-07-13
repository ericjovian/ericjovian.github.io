import React from 'react'
import { Image } from '../atoms/Image'

export interface HeroProps {
    className?: string
    id?: string
    src: string
    name: string
    occupation: string
    loading?: "eager" | "lazy"
    onLoad?: () => void
}

export const Hero: React.FC<HeroProps> = ({ className, id, src, name, occupation, loading, onLoad }) => {
    return (
        <div className={`${className}`} id={`${id}`}>
            <div className={`${className}__content`} >
                <Image className={`${className}__avatar`} src={src} alt={name} loading={loading} onLoad={onLoad} />
                <div className={`${className}__info`}>
                    <div className={`${className}__info__name`}>
                        Hi, my name is {name}
                    </div>
                    <div className={`${className}__info__occupation`}>
                        I'm a {occupation}.
                    </div>
                </div>
            </div>
        </div>
    )
}
