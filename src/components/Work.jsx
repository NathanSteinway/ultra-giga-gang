import React from 'react';
import Ecommerce from '../assets/Work Images/Ecommerce.jpg';
import Social from '../assets/Work Images/social.jpg';
import Weather from '../assets/Work Images/weather.jpg';

function Work(){
    return(
        <div className='max-w-[1000px] h-[400px] mx-auto justify-center text-center'>
            <div className='p-5'>
                <p className='text-4xl mx-auto inline border-b-4 border-white-300'>Work</p>
            </div>
            {/* Card container, Cards are generated from left to right*/}
            <div className='flex'>

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