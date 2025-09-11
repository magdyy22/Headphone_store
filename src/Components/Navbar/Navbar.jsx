// import React from 'react'
import { MdMenu } from 'react-icons/md'
import { SlEarphones } from 'react-icons/sl'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'




function Navbar() {

  return <>
  <div className='bg-brandDark text-white py-8 font-varela'>
   <motion.nav 
    initial= {{opacity: 0}}
    animate = {{opacity: 1}}
    transition={{duration: 1 , delay: 0.5}}
    className=' container flex justify-between items-center'>
    {/* logo section */}
    <div >
      <a href="{it}" className='text-xl font-bold '>
        PLAYING / <span className='font-extralight text-white/70'>MARKET</span>
      </a>
    </div>
    {/* menu section */}
    <nav className='container'>
      <ul className='flex justify-between '>
       <Link to='Home' smooth={true} duration={700} href='#'><li>Home</li></Link> 
       <Link to='Categories' smooth={true} duration={700} href='#'><li>Categories</li></Link> 
       <Link to='About' smooth={true} duration={700} href='#'><li>About</li></Link> 
       <Link to='Blog' smooth={true} duration={700} href='#'><li>Blog</li></Link> 
       <Link to='Contact' smooth={true} duration={700} href='#'><li>Contact</li></Link> 
       <button className='text-xl ps-14'>
      <SlEarphones/>
    </button>
      </ul>
    </nav>
    {/* mobile hamburger section */}
    <div className='md:hidden text-4xl'>
      <MdMenu/>
    </div>
  </motion.nav> 
  </div>
  </>
}

export default Navbar
