import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram,} from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import  cards from '../../images/assets/credit-cards.webp'
import { motion } from 'framer-motion' 

function Footer() {
  return <>
  <footer className='bg-primary pt-12 pb-8' id='Contact'>
    <div className="container">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white'>
       {/* company details section */}
      <motion.div
      initial= {{ opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration: 0.6 , delay: 0.2}}
      className='space-y-6'>
        <h2 className="text-3xl font-bold uppercase">Playing</h2>
        <p className='text-sm max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, 
          numquam dolores
          </p>
          <div>
            <p className='flex items-center gap-2'>
                <FaPhone className='text-2xl'/> +1 (123) 456-7890
            </p>
            <p className='flex items-center gap-2 mt-2'>
              <FaMapLocation className='text-2xl'/> 123 Main St, Anytown
            </p>
          </div>
      </motion.div>
      {/* footer links section */}
      <motion.div
      initial= {{ opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration: 0.6 , delay: 0.4}} 
      className='space-y-6'>
        <h2 className="text-3xl font-bold uppercase">Quick Links</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          <div>
          <ul className='space-y-2'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <ul className='space-y-2'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        </div>
        
      </motion.div>
      {/* social links section */}
      <motion.div 
      initial= {{ opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration: 0.6 , delay: 0.6}}
      className='space-y-6'>
        <h2 className="text-3xl font-bold uppercase">Follow Us</h2>
        <div className='flex items-center gap-3'>
          <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
          <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
          <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
          <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
        </div>
        <div className='space-y-2'>
          <p>Payment Methods</p>
          <img src={cards} alt="" className='w-[80%]'/>
        </div>
      </motion.div>
      </div>
      {/* copy right section */}
        <p className='text-center text-white mt-8 border-t-2 pt-8'>
          © 2024. All Rights Reserved || The Coding Journey
        </p> 
    </div>
  </footer>
  </>
}

export default Footer
