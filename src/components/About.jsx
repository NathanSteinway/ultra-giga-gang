import React from 'react';
import Me from '../assets/me.jpg';

function About() {

    return(

        <div className='mx-auto px-8 flex flex-col justify-center h-full'>

            <div className='text-center pt-5'>
                <h1 className='text-5xl'>NATHAN STEINWAY</h1>
            </div>

            <dive className='text-center pt-5'>
                <p>This is just the beginning.</p>
            </dive>
            
            <div className='flex mx-auto w-1/4 h-1/4 pt-5'>
                <img src={Me} className='object-scale-down' style={{ width: "100%" }} alt="cover" />
            </div>

            <div className='flex-wrap pt-5'>
                <p>Welcome to my portfolio.</p>
                <br></br>
                <p>I'm a full-stack web developer with a background in education. My love of learning has brought me to programming, and I hope that someday I can share that passion with many more!</p>
            </div>
            
        </div>
    )
}

export default About;