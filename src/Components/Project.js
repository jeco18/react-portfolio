import React from "react"
import Footer from "./Footer"
import { tabTitle } from "./generalFunctions"
import Navbar from "./Navbar"

const Project = () => {
    tabTitle('Projects - Jericho Bongay')
    return(
        <div className=" w-11/12 lg:w-10/12 mx-auto">
            <Navbar />
            <h1 className='h-44 text-5xl text-center font-bold mt-20 md:text-9xl md:text-start lg:text-start lg:text-9xl'>Projects</h1>
            <div className='grid gap-8 mt-8 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-8'>
                <div className='overflow-hidden'>
                    <a href="https://jeco18.github.io/divpro.github.io/"><img className='hover:scale-[1.2] duration-[1500ms]' src="img/project1.png" alt="Divpro" /></a>
                </div>
                <div className='overflow-hidden'>
                    <a href="https://project1-blush.vercel.app/"><img className='hover:scale-[1.2] duration-[1500ms]' src="img/project2.png" alt="Gadgetsiva" /></a>
                </div>
                <div className='overflow-hidden'>
                    <a href="/project"><img className='hover:scale-[1.2] duration-[1500ms] h-full' src="img/project3.png" alt="TinyUrl" /></a>
                </div>
                <div className='overflow-hidden'>
                    <a href="/project"><img className='hover:scale-[1.2] duration-[1500ms]' src="img/project4.png" alt="Recipe App" /></a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Project