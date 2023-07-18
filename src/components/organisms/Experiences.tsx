import React from 'react'
import { Card } from '../atoms/Card'

export interface ExperiencesProps {
    className?: string
    id? : string
    align?: string
    time: string
    company: string
    title: string
    description: string
}

export const Experiences: React.FC<ExperiencesProps> = ({ className, id, time, title, company, description, align }) => {
    return(
        <div className={`${className}`} id={id}>
            <h2 className="experiences__time" style={{ textAlign: align === 'left' ? 'left' : 'right'}}>{time}</h2>
            <Card className="experiences__card">
                <h2 className="experiences__card__title">{title}</h2>
                <hr className="experiences__card__line"/>
                <h3 className="experiences__card__company">{company}</h3>
                <p className="experiences__card__description">{description}</p>
            </Card>
        </div>
    )
}