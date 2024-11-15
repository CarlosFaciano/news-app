"use client"
import ArrowLeft from '@/components/icons/ArrowLeft'
import fetchData from '@/utils/fetchData'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {FaSpinner} from "react-icons/fa"

export default function WithoutDomain() {
  let { title, query, language} = useParams()
  title = decodeURIComponent(title)
  const [specific, setSpecific] = useState()
  const [domains, setDomains] = useState("")
  const url = `https://newsapi.org/v2/everything?q=${query}&language=${language}&domains=${domains}&apiKey=716cffddaf1946a199d81f0d5147b014`

  useEffect(() => {
    try {
        fetchData(url)
      .then((el) => setSpecific(el))
    } catch (error) {
        console.log(error.message)
    }
    
  }, [title, specific])


  const filter = () => {
    const copy = { ...specific }

    const filter = copy?.articles?.filter((data) => data.title === title ? setSpecific(data) : "")

  }
  filter()

  useEffect(() => {
     try {
        setSpecific(filter)
     } catch (error) {
        console.log(error.message)
     }
    
  }, [title])
   
  const options = { weekday: "short", day: "numeric", month: "short", year: "numeric" }

  if(!specific){
    return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-slate-950'>
        <FaSpinner className='text-6xl text-sky-700 animate-spin mt-10'/>
        <h2 className='text-2xl font-bold text-white'>Cargando</h2>
    </div>
    )
  }

  return (
    <div className='h-screen w-screen flex flex-col bg-slate-950 overflow-x-hidden items-center overflow-y-auto'>
      <h2 className='text-white font-bold text-6xl text-center mt-5 w-[60%]'>{specific?.title === title ? specific?.title : ""}</h2>
      <div key={specific?.title} className='h-2/4 w-screen'><img className='object-contain rounded-xl w-full h-full py-10' src={`${specific?.urlToImage !== null ? specific?.urlToImage : "/INVERTIR-EN-TECNOLOGIA.png"}`} alt="" /></div>

      <h2 className='text-gray-500 font-medium text-3xl text-center mt-4 mb-8 w-[60%]'>{specific?.description}</h2>
      <h2 className='text-white font-medium text-3xl text-center w-[60%]'>{specific?.content}</h2>
      <button className="mt-5 bg-sky-800 hover:duration-300 hover:ease-in-out hover:bg-sky-900 rounded-xl  items-center justify-center h-9 w-36 text-white py-2">
        <a href={`${specific?.url}`}>Link</a>
      </button>
      <h2 className='text-gray-600 font-medium text-xl w-full text-start ms-2'>{specific?.author !== null ? specific?.author : "Unknown"}, {new Date(specific?.publishedAt).toDateString("en-US", options)}</h2>
      <div className='text-start w-full flex items-center m-4 text-white'>
        <Link className='flex gap-x-2 ms-4' href="/Everything">
          <ArrowLeft />
          Go back to All the notices
        </Link>
      </div>
    </div>
  )
}