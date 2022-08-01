import React from "react";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom'
import { tabTitle } from "./generalFunctions";
import Navbar from './Navbar'


const Home = () => {
    const navigate = useNavigate()
    const projectPage = () => {
    navigate('/project')
    }
    tabTitle('Jericho Bongay - Full Stack Developer')
    return(
        <div className="w-11/12 mx-auto lg:w-10/12">
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className='pt-12 text-center order-last md:text-start md:order-first md:pt-40 lg:pt-52 lg:order-first'>
                    <h1 className='text-5xl font-bold'>Full Stack <span className='font-normal'>Developer</span></h1>
                    <p className='mt-4'>"Deleted code is debugged code."</p>
                    <button className='rounded bg-black text-white px-8 py-2 mt-6 hover:bg-[#171717]'><a href='docs/resume.pdf' target="_blank" rel="noreferrer">Resume</a></button>
                </div>
                <div className="grid place-items-center bg-black rounded-full h-5/6 w-80 mx-auto">
                    <img className="rounded-3xl w-72" src="img/me3.png" alt="developer"></img>
                </div>
            </div>
            <div className="mt-28">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 place-content-center">
                    <div className="my-20">
                        <h1 className="font-bold text-5xl text-center md:text-start md:text-8xl lg:text-start lg:text-9xl">Recent Projects</h1>
                    </div>
                    <div className="text-center mb-24 md:text-end lg:text-end">
                        <button className="w-40 h-14 bg-black mt-0 font-bold text-white hover:bg-[#171717] md:mt-36 md:mr-16 lg:mt-40 lg:mr-28" onClick={projectPage}>View All</button>
                    </div>
                </div>
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-4">
                    <div className='overflow-hidden'>
                        <a href="https://jeco18.github.io/divpro.github.io/"><img className='hover:scale-[1.2] duration-[1500ms]' src="img/project1.png" alt="Divpro" /></a>
                    </div>
                    <div className='overflow-hidden'>
                        <a href="https://project1-blush.vercel.app/"><img className='hover:scale-[1.2] duration-[1500ms]' src="img/project2.png" alt="Gadgetsiva" /></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home