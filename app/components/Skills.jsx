"use client"
import React from 'react'
import {
    IconCss,
    IconExpress,
    IconHtml,
    IconJS,
    IconMongodb,
    IconNext,
    IconPrisma,
    IconReact,
    IconSql,
    IconTailwind
} from './Icons'

export const Front = () => {

    const IconSize = "50px"
    const IconColor = "#75C7F0"

    const data = [
        { title: "HTML", desc: null, icon: <IconHtml width={IconSize} fill={IconColor} /> },
        { title: "CSS", desc: null, icon: <IconCss width={IconSize} fill={IconColor} /> },
        { title: "JavaScript", desc: null, icon: <IconJS width={IconSize} fill={IconColor} /> },
        { title: "TailwindCSS", desc: null, icon: <IconTailwind width={IconSize} fill={IconColor} /> },
        { title: "NextJs", desc: null, icon: <IconNext width={IconSize} fill={IconColor} /> },
        { title: "Reactjs", desc: null, icon: <IconReact width={IconSize} fill={IconColor} /> },
    ]

    return (
        <>
            <div className='flex gap-4 flex-wrap pt-3'>
                {data.map((item, index) => (
                    <div className='bg-gradient-to-b from-gradient-1 via-gradient-2 to-gradient-3 flex justify-center items-center rounded-lg w-xxs' key={index}>
                        <div className='bg-elm-bg w-[99%] h-[99%] rounded-lg p-4 flex flex-col justify-center items-center'>
                            {item.icon}
                            <h4 className='text-2xl text-high-contrast'>{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}


export const Back = () => {

    const IconSize = "50px"
    const IconColor = "#75C7F0"

    const data = [
        { title: "SQL", desc: null, icon: <IconSql width={IconSize} fill={IconColor} /> },
        { title: "ExpressJS", desc: null, icon: <IconExpress width={IconSize} fill={IconColor} /> },
        { title: "Prisma", desc: null, icon: <IconPrisma width={IconSize} fill={IconColor} /> },
        { title: "MongoDB", desc: null, icon: <IconMongodb width={IconSize} fill={IconColor} /> },

    ]

    return (
        <>
            <div className='flex gap-4 flex-wrap pt-3'>
                {data.map((item, index) => (
                    <div className='bg-gradient-to-b from-gradient-1 via-gradient-2 to-gradient-3 flex justify-center items-center rounded-lg w-xxs' key={index}>
                        <div className='bg-elm-bg w-[99%] h-[99%] rounded-lg p-4 flex flex-col justify-center items-center'>
                            {item.icon}
                            <h4 className='text-2xl text-high-contrast'>{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}