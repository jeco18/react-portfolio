import React from "react";
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
    const navigate = useNavigate()
    const homePage = () => {
        navigate('/')
    }
    const contactPage = () => {
        navigate('/contact')
    }
    const aboutPage = () => {
        navigate('/about')
    }
    const projectPage = () => {
        navigate('/project')
    }
    const experiencePage = () => {
        navigate('/experience')
    }
    

    return(
        <div className="nav-main grid py-8 grid-cols-2 md:py-20 md:grid-cols-3 lg:grid-cols-3 lg:py-20">
            <div>
                <button className="font-semibold text-xl" onClick={homePage}>Jericho Bongay</button> <br />
                <small className="text-[#444444]">Full Stack Developer</small>
            </div>
            <div className="grid mt-4 grid-cols-4 gap-20 ml-14 order-last mt-3 place-items-center text-[#444444] sm:gap-40 md:gap-20 md:order-none md:mt-0 md:mx-auto lg:order-none lg:mt-0">
                <button className="hover:text-black hover:font-semibold" onClick={aboutPage}>About</button>
                <button className="hover:text-black hover:font-semibold" onClick={projectPage}>Project</button>
                <button className="hover:text-black hover:font-semibold" onClick={experiencePage}>Experience</button>
                <button className="hover:text-black hover:font-semibold" onClick={contactPage}>Contact</button>
            </div>
            <div className="grid grid-cols-2">
                <div></div>
                <div className="grid grid-flow-col gap-2 place-items-center text-[#444444] text-2xl">
                    <a className='hover:scale-110 hover:text-black' href="https://www.instagram.com/jeco_fsd/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                    <a className='hover:scale-110 hover:text-black' href="https://twitter.com/BongayJericho"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                    <a className='hover:scale-110 hover:text-black' href="https://www.linkedin.com/in/jericho-bongay-6193b3195"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                    <a className='hover:scale-110 hover:text-black' href="https://github.com/jeco18"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar