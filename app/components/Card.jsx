import React from 'react'
import { Back, Front } from './Skills'

export const Card = () => {

    return (
        <section className='container mx-auto pt-5 px-4 sm:px-0'>
            <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-high-contrast uppercase font-bold pt-20 '
                data-scroll data-scroll-speed="0.1"
            >
                I've learned web developement
            </h1>
            <div className='pt-5 grid grid-cols-2 gap-2'
            >
                <div className='pt-5'>
                    <h2 className='text-low-contrast text-3xl'>Front-end</h2>
                    <Front />
                </div>
                <div className='pt-5'>
                    <h2 className='text-low-contrast text-3xl'>Back-end</h2>
                    <Back />
                </div>
            </div>
        </section>
    )
}
