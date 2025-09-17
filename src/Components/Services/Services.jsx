import React from 'react'
import icon1 from '../../images/assets/icons/obj1.png'
import icon2 from '../../images/assets/icons/obj2.png'
import icon3 from '../../images/assets/icons/obj3.png'
import { motion } from 'framer-motion'
// eslint-disable-next-line no-unused-vars
import { delay } from 'framer-motion'

export const fadeUp = (delay)=> {
  return{
    hidden: {
      y: 100,
      opacity: 0
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,

    }
  }

}
}

const servicesData = [
  {
  id: 1,
  title: "Security",
  icon: icon1,
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!`,
  delay: 0.5,
},
  {
  id: 2,
  title: "Gurantee",
  icon: icon2,
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!`,
  delay: 0.8,
},
  {
  id: 3,
  title: "Affordability",
  icon: icon3,
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!`,
  delay: 1.1,
},

]

function Services() {
  return <>
<section className='bg-gray-50 font-poppins py-8' id='Categories'>
<div className="container py-14">
  <motion.h1 
  variants={fadeUp(0.2)}
  initial="hidden"
  whileInView="show"
  className='text-3xl font-bold text-center pb-10'>SERVICES</motion.h1>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
  {servicesData.map((item,idx)=>{
    return <motion.div 
    variants={fadeUp(item.delay)}
    initial="hidden"
    whileInView="show"
    className='flex flex-col items-center justify-between p-5 max-w-[300px] mx-auto shadow-lg bg-white rounded-xl'>
      <img src={item.icon} alt="" className='w-[100px] mb-6'/>
      <div className='text-center space-y-2'>
        <h2 className='text-2xl font-bold'>{item.title}</h2>
        <p className=' text-center text-sm text-black/75 text-gray-600'>{item.description}</p>
      </div>
    </motion.div>
  })}

</div>
</div>
</section>
  </>
}

export default Services
