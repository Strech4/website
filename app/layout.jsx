"use client"
import { Oxygen } from 'next/font/google';
import './globals.css';
import { useEffect, useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';


const oxygen = Oxygen({
    subsets: ["latin"],
    weight: ['300', '400', '700'],
    display: "swap",
    variable: "--font-oxy"
})

export default function RootLayout({ children }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <html lang="fr">
            
            <body className={`bg-backgound ${oxygen.variable}`}>
                {!loading ? (
                    <LoadingScreen />
                ) : (
                    children
                )}
            </body>
        </html>
    )
}