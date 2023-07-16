import React from 'react'
import { Image } from '../atoms/Image'
import { Reveal } from '../molecules/Reveal'

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
                <Reveal>
                    <Image className={`${className}__avatar`} src={src} alt={name} loading={loading} onLoad={onLoad} />
                </Reveal>
                <Reveal className={`${className}__info`}>
                    <div className={`${className}__info__name`}>
                        Hi, my name is {name}
                    </div>
                    <div className={`${className}__info__occupation`}>
                        I'm a {occupation}.
                    </div>
                </Reveal>
            </div>
        </div>
    )
}
