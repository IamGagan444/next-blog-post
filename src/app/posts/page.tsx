import { BlogCard } from '@/components/BlogCard'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-wrap justify-evenly gap-6 my-10'>
      {
        [1,2,3,4,5,6].map((_,ind)=>{
            return <BlogCard key={ind}/>
        })
      }
    </div>
  )
}

export default page
