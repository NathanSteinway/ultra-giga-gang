import React from 'react';
import Ecommerce from '../assets/Work Images/Ecommerce.jpg';
import Social from '../assets/Work Images/social.jpg';
import Weather from '../assets/Work Images/weather.jpg';
import Notes from '../assets/Work Images/notes.jpg';
import Run from '../assets/Work Images/run.jpg';
import Talk from '../assets/Work Images/talk.png';

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
                link='https://github.com/NathanSteinway/SMU_Challenge18_SocialNetworkAPI'
                />

                {/* Second Card */}
                <Card
                title='E-Commerce Backend'
                img={Ecommerce}
                link='https://github.com/NathanSteinway/SMU_Challenge_13_EcommerceBackend'
                />

                {/* Third Card */}
                <Card
                title='Weather Tracker'
                img={Weather}
                link='https://github.com/NathanSteinway/silver-umbrella'
                />

                {/* Four Card */}
                <Card
                title='Chop-It-Up'
                img={Talk}
                link='https://github.com/ragil1114/Chop-IT-Up'
                />

                {/* Five Card */}
                <Card
                title='Interactive MERN SPA project'
                img={Run}
                link='https://github.com/BurnsD/HuntressHandcraftedSoap'
                />

                {/* Sixth Card */}
                <Card
                title='Note Taker'
                img={Notes}
                link='https://github.com/NathanSteinway/SMU_Challenge_11_noteTaker'
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
          <a href={'' + props.link}>
            <button className='text-center rounded-lg'><img className='' src={props.img}  alt=''/></button>
          </a>
        </div>
      </div>
    )
  }

export default Work;