"use client"
import MainNew from "@/components/MainNew";
import NavBar from "@/components/NavBar";
import fetchData from "@/utils/fetchData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa"

export default function Everything() {
  const [everything, setEverything] = useState()
  const [query, setQuery] = useState("tech")
  const [language, setLanguage] = useState("en")
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(1)
  const [domains, setDomains] = useState("")
  

  const url = `https://newsapi.org/v2/everything?q=${query}&language=${language}&pageSize=${pageSize}&page=${page}&domains=${domains}&apiKey=716cffddaf1946a199d81f0d5147b014`
  

  const handleLinkClick = (articleTitle) => {
    // Redirigir a la ruta correspondiente dinámicamente
    if (domains !== "") {
      window.location.href = `/Everything/detailedall/${query}/${encodeURIComponent(articleTitle)}/${language}/${domains}`;
    }
    else {
      window.location.href = `/Everything/withoutdomain/${query}/${encodeURIComponent(articleTitle)}/${language}`;
    }
  };
  
  useEffect(() => {
    try {
      fetchData(url)
        .then((el) => setEverything(el))
    } catch (error) {
      console.log(error.message)
    }


  }, [query, language, page, pageSize, domains])

  




  if (!everything) {
    return (
      <div className='h-screen w-screen flex flex-col justify-center items-center bg-slate-950'>
        <FaSpinner className='text-6xl text-sky-700 animate-spin mt-10' />
        <h2 className='text-2xl font-bold text-white'>Cargando</h2>
      </div>
    )

  }

  const totalPosts = everything.totalResults
  const totalPages = eval(totalPosts / pageSize)

  return (
    <div className="h-screen w-screen flex flex-col overflow-y-auto bg-slate-950 text-white overflow-x-hidden">
      <NavBar setDomains={setDomains} setQuery={setQuery} setLanguage={setLanguage} />
      <div className="flex items-center justify-around">

        <h1 className="text-white text-6xl font-bold  my-5 ">{query}</h1>

      </div>
      <div className="flex items-center justify-evenly gap-x-1 mb-5 w-full md:w-[91%]">

        <div className="text-gray-500 text-2xl  items-center gap-x-2 hidden md:flex">
          <h2 className="">News per page</h2>
          <select onClick={(e) => setPageSize(e.target.value)} className="bg-transparent" name="" id="">
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>

        <div className="flex gap-x-1">
          {page != 1 && page >= 1 &&
            <button onClick={() => setPage(prevState => prevState - 1)} className="bg-sky-800 rounded-md w-16 h-9 flex justify-center items-center hover:duration-300 hover:bg-sky-900 text-white ">Before</button>}
          <button className="bg-sky-800 rounded-md w-12 h-9 flex justify-center items-center hover:duration-300 hover:bg-sky-900 text-white">{page}</button>
          {page <= totalPages &&
            <button onClick={() => setPage(prevState => prevState + 1)} className="bg-sky-800 rounded-md w-16 h-9 flex justify-center items-center hover:duration-300 hover:bg-sky-900 text-white ">Next</button>}
        </div>

        <h2 className="text-gray-500 text-2xl hidden md:flex">{totalPosts} News</h2>
      </div>
      <div className="text-gray-500 text-2xl  items-center flex md:hidden justify-between mx-4">
        <div className="flex gap-x-2">
          <h2 className="">News per page</h2>
          <select onClick={(e) => setPageSize(e.target.value)} className="bg-transparent" name="" id="">
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>

        <div>
          <h2 className="text-gray-500 text-2xl flex">{totalPosts} News</h2>
        </div>

      </div>

      {everything ? everything.articles.map((data, index) =>
        <MainNew
          key={data.id? data?.id : data?.title}
          handleLinkClick={handleLinkClick}
          author={data?.author ? data.author : "Unknown"}
          description={data?.description? data.description : "Without description"}
          title={data?.title ? data?.title : "No title"}
          image={data?.urlToImage ? data?.urlToImage : "/INVERTIR-EN-TECNOLOGIA.png"}
        />
      ) : ""}


    </div>
  )
}
