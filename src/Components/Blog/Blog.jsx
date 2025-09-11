import React from 'react'
import Blog1 from '../../images/assets/blogs/blog1.jpg'
import Blog2 from '../../images/assets/blogs/blog2.jpg'
import Blog3 from '../../images/assets/blogs/blog3.jpg'
import Blog4 from '../../images/assets/blogs/blog4.jpg'


const blogsData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    image: Blog1,
    link: "#"
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    image: Blog2,
    link: "#"
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    image: Blog3,
    link: "#"
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    image: Blog4,
    link: "#"
  }
]

function Blog() {
  return <>
  <section className='bg-gray-50' id='Blog'>
    <div className="container py-14">
      <h2 className='text-3xl font-bold text-center pb-8 font-poppins'>Blogs</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
      {blogsData.map((item,idx)=>{
        return <div key={idx} 
        className='flex flex-col items-center
        justify-center gap-6 p-5 max-w-[300px]
        mx-auto shadow-lg rounded-md 
        bg-white hover:-translate-y-2 duration-300'>
          <img src={item.image} alt="" />
          <div className='space-y-2'>
            <h3 className='text-xl font-bold line-clamp-2 text-center'>{item.title}</h3>
            <p className='line-clamp-2'>{item.description}</p>
          </div>
        </div>
      })}
      </div>
    </div>
  </section>
  </>
}

export default Blog
