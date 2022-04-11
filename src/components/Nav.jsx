import React from 'react';

function Nav() {
    return(
        <header>
            <nav>
                <ul className='fixed w-full h-[100px] flex justify-evenly items-center px-4 bg-[#F9F5F5] text-white-300'>

                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Skills</li>
                    <li>Contact</li>

                </ul>
            </nav>
        </header>
    )
}

export default Nav;