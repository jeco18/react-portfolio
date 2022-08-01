import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { tabTitle } from "./generalFunctions"

const Contact = () => {
    tabTitle('Contact - Jericho Bongay')
    return(
        <div className="w-11/12 mx-auto lg:w-10/12">
            <Navbar />
            <h1 className='mb-5 text-5xl text-center font-bold mt-20 md:text-start md:text-9xl md:h-44 lg:h-44 lg:text-start lg:text-9xl'>Contact <span className='font-thin text-5xl'>me</span></h1>
            <div className='text-center h-[22rem] leading-loose md:h-80 lg:h-72 md:text-start md:pl-14 lg:text-start lg:pl-14'>
                <h2 className='text-3xl font-medium mb-4'>Get in touch.</h2>
                <p>If you have a question or just want to say hi, feel free to send me an <a className='font-bold underline underline-offset-4' href="mailto:bongayjericho@gmail.com">email</a>, <br /> I’ll try my best to get back to you!</p>
                <p className='font-normal text-sm mt-14'>bongayjericho@gmail.com</p>
            </div>
            <Footer />
        </div>
    )
}
export default Contact