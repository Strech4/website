import React, { useLayoutEffect, useRef } from 'react';
import { Mail, Github } from "lucide-react";
import Link from 'next/link';

export const Header = () => {

    const IconSize = 22;
    const IconColor = "#C2F3FF"

    const data = [
        {label: "meynardleo@gmail.com", link: "mailTo:meynardleo@gmail.com", icon: <Mail color={IconColor} size={IconSize} />},
        {label: "Github", link: "https://github.com/Strech4", icon: <Github color={IconColor} size={IconSize} />},
    ]

    return (
        <>
            <header className='px-3 sm:px-0 container mx-auto flex flex-col justify-center items-left mt-40'>
                <div className='uppercase font-bold'>
                    <h2 className='text-low-contrast text-xl sm:text-2xl md:text-3xl lg:text-4xl'
                        data-scroll data-scroll-speed="0.4"
                    >
                        Welcome to my web site
                    </h2>
                    <h1 className='text-high-contrast text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-1'
                         
                    >
                        my name is Léo
                    </h1>
                    <h2 className='text-low-contrast text-xl sm:text-2xl md:text-3xl lg:text-4xl'
                        
                    >
                        I'm a <span className='text-high-contrast'>front-end</span> developer
                    </h2>
                </div>
                <div className='my-4'
                    
                >
                    <ul className='flex gap-3'>
                        {data.map((item, index) => (
                            <Link href={item.link} target='_blank'>
                                <li className='text-low-contrast bg-elm-bg hover:bg-elm-hover rounded-lg py-2 px-7 flex justify-center items-center gap-2 hover:cursor-pointer transition-all' key={index}>
                                    <span>{item.icon}</span>
                                    {item.label}
                                </li>
                            </Link>
                        ))}
                        
                    </ul>
                </div>
                <p className='text-low-contrast text-2xl sm:text-3xl md:text-4xl ld:text-5xl mt-12 lg:mt-20 mb-2 w-full md:w-3/4 font-oxy'
                    
                >
                    I'm a <span className='text-high-contrast'>self-taught</span> web developer from France. Over the past three years, I've acquired the skills to design intuitive and attractive websites.
                </p>
            </header>
        </>
    )
}
