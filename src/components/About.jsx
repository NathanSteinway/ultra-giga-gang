import React from 'react';
import Me from '../assets/me.jpg';

function About() {

    return(

        <div className='mx-auto px-8 flex flex-col justify-center h-full'>

            <div className='text-center'>
                <h1 className='text-5xl'>NATHAN STEINWAY</h1>
            </div>
            
            <div className='container mx-auto w-1/4 h-1/4'>
                <img src={Me} className='object-scale-down' style={{ width: "100%" }} alt="cover" />
            </div>
            
        </div>
    )
}

export default About;