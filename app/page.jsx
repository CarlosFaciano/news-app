"use client"
import Aside from "@/components/Aside";
import FirstNew from "@/components/FirstNew";
import MainNew from "@/components/MainNew";
import NavBar from "@/components/NavBar";
import SecondNew from "@/components/SecondNew";
import MyContext from "@/context/myContext";
import fetchData from "@/utils/fetchData";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa"



export default function Home() {
  const {urls, setUrls} = useContext(MyContext)

  const [everything, setEverything] = useState()
  const [query, setQuery] = useState("tech")
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(1)
  
  

  const url = `https://newsapi.org/v2/top-headlines?q=${query}&pageSize=${pageSize}&page=${page}&apiKey=716cffddaf1946a199d81f0d5147b014`
  
  
  const handleLinkClick = (articleTitle) => {
    
    window.location.href = `/detailedNews/${query}/${encodeURIComponent(articleTitle)}`;
  };

  useEffect(() => {
    try {
      fetchData(url)
      .then((el) => setEverything(el))
    } catch (error) {
      console.log(error.message)
    }
    

  }, [query,page,pageSize])
  
  
  
  
  
  if (!everything) {
    return (
      <div className='h-screen w-screen flex flex-col justify-center items-center bg-slate-950'>
        <FaSpinner className='text-6xl text-sky-700 animate-spin mt-10' />
        <h2 className='text-2xl font-bold text-white'>Cargando</h2>
      </div>
    )

  }

  if (everything === "") {
    return (
      <div className="h-screen w-screen items-center justify-center">
        <h2 className="text-6xl text-white">There&apos;s no results for that search or there was an error fetching data</h2>
      </div>
    )
  }
   
  const totalPosts = everything.totalResults
  const totalPages = Math.ceil(totalPosts / pageSize)
  
  

    

 
  return (
    <>
       
      <div className="h-screen w-screen flex flex-col overflow-y-auto bg-slate-950 text-white overflow-x-hidden">
        <NavBar setQuery={setQuery} />
        <div className="flex items-center mx-auto gap-x-16">
          <div className="text-gray-500 text-2xl ms-4 flex items-center gap-x-2 flex-wrap md:flex-nowrap">
            <h2 className="">News per page</h2>
            <select onClick={(e)=>setPageSize(e.target.value)} className="bg-transparent" name="" id="">
              <option  value="10">10</option>
              <option  value="15">15</option>
              <option  value="20">20</option>
              <option  value="25">25</option>
            </select>
            </div>
          <h1 className="text-white text-6xl font-bold  my-5 ">Top Headlines</h1>
          <h2 className="text-gray-500 text-2xl gap-x-2 me-4">{totalPosts} News</h2>
        </div>
        <div className="flex items-center justify-center gap-x-1 mb-5">
          {page != 1 && page >=1 &&
          <button onClick={() => setPage(prevState => prevState - 1)} className="bg-sky-800 rounded-md w-16 h-9 flex justify-center items-center hover:duration-300 hover:bg-sky-900 text-white ">Before</button>}
          <button className="bg-sky-800 rounded-md w-12 h-9 flex justify-center items-center hover:duration-300 hover:bg-sky-900 text-white">{page}</button>
          {page <= totalPages &&
          <button onClick={() => setPage(prevState => prevState + 1)} className="bg-sky-800 rounded-md w-16 h-9 flex justify-center items-center hover:duration-300 hover:bg-sky-900 text-white ">Next</button>}

        </div>
        {everything?.articles ? everything.articles.map((data) =>

          <MainNew
            key={data.id}
            handleLinkClick={handleLinkClick}
            author={data.author? data?.author : "Unknown"}
            description={data?.description? data.description : "There&apos;s no description"}
            title={data?.title? data?.title : "This notice doesn&apos;t have a title"}
            image={data?.urlToImage ? data?.urlToImage : "/INVERTIR-EN-TECNOLOGIA.png"} />


        ) : ""}

      </div>
    </>
  )
}
