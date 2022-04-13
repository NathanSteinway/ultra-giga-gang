import React from 'react';
import { Link } from 'react-scroll';

function Nav() {
    return(
        <div>
            <div className='w-full h-[100px] flex justify-around items-center bg-[#F9F5F5] text-white-300'>
                <ul className='w-1/2 h-[100px] flex justify-around items-center'>

                    <li>
                        <Link to="about" smooth={true} duration={200}>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link to='portfolio' smooth={true} duration={200}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        Resume
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={200}>
                           Contact 
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </div>

    )
}

export default Nav;