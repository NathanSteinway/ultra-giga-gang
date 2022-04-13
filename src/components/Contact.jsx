import React from 'react';

function Contact(){
    return (
        <div id='contact' className='w-full h-screen bg-[#F9F5F5] flex justify-center items-center p-5'>
            <form method='POST' action="https://getform.io/f/f3c01939-bcf9-48d9-9039-ec216a26f79e" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-5 text-center'>
                    <p className='text-4xl mx-auto inline border-b-4 border-white-300'>Contact Me!</p>
                </div>
                <input className='bg-[#261A2B] p-2' type="text" placeholder='Name' name='name' required/>
                <input className='my-5 p-2 bg-[#261A2B]' type="email" placeholder='Email' name='email' required/>
                <textarea className='bg-[#261A2B] p-2' name="message" rows="5" placeholder='Message' required></textarea>
                <button className='bg-[#261A2B] px-5 py-3 my-8 mx-auto flex items-center'>Submit</button>
            </form>
        </div>
      )
    }

export default Contact;