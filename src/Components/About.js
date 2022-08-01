import React from "react";
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { tabTitle } from "./generalFunctions";
import Navbar from "./Navbar";

const About = () => {
    tabTitle('About - Jericho Bongay')
    return(
        <div className="w-11/12 lg:w-10/12 mx-auto">
            <Navbar />
            <h1 className='h-44 text-5xl text-center font-bold mt-20 md:text-9xl md:text-start lg:text-9xl lg:text-start'>About</h1>
            <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2'>
            <div className='leading-loose md:w-10/12 lg:w-3/5 order-last md:order-none lg:order-none'>
                <h2 className='font-bold text-xl'>Contact</h2>
                <p>For any sort of help or inquiries, feel free to send me an <a className='font-bold underline underline-offset-4' href="mailto:bongayjericho@gmail.com">email</a> and I'll get back to you soon.</p>
                <h2 className='mt-12 font-bold text-xl'>Social Links</h2>
                <div className='social-links flex gap-4 text-2xl text-[#444444] py-4 pl-4'>
                    <a className='hover:scale-110 hover:text-black' href="https://www.facebook.com/wyd.jeco"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                    <a className='hover:scale-110 hover:text-black' href="https://www.instagram.com/jeco_fsd/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                    <a className='hover:scale-110 hover:text-black' href="https://twitter.com/BongayJericho"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                    <a className='hover:scale-110 hover:text-black' href="https://www.linkedin.com/in/jericho-bongay-6193b3195"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                    <a className='hover:scale-110 hover:text-black' href="https://github.com/jeco18"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                </div>
            </div>
            <div className='w-full leading-loose md:mb-52 lg:mb-52'>
                <p>Hello! My name is Jericho and  I enjoy creating things that live on the internet. My interest in web development started back in 2020 during the pandemic. Through watching tons of tutorials, I learned a lot about HTML & CSS.</p> <br />
                <p>I’ve had the privilege of joining a web development boot camp and enrolled in programming and web development courses to get certificates. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.</p>
                <div className='mt-12'>
                    <h2 className='font-bold'>Here are a few technologies I’ve been working: </h2>
                    <div className='grid grid-cols-3 gap-4  md:grid-cols-3 md:gap-4 lg:gap-8 lg:grid-cols-4 mt-4'>
                        <div className='w-full rounded-md bg-white p-2 h-20 shadow-md flex place-content-center'>
                            <img src="img/react.png" alt="reactjs" />
                        </div>
                        <div className='w-full rounded-md bg-white px-3 py-4 h-20 shadow-md'>
                            <img src="img/nodejs.png" alt="nodejs" />
                        </div>
                        <div className='w-full rounded-md bg-white px-7 py-2 h-20 shadow-md'>
                            <img src="img/mysql.png" alt="mysql" />
                        </div>
                        <div className='w-full rounded-md bg-white px-6 py-2 h-20 shadow-md'>
                            <img src="img/heroku.png" alt="heroku" />
                        </div>
                        <div className='w-full rounded-md bg-white px-7 py-2 h-20 shadow-md'>
                            <img src="img/js.png" alt="javascript" />
                        </div>
                        <div className='w-full rounded-md bg-white px-4 py-5 h-20 shadow-md'>
                            <img src="img/tailwind.png" alt="tailwind" />
                        </div>
                        <div className='w-full rounded-md bg-white px-4 h-20 shadow-md'>
                            <img src="img/bootstrap.png" alt="bootstrap" />
                        </div>
                        <div className='w-full rounded-md bg-white px-2 py-3 h-20 shadow-md'>
                            <img src="img/mongodb.png" alt="mongodb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer />
        </div>
    )
}

export default About