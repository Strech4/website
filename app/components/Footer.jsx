"use client"
import React, { useState } from 'react'
import { ContactModal, CreditsModal } from './Modals'


export const Footer = () => {
    const [creditOpen, setCreditOpen] = useState(false)
    const [contactOpen, setContactOpen] = useState(false)

    const creditHandleClick = () => {
        setCreditOpen(!creditOpen)
        console.log(creditOpen);
    }

    const contactHandleClick = () => {
        setContactOpen(!contactOpen)
        console.log(contactOpen);
    }

    return (
        <>
            <footer className='bg-elm-bg p-3 flex text-high-contrast w-2/4 mx-auto rounded-full mb-4'>
                <ul className='flex justify-center text-xl w-1/3 mx-auto'>
                    <li onClick={creditHandleClick} className='mx-auto hover:cursor-pointer hover:underline'>Credit</li>
                    <li onClick={contactHandleClick} className='mx-auto hover:cursor-pointer hover:underline'>Contact</li>
                </ul>
            </footer>
            {creditOpen && <CreditsModal close={creditHandleClick} />}
            {contactOpen && <ContactModal close={contactHandleClick} />}
        </>
    )
}