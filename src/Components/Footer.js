import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {  
    return(
        <div className='container mx-auto mt-32 mb-5'>
            <hr className='mb-5' />
            <div className='grid grid-cols-2'>
                <div className='brand-name place-item-center font-bold'>
                    <h1>Jericho Bongay.</h1>
                </div>
                <div className='grid grid-cols-2 place-items-center'>
                    <div></div>
                    <div className="grid grid-flow-col -ml-8 gap-3 md:gap-6 lg:gap-6 text-[#444444] text-2xl">
                        <a className='hover:scale-110 hover:text-black' href="https://www.instagram.com/jeco_fsd/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                        <a className='hover:scale-110 hover:text-black' href="https://twitter.com/BongayJericho"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                        <a className='hover:scale-110 hover:text-black' href="https://www.linkedin.com/in/jericho-bongay-6193b3195"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                        <a className='hover:scale-110 hover:text-black' href="https://github.com/jeco18"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer