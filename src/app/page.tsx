import { BlogCard } from "@/components/BlogCard";
import { GridBackground } from "@/components/Gridbackground";
import { Moving } from "@/components/Moving";
import { TypeEffect } from "@/components/TypeEffect";

import Image from "next/image";

export default function Home() {
  return (
    <main >
    <GridBackground/>
    <div className='flex flex-wrap justify-evenly gap-6 my-10'>
      {
        [1,2,3,4,5,6].map((_,ind)=>{
            return <BlogCard key={ind}/>
        })
      }
    </div>
    <Moving/>
   
 
    </main>
  );
}
