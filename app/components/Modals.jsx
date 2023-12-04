import { X } from 'lucide-react';
import Link from 'next/link';

export const CreditsModal = ({ close }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-backgound p-5 rounded-md text-high-contrast w-2/3 md:w-1/2 lg:w-1/3">
                <div className="flex items-center justify-center">
                    <h4 className="text-xl">Credit</h4>
                    <X className='hover:cursor-pointer ml-auto hover:text-red-500' onClick={close} />
                </div>
                <div className='text-low-contrast text-lg mt-3'>
                    <p>
                        Thanks to {" "}
                        <Link className='text-high-contrast hover:underline' href="https://community.spline.design/@ChloeWang" target='_blank'>
                            @ChloeWang
                        </Link>
                        {" "}
                        for the 3D spline model found on the Spline3D community page.
                    </p>
                </div>
            </div>
        </div>
    )
}

export const ContactModal = ({ close }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-backgound p-5 rounded-md text-high-contrast w-2/3 md:w-1/2 lg:w-1/3">
            <div className="flex items-center justify-center">
                <h4 className="text-xl">Contact</h4>
                <X className='hover:cursor-pointer ml-auto hover:text-red-500' onClick={close} />
            </div>
            <div className='text-low-contrast mt-3 text-lg'>
                <p>
                    Please don't hesitate to contact me if you have any questions or require further information. I'm here to answer any questions you may have, or for any other web development-related queries.
                </p>
                <Link href="mailTo:meynardleo@gmail.com" target='_blank'>
                    <div className='text-high-contrast bg-elm-bg hover:bg-elm-hover rounded-lg py-2 px-7 flex justify-center items-center hover:cursor-pointer transition-all my-4'>
                        meynardleo@gmail.com
                    </div>
                </Link>
            </div>
        </div>
    </div>
    )
}