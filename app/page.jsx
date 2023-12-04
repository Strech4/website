"use client"
import { useEffect } from "react"
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { LocoComp } from "./components/LocoComp";
import { InteSpline } from "./components/InteSpline";
import { Footer } from "./components/Footer";
import { SplineScene } from "./components/SplineScene";

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
            <SplineScene />
        </main>
        <Footer />
    </>
  )
}
