"use client"
import React from 'react'

export default function MainNew({image,title,description,author,handleLinkClick}) {
  return (
    <>
    <div className="relative h-[85%] md:h-[55%] w-screen group flex justify-center mb-10">
          <div className="h-full w-screen flex justify-center items-center ">
            <img className="z-1 object-cover aspect-square h-full w-full  group-hover:brightness-50 group-hover:duration-500" src={image} alt="" />
          </div>

          <section className="h-full md:h-full w-[90%] md:w-3/4 flex flex-col absolute top-0 justify-center items-center gap-y-6 ">
            <h2 className="text-transparent transition duration-700  group-hover:text-white group-hover:duration-500 text-2xl md:text-4xl font-medium text-center">{title}</h2>
            <h2 className="text-transparent transition duration-700  group-hover:text-white group-hover:duration-500 text-xl md:text-2xl font-medium text-center">{description}</h2>
            <h2 className="text-transparent transition duration-700  group-hover:text-white group-hover:duration-500 hover:text-white text-xl md:text-2xl font-medium text-center">{author}</h2>

            {/* <Link href={urlLink1}> */}
              <button onClick={()=>handleLinkClick(title)} className="mt-5 bg-sky-800 hover:duration-300 hover:ease-in-out hover:bg-sky-900 rounded-xl group-hover:duration-500 group-hover:ease-in-out opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out h-9 w-36 items-center justify-center ">Link</button>
            {/* </Link> */}

          </section>
        </div>
        </>
  )
}
