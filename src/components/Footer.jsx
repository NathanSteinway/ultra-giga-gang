import React from 'react';
import {FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full h-[200px] flex-col items-center justify-between px-6 py-4 bg-[#261A2B] sm:flex-row">

                <div class="flex col-sm justify-center pt-10">

                    <a className='px-2'
                    href="https://github.com/NathanSteinway" target="_blank" rel='noopener noreferrer'>
                        <FaGithub size={80}/>
                    </a>

                    <a className='px-2'
                    href="https://www.linkedin.com/in/nathan-steinway-0ab522221/" target="_blank" rel='noopener noreferrer'>
                        <FaLinkedin size={80}/>
                    </a>

                    <a className='px-2'
                    href="https://github.com/NathanSteinway" target="_blank" rel='noopener noreferrer'>
                        <FaMailBulk size={80}/>
                    </a>

                </div>
                
                <div className='text-center pt-2'>
                    <p>Created by Nathan Steinway</p>
                </div>
        </footer>
    )
}

export default Footer;