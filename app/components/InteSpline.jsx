import React from 'react'
import { SplineScene } from './SplineScene'

export const InteSpline = () => {
    return (
        <>
            <section className='container mx-auto px-4 sm:px-0 flex flex-col h-[110vhs] md:h-screen'>
                <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-high-contrast uppercase text-center font-bold pt-24 '
                    data-scroll data-scroll-speed="0.1"
                >
                    and Spline3D integration
                </h2>
                <p className='text-low-contrast text-center text-xl'
                    data-scroll data-scroll-speed="0.1"
                >
                   Spline3D is 3D modelling and animation software focused on simplicity and rapid creation.
                </p>

                <p className='text-high-contrast md:hidden text-center'
                    data-scroll data-scroll-speed="0.1"
                >
                    (For a better experience, go to a computer!)
                </p>
                <div className='h-full relative mt-7'>
                    <SplineScene />
                </div>
            </section>
        </>
    )
}
