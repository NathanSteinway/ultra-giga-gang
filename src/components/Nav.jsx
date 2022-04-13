import React from 'react';
import {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Nav() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return(
        <div className='w-full h-[100px] flex justify-around items-center bg-[#F9F5F5] text-white-300'>
            
                <ul className='w-1/2 h-[100px] flex justify-around items-center hidden md:flex'>

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
                        <Link to='contact' smooth={true} duration={200}>
                           Contact 
                        </Link>
                    </li>
                    
                </ul>

                <div onClick={handleClick} className='md:hidden z-10'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                <ul
                    className={
                        !nav
                            ? 'hidden'
                            : 'absolute top-0 left-0 w-full h-screen bg-[#3EB489] flex flex-col justify-center items-center'
                    }
                >
                    <li>
                        <Link onClick={handleClick} to="about" smooth={true} duration={200}>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} to='portfolio' smooth={true} duration={200}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} to='contact' smooth={true} duration={200}>
                           Contact 
                        </Link>
                    </li>
                </ul>

        </div>

    )
}

export default Nav;