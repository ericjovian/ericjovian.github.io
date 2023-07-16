import React, { useEffect, useState } from 'react'
import { Banner } from '../components/organisms/Banner'
import Avatar from '../assets/images/avatar.webp'
import { Navbar } from '../components/molecules/Navbar'
import { Hero } from '../components/organisms/Hero'
import './Home.sass'
import { setIsLoading } from '../redux/slices/commonSlice'
import { useAppDispatch } from '../redux/hooks'

interface Biodata{
    name: string,
    age: number,
    occupation: string,
    email: string,
    city: string,
    description: string
}

const Home:React.FC = () => {
    const dispatch = useAppDispatch()
    const [biodata, setBiodata] = useState<Biodata>({
        name: '',
        age: 23,
        occupation: '',
        email: '',
        city: '',
        description: ''
    })

    useEffect(() => {
        var data = require('../assets/datas/bio.json')
        setBiodata(data)
        dispatch(setIsLoading(true))
    }, [dispatch])

    return (
        <>
            
            <Navbar />
            <Hero
                className="hero"
                id='hero'
                src={Avatar}
                onLoad={() => dispatch(setIsLoading(false))}
                loading='lazy'
                name={biodata.name}
                occupation={biodata.occupation}
            />
            <Banner
                className="banner"
                id='about'
                src={Avatar}
                onLoad={() => dispatch(setIsLoading(false))}
                name={biodata.name}
                age={biodata.age}
                email={biodata.email}
                city={biodata.city}
                description={biodata.description}
            />
            <Banner
                className="banner"
                id='experience'
                src={Avatar}
                onLoad={() => dispatch(setIsLoading(false))}
                name={biodata.name}
                age={biodata.age}
                email={biodata.email}
                city={biodata.city}
                description={biodata.description}
            />
            <Banner
                className="banner"
                id='education'
                src={Avatar}
                onLoad={() => dispatch(setIsLoading(false))}
                name={biodata.name}
                age={biodata.age}
                email={biodata.email}
                city={biodata.city}
                description={biodata.description}
            />
        </>
    )
}

export default Home
