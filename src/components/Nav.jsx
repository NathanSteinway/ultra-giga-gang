import React from 'react';

function Nav() {
    return(
        <div>
            <div className='w-full h-[100px] flex justify-around items-center bg-[#F9F5F5] text-white-300'>
                <ul className='w-1/2 h-[100px] flex justify-around items-center'>

                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Skills</li>
                    <li>Contact</li>

                </ul>
            </div>
        </div>

    )
}

export default Nav;