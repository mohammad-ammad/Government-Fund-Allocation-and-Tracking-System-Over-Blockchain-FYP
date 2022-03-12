import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <nav className='navbar__wrapper'>
        <div className='navbar__wrapper-logo'>
            
        <i class='bx bxl-bitcoin'></i> GFATS
        </div>
        <div className='navbar_wrapper-menu'>
            <HiMenuAlt4 onClick={()=>setToggle(true)}/>
            {toggle && (
                <motion.div
                whileInView={{x:[300,0]}}
                transition={{duration: 0.85, ease: 'easeOut'}}
                >
                    <HiX onClick={()=>setToggle(false)}/>
                    <ul className='navbar__wrapper-navigation'>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        {['about','how to use','benefits','sign-in'].map((item)=>(
                            <li key={`link-${item}`}>
                                {item == 'sign-in' ?
                                <Link to={`/${item}`}>{item}</Link>
                                :
                                <a href={`#${item}`}>{item}</a>
                            }
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar