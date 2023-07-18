import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/molecules/Navbar'
import { Hero } from '../components/organisms/Hero'
import { setIsLoading } from '../redux/slices/commonSlice'
import { useAppDispatch } from '../redux/hooks'
import Avatar from '../assets/images/avatar.webp'
import data from '../assets/datas/bio.json'
import './Home.sass'
import { Timeline } from '../components/templates/Timeline'
import { Footer } from '../components/molecules/Footer'

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
        setBiodata(data)
    }, [])

    return (
        <>
            <Navbar />
            <Hero
                className="hero"
                id='about'
                src={Avatar}
                onLoad={() => dispatch(setIsLoading(false))}
                loading='lazy'
                name={biodata.name}
                occupation={biodata.occupation}
            />
            <Timeline />
            <Footer />
            {/* <Banner
                className="banner"
                id='education'
                src={Avatar}
                onLoad={() => dispatch(setIsLoading(false))}
                name={biodata.name}
                age={biodata.age}
                email={biodata.email}
                city={biodata.city}
                description={biodata.description}
            /> */}
        </>
    )
}

export default Home
