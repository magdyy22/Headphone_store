// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Headphone1 from '../../images/assets/headphone.png'
import Headphone2 from '../../images/assets/headphone2.png'
import Headphone3 from '../../images/assets/headphone3.png'
import { FaWhatsapp } from 'react-icons/fa'
// eslint-disable-next-line no-unused-vars
import {  AnimatePresence, delay, easeInOut, easeOut, motion } from 'framer-motion'


const fadeUp = (delay) => {
  return {
    hidden:{
      opacity: 0,
      y: 100,
      scale: 0.5
    },
    show:{
      opacity: 1,
      y: 0,
      scale: 1,
      transition:{
        delay: delay,
        duration: 0.5,
        ease: easeInOut,
        },
    },
    exit:{
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition:{
        duration: 0.2,
        ease: easeOut,
      },
    },
    }
 };

const HeadPhoneData = [
  { id: 1,
     image: Headphone1,
      title: 'Headphones Wireless 1',
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
       Rem ullam reiciendis maxime odit alias, quas soluta ipsam officiis,
        deleniti aliquid quam id quis in animi numquam sunt ea quia sit.`,
       price: "$100" ,
        modal: "Modal Brown",
        bgColor: "#8b5958"
  },
  { id: 2,
     image: Headphone2,
      title: 'Headphones Wireless 2',
      subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Fugit iure perspiciatis in fugiat placeat,
        officiis quam tempora hic reiciendis repellat saepe ratione eius atque officia expedita modi,
         impedit ut deleniti.`,
       price: "$100" ,
        modal: "Lime Green",
        bgColor: "#638153"
  },
  { id: 3,
     image: Headphone3,
      title: 'Headphones Wireless 3',
      subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Distinctio autem, soluta odio aliquam expedita nulla doloribus,
        voluptatem voluptatum quis beatae praesentium dolores illo provident minus, excepturi iste in reiciendis sed.`,
       price: "$100" ,
        modal: "Ocean Blue",
        bgColor: "#5d818c"
  },
  
]

function Hero() {

 const [activeData, setActiveData] = React.useState(HeadPhoneData[0]);

 const handleActiveData = (data) => {
  setActiveData(data);
 };
  return <>
  <section className='bg-brandDark text-white font-varela' id='Home'>
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]:">
    {/* HeadPhone Info */}
    <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]:'>
      <div className='space-y-5 text-center md:text-left'>
        <AnimatePresence mode='wait'>
        <motion.h1 key={activeData.id}
        variants={fadeUp(0.2)}
        initial="hidden"
        animate="show"
        exit="exit"
        className='text-3xl lg:text-6xl font-bold font-varela'>{activeData.title}</motion.h1>  
        </AnimatePresence>
      <AnimatePresence mode='wait'>
        <motion.p key={activeData.id}
        variants={fadeUp(0.3)}
        initial="hidden"
        animate="show"
        exit="exit" className='text-sm leading-loose text-white/80'>{activeData.subtitle}</motion.p>
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        <motion.button key={activeData.id}
        variants={fadeUp(0.2)}
        initial="hidden"
        animate="show"
        exit="exit" style={{backgroundColor:activeData.bgColor}} className='px-4 py-2 inline-block font-normal rounded-xl'>Listen And Buy</motion.button>
      </AnimatePresence>
        

      {/* headphone list separator */}

      <div className='flex items-center justify-center md:justify-start gap-2 !mt-24'>
        <div className='w-20 h-[1px] bg-white'></div>
        <p className='uppercase text-sm'>Top HeadPhones For You</p>
        <div className='w-20 h-[1px] bg-white'></div>
      </div>

      {/* headphone list switch */}

      <div className='grid grid-cols-3 gap-10'>
        {HeadPhoneData.map((product,idx)=>{
        
        return <div key={idx} onClick={
          ()=>handleActiveData(product)
        } className='grid grid-cols-1 place-items-center '>
          <div >
            <img src={product.image} alt="" className='w-[100px]'/>
          </div>
            <div className='space-y-2'>
              <p className='text-base font-bold'>{product.price}</p>
              <p className='text-xs font-normal text-nowrap'>{product.modal}</p>
            </div>
        </div>
        })}

      </div>
      </div>
      
    </div>
    {/* Hero Image */}
    <div className='flex flex-col justify-end items-center'>
      <AnimatePresence mode='wait'>
        <motion.img key={activeData.id}
        variants={fadeUp(0.2)}
        initial={{ opacity: 0, scale: 0.9, y: 100}}
        animate={{ opacity: 1, scale: 1, y:0}}
        transition={{duration:0.4 , delay: 0.2, ease: easeInOut }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: 100,
          transition:{
            duration:0.2,
          },
        }}
        src={activeData.image} alt="" className='w-[300px] md:w-[400px] xl:w-[550px]'/>
      </AnimatePresence>
      
    </div>
    {/* WhatsApp Icon */}
        <div >
          <a href="t" className=''>
            <FaWhatsapp className='text-3xl  fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[999] mix-blend-difference'/>
          </a>
        </div>

    </div>
  </section>
  </>
}

export default Hero
