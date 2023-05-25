import React from 'react'
import { Image } from '../atoms/Image'
import { Variants, motion } from 'framer-motion'

export interface BannerProps {
    className?: string
    src: string
    name: string
    age: number
    email: string
    city: string
    description: string
}

export const Banner: React.FC<BannerProps> = ({ className, src, name, age, email, city, description }) => {
    const myVariants: Variants = {
        offscreen: {
          y: 400,
          rotate: -10
        },
        onscreen: {
          y: 400,
          rotate: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };
    return (
        <div className={`${className}`}>
            <motion.div 
                className={`${className}__content`} 
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.8 }}
                variants={myVariants}
                >
                <Image className={`${className}__avatar`} src={src} alt={name} />
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
            </motion.div>
        </div>
    )
}
