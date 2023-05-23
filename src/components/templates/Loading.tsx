import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import './Loading.sass'

export interface LoadingProps {
    className?: string
}

export const Loading: React.FC<LoadingProps> = ({ className }) => {
    const {isLoading} = useAppSelector((state) => state.common)
    if(!isLoading) return null
    return (
        <div className={className}>
            <div className="loader-container">
                <div className="spinner"/>
            </div>
        </div>
    )
}