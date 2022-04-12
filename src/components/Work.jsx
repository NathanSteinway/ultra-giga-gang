import React from 'react';
import Placeholder from '../assets/me.jpg';

function Work(){
    return(
        <div className='max-w-[1000px] mx-auto justify-center text-center w-full h-full'>
            <div className='p-5'>
                <p className='text-4xl mx-auto inline border-b-4 border-white-300'>Work</p>
            </div>
            {/* Card container, Cards are generated from left to right*/}
            <div className='flex'>

                {/* First Card */}
                <Card
                title='Social Network API'
                img={Placeholder}
                />

                {/* Second Card */}
                <Card
                title='E-Commerce Backend'
                img={Placeholder}
                />

                {/* Third Card */}
                <Card
                title='Weather Tracker'
                img={Placeholder}
                />
            </div>
        </div>
    )
}

function Card(props){
    return(
      <div className='card px-5'>
        <div className='card-body'>
          <h2 className='card-title'>{props.title}</h2>
          <img src={props.img} alt=''/>
        </div>
      </div>
    )
  }

export default Work;