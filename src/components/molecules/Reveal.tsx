import React,{useEffect, useRef} from 'react'
import {motion, useAnimation, useInView} from 'framer-motion'

interface RevealProps {
    children: React.ReactNode | JSX.Element
    width?: 'fit-content' | '100%'
    className?: string
    id?: string
}

export const Reveal: React.FC<RevealProps> = ({children, width ,className, id}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const controls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            slideControls.start('visible')
            controls.start('visible')
        }
    }, [controls,slideControls, isInView])

    return (
        <div className={className} id={id} style={{ position:"relative", width}}>
            <motion.div 
            ref={ref} 
            animate={controls}
            initial="hidden" 
            transition={{duration: 0.5, delay: 0.3}} 
            variants={{
                visible: {opacity: 1, y: 0, width: width},
                hidden: {opacity: 0, y: 100, width: width}
            }}>
                {children}
            </motion.div>
            <motion.div
                variants={{
                    visible: {left: "100%"},
                    hidden: {left: 0}
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration: 0.5, ease: "easeIn"}}
                style={{ 
                    position:"absolute",
                    background: "#0f0f0f",
                    top:4,
                    bottom: 4, 
                    left:0, 
                    right:0,
                    }}
            />
        </div>
    )
}