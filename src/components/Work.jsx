import React from 'react';
import Ecommerce from '../assets/Work Images/Ecommerce.jpg';
import Social from '../assets/Work Images/social.jpg';
import Weather from '../assets/Work Images/weather.jpg';

function Work(){
    return(
        <div id='portfolio' className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center text-center w-full h-full'>
            <div className='p-5'>
                <p className='text-4xl mx-auto inline border-b-4 border-white-300'>Portfolio</p>
            </div>
            {/* Card container, Cards are generated from left to right*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* First Card */}
                <Card
                title='Social Network API'
                img={Social}
                />

                {/* Second Card */}
                <Card
                title='E-Commerce Backend'
                img={Ecommerce}
                />

                {/* Third Card */}
                <Card
                title='Weather Tracker'
                img={Weather}
                />

                {/* Four Card */}
                <Card
                title='Chop-It-Up'
                img={Weather}
                />

                {/* Five Card */}
                <Card
                title='Run-Buddy'
                img={Weather}
                />

                {/* Sixth Card */}
                <Card
                title='Note Taker'
                img={Weather}
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
          <img className='' src={props.img}  alt=''/>
        </div>
      </div>
    )
  }

export default Work;