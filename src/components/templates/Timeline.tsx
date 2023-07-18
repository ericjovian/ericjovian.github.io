import React from 'react'
import { Experiences } from '../organisms/Experiences'
import { Reveal } from '../molecules/Reveal'

export const Timeline: React.FC = () => {
    return (
            <div className="timeline">
                <div className="timeline__container">
                    <div className="timeline__item">
                        <div className="timeline__item__content">
                            <Reveal className='experiences__reveal' width='100%'>
                                    <Experiences 
                                        className='experiences' 
                                        id='education'
                                        align='right' 
                                        time='Aug 2018 - Sept 2022' 
                                        company='Binus International University' 
                                        title='Computer Science' 
                                        description='Learn stuff'
                                    />
                            </Reveal>
                            <Reveal className='experiences__reveal' width='100%'>
                                <Experiences 
                                    className='experiences' 
                                    align='left' 
                                    time='June 2021 - July 2022' 
                                    company='University of Wollongong' 
                                    title='Cyber Security' 
                                    description='Learn stuff'
                                />
                            </Reveal>
                            <Reveal className='experiences__reveal' width='100%'>
                                <Experiences 
                                    className='experiences' 
                                    id='experience'
                                    align='right' 
                                    time='Feb 2021 - May 2021' 
                                    company='PT. Inovasi Anak Indonesia' 
                                    title='Frontend Developer Intern' 
                                    description='Do stuff'
                                />
                            </Reveal>
                            <Reveal className='experiences__reveal' width='100%'>
                                <Experiences 
                                    className='experiences' 
                                    align='left' 
                                    time='Mar 2023 - May 2023' 
                                    company='PT. Shopee International Indonesia' 
                                    title='Junior Engineer' 
                                    description='Do stuff'
                                />
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
    )
}