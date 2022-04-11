import React from 'react';
import BrotherK from '../assets/IMG_20180701_155555.jpg';

function About() {

    return(

        <div className='max-w-md mx-auto px-8 flex flex-col justify-center h-full'>

            <div className='mx-auto'>
                <h1>NATHAN STEINWAY</h1>
            </div>
            
            <div>
                <img src={BrotherK} style={{ width: "100%" }} alt="cover" />
            </div>
            
        </div>
    )
}

export default About;