import React from 'react'
import { Image } from '../atoms/Image'

export interface BannerProps {
    className?: string
    id?: string
    src: string
    name: string
    age: number
    email: string
    city: string
    description: string
    onLoad?: () => void
}

export const Banner: React.FC<BannerProps> = ({ className, id, src, name, age, email, city, description, onLoad }) => {

    return (
        <div className={`${className}`} id={`${id}`}>
            <div className={`${className}__content`}>
                <Image className={`${className}__avatar`} src={src} alt={name} onLoad={onLoad} />
                <div className={`${className}__info`}>
                    <div className={`${className}__info__name`}>
                        {name}
                    </div>
                    <div className={`${className}__info__age`}>
                        {age}
                    </div>
                    <div className={`${className}__info__email`}>
                        {email}
                    </div>
                    <div className={`${className}__info__city`}>
                        {city}
                    </div>
                    <div className={`${className}__info__description`}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}
