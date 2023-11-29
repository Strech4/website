"use client"
import { useEffect } from "react"
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { LocoComp } from "./components/LocoComp";

export default function Home() {

    useEffect( () => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default;
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])

  return (
    <>
        <Header />
        <main>
            <Card />
            <LocoComp />
        </main>
        {/* <div className="h-screen"></div> */}
    </>
  )
}
