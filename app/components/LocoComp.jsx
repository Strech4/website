import React, { useLayoutEffect, useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const LocoComp = () => {

    const ContainerCardRef = useRef();

    useLayoutEffect(() => {

        gsap.to(ContainerCardRef.current, {
            gap: "95px",
            duration: 0.7,
            scrollTrigger: {
                trigger: ContainerCardRef.current,
                start: '-100% center',
                end: 'bottom center',
                scrub: true,
            },
        })
    }, [])

    const data = [
        { title: "Locomotive Scroll", text: "Locomotive Scroll is a highly customisable JavaScript library for designing unique page scrolls. It offers fluid transitions and aesthetically pleasing animations.", link: "https://github.com/locomotivemtl/locomotive-scroll" },
        { title: "Gsap", text: "GSAP, or GreenSock Animation Platform, is a powerful and versatile JavaScript library for creating smooth, interactive web animations. It offers precise control over animations for exceptional user experiences.", link: "https://gsap.com/", },
        
    ]

    return (
        <>
            <section className='container mx-auto px-4 sm:px-0'>
                <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-high-contrast uppercase text-right font-bold py-16 '
                    data-scroll data-scroll-speed="0.1"
                >
                    I also learned
                </h2>
                <div className='flex flex-wrap lg:flex-nowrap gap-4' ref={ContainerCardRef}>
                    {data.map((item, index) => (
                        <div className='bg-gradient-to-br from-gradient-1 via-gradient-2 to-gradient-3 flex justify-center items-center rounded-lg lg:w-1/3 mx-auto' key={index}>
                            <div className='w-[99%] h-[99%] rounded-lg bg-elm-bg p-5'>
                                <div className='mb-5 flex'>
                                    <h4 className='text-high-contrast text-3xl'>
                                        {item.title}
                                    </h4>
                                    <Link className='self-center ml-auto' href={item.link} target='_blank'>
                                        <ExternalLink color='white' size={22} />
                                    </Link>
                                </div>
                                <p className='text-low-contrast text-2xl'>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
