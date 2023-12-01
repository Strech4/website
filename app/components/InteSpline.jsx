import React from 'react'
import { SplineScene } from './SplineScene'

export const InteSpline = () => {
    return (
        <>
            <section className='relative container mx-auto sm:px-0 flex flex-col h-screen'>
                <div className='px-2'>
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

                    <p className='text-high-contrast text-lg md:hidden text-center'
                        data-scroll data-scroll-speed="0.1"
                    >
                        (For a better experience, go to a computer!)
                    </p>
                </div>
                <SplineScene />

                <div className='absolute bg-elm-bg bottom-10 left-1/2 bg-opacity-70 p-3 rounded-md'>
                    <span className='text-high-contrast opacity-100 text-opacity-100'> Drag to look</span>
                </div>
            </section>
        </>
    )
}
