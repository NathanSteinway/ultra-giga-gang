import React from 'react';
import Me from '../assets/me.jpg';

function About() {

    return(

        <div id='about' className='w-full h-full mx-auto px-8 flex flex-col text-center justify-center h-full'>

            <div className='py-5'>
                <h1 className='text-5xl'>NATHAN STEINWAY</h1>
            </div>

            <dive className='py-5'>
                <p>This is just the beginning.</p>
            </dive>
            
            <div className='flex mx-auto w-1/4 h-1/4 py-5 '>
                <img src={Me} className='rounded-full object-scale-down' style={{ width: "100%" }} alt="cover" />
            </div>

            <div className='text-left mx-auto py-5'>
                <p>Welcome to my portfolio.</p>
                <br></br>
                <p>I'm a full-stack web developer with a background in education.</p>
            </div>
            
        </div>
    )
}

export default About;