import React, { useEffect, useState } from 'react'
import { Banner } from '../components/organisms/Banner'
import Avatar from '../assets/images/avatar.png'
import './Home.sass'
import { Navbar } from '../components/molecules/Navbar'

interface Biodata{
    name: string,
    age: number,
    email: string,
    city: string,
    description: string
}

const Home:React.FC = () => {
    const [biodata, setBiodata] = useState<Biodata>({
        name: '',
        age: 23,
        email: '',
        city: '',
        description: ''
    })

    useEffect(() => {
        var data = require('../assets/datas/bio.json')
        setBiodata(data)
    }, [])

    return (
        <div>
            <Banner
                className="banner"
                src={Avatar}
                name={biodata.name}
                age={biodata.age}
                email={biodata.email}
                city={biodata.city}
                description={biodata.description}
            />
            <Navbar />
        </div>
    )
}

export default Home