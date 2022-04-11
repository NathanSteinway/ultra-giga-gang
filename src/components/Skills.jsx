import React from 'react';
import HTML from '../assets/Skills Images/HTML5_Badge_256.png';
import CSS from '../assets/Skills Images/css.png';

function Skills() {
    return(
        
        <div className='w-full h-screen bg-[#261A2B] text-white-300 py-4'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl inline border-b-4 border-white-300'>Skills</p>
                </div>
                {/* Container for Skills images*/}
                <div className='w-full grid grid-cols-4 gap-2 py-4 text-center'>
                    <div>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML Logo" />
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={CSS} alt="HTML Logo" />
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML Logo" />
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML Logo" /> 
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML Logo" />   
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML Logo" />   
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML Logo" />  
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Skills;