"use client"
import React from 'react'

export default function MainNew({image,title,description,author,handleLinkClick}) {
  return (
    <>
    <div className="relative h-[65%] md:h-[55%] w-screen group flex justify-center mb-10">
          <div className="h-full w-screen flex justify-center items-center ">
            <img className="z-1 object-cover aspect-square h-full w-full  group-hover:brightness-50 group-hover:duration-500" src={image} alt="" />
          </div>

          <section className="h-full w-[100%] md:w-3/4 flex flex-col absolute top-0 justify-center items-center gap-y-6 ">
            <h2 className="text-transparent transition duration-700  group-hover:text-white group-hover:duration-500 text-4xl font-medium text-center">{title}</h2>
            <h2 className="text-transparent transition duration-700  group-hover:text-white group-hover:duration-500 text-2xl font-medium text-center">{description}</h2>
            <h2 className="text-transparent transition duration-700  group-hover:text-white group-hover:duration-500 hover:text-white text-2xl font-medium">{author}</h2>

            {/* <Link href={urlLink1}> */}
              <button onClick={()=>handleLinkClick(title)} className="mt-5 bg-sky-800 hover:duration-300 hover:ease-in-out hover:bg-sky-900 rounded-xl hidden items-center justify-center h-9 w-36 group-hover:flex group-hover:duration-500 group-hover:ease-in-out">Link</button>
            {/* </Link> */}

          </section>
        </div>
        </>
  )
}
