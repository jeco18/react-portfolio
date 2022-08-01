import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { tabTitle } from "./generalFunctions"

const Experience = () => {
    tabTitle('Experience - Jericho Bongay')
    return(
        <div className="w-11/12 lg:w-10/12 mx-auto">
            <Navbar />
            <div className='mb-12'>
                <h1 className='h-44 text-5xl text-center font-bold mt-20 md:text-start md:text-8xl lg:text-start lg:text-9xl'>Experience</h1>
                <h2 className='text-2xl font-bold mb-3 text-zinc-400 text-center mr-96'>2022</h2>
                <div className='shadow-xl space-y-2 py-5 px-6 lg:w-3/6 md:w-4/6 mx-auto'>
                    <h1 className='font-bold text-xl'>Graduation</h1>
                    <p className='text-gray-500'>KodeGo</p>
                    <p className='text-gray-500'>Front End Web Development Bootcamp</p>
                </div>
                <h2 className='text-2xl font-bold mb-3 text-zinc-400 text-center mr-96 mt-8'>2020</h2>
                <div className='shadow-xl space-y-2 py-5 px-6 lg:w-3/6 md:w-4/6 mx-auto'>
                    <h1 className='font-bold text-xl'>School</h1>
                    <p className='text-gray-500'>Computer Communication Development Institute</p>
                    <p className='text-gray-500'>Bachelor's degree in Computer Science.</p>
                </div>
            </div>
            <div>
            <h1 className='h-44 text-5xl text-center font-bold mt-20 md:text-start md:text-8xl lg:text-start lg:text-9xl'>Certifications</h1>
            <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                <div className='shadow-xl w-full space-y-2 py-5 px-6 lg:w-4/6 md:w-5/6 mx-auto'>
                    <h1 className='font-bold text-xl'>Front End Development</h1>
                    <p className='text-gray-500'>Udemy</p>
                    <a href='docs/fed.pdf' target="_blank" rel="noreferrer">View Certificate &rarr;</a>
                </div>
                <div className='shadow-xl w-full space-y-2 py-5 px-6 lg:w-4/6 md:w-5/6 mx-auto'>
                    <h1 className='font-bold text-xl'>MERN Stack</h1>
                    <p className='text-gray-500'>Udemy</p>
                    <a href='docs/mern.pdf' target="_blank" rel="noreferrer">View Certificate &rarr;</a>
                </div>
            </div>
            <div className='shadow-xl w-full space-y-2 py-5 px-6 mx-auto mt-4 md:mt-12 md:w-96 lg:mt-12 lg:w-96 '>
                <h1 className='font-bold text-xl'>JAVA, C++, Python Programming</h1>
                <p className='text-gray-500'>Udemy</p>
                <a href='docs/programming.pdf' target="_blank" rel="noreferrer">View Certificate &rarr;</a>
            </div>
        </div>
            <Footer />
        </div>
    )
}
export default Experience