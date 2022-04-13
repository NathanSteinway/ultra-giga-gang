import React from 'react';
import HTML from '../assets/Skills Images/HTML5_Badge_256.png';
import CSS from '../assets/Skills Images/css.png';
import Git from '../assets/Skills Images/github.png';
import Java from '../assets/Skills Images/javascript.png';
import Mongo from '../assets/Skills Images/mongo.png';
import Node from '../assets/Skills Images/node.png';
import ReactBadge from '../assets/Skills Images/react.png';
import Tailwind from '../assets/Skills Images/tailwind.png';
import MySQL from '../assets/Skills Images/mysql.png';
import Bootstrap from '../assets/Skills Images/bootstrap.png';
import Mongoose from '../assets/Skills Images/mongoose.png';
import Sequelize from '../assets/Skills Images/sequelize.png';

function Skills() {
    return(
        
        <div className='w-full h-screen bg-[#F9F5F5] text-white-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center text-center w-full h-full'>
                <div>
                    <p className='text-4xl mx-auto inline border-b-4 border-white-300'>Skills</p>
                </div>
                {/* Container for Skills images*/}
                <div className='w-full h-screen py-10 grid grid-cols-3 gap-5 text-center'>
                    <div>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML Logo" />
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS Logo" />
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={Git} alt="Git Logo" />
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={Java} alt="JavaScript Logo" /> 
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={Mongo} alt="MongoDB Logo" />   
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={Node} alt="Node.js Logo" />   
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={ReactBadge} alt="React Logo" />  
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind Logo" />  
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={MySQL} alt="MySQL Logo" />  
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap Logo" />  
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={Mongoose} alt="Mongoose Logo" />  
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={Sequelize} alt='Sequelize Logo' />
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Skills;