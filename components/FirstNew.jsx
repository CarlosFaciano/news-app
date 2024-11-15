import React from 'react'

export default function FirstNew({image,title,description,author,handleLinkClick}) {
  return (
    <div className=" h-full w-screen flex justify-evenly group transition duration-300 mt-5 ">
          <article className="w-[30%] h-[600px]   m-2 group-hover:h-[605px] group-hover:w-[32%] group-hover:duration-300">
            <img className="object-cover w-full h-full rounded-lg " src={image} alt="" />
          </article>
          <section className="flex flex-col items-center w-1/2 mb-2 me-2">
            <h2 className="font-bold text-6xl pt-6 pb-8 text-center">{title}</h2>
            <p className="font-medium text-2xl text-center">{description}</p>
            {/* <Link className="mt-auto mb-5" href={urlLink2}> */}
              <button onClick={()=>handleLinkClick(title)} className="mt-auto mb-5 bg-sky-800 hover:duration-300 hover:ease-in-out hover:bg-sky-900 rounded-xl flex items-center justify-center h-9 w-36">Link
              </button>
            {/* </Link> */}
          </section>

        </div>
  )
}
