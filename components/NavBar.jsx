"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Magnifying from './icons/Magnifying'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Menu from './icons/Menu'
import Aside from './Aside'
import MyContext from '@/context/myContext'
import sourcesContext from '@/context/sourcesContext'


export default function NavBar({ setQuery, setLanguage, setDomains, setHeadlines }) {
    const { sources, setSources } = useContext(sourcesContext)
    const { urls, setUrls } = useContext(MyContext)
    const [aside, setAside] = useState(false)
    const pathName = usePathname()
    const exR = /https?:\/\/(www\.)?([^\/]+)(\/[^\s]*)?/i



    const inputRef = useRef(null);

    const handleSearch = () => {
        const domainValue = inputRef.current.value;
        setDomains(domainValue)



        inputRef.current.value = '';
    };


    return (
        <>
            <nav className='flex items-center h-24 w-full border-b border-black justify-between bg-slate-950 text-white'>
                <ul className='m-5 flex  items-center gap-x-6 w-full  md:justify-normal'>
                    <li onClick={() => setAside(true)} className='text-white font-bold flex md:hidden '><Menu /></li>
                    <li className=''>
                        <img className='w-36 md:w-48' src="https://www.lagaceta.com.ar/assets/2022/images/brand.svg" alt="" />
                    </li>

                    <Aside setLanguage = {setLanguage} setHeadlines={setHeadlines} setDomains={setDomains} aside={aside} setAside={setAside} />
                    {pathName === "/Everything" &&
                        <li className='hidden md:flex'>

                            <select onClick={(e) => setLanguage(e.target.value)} className=' outline-none bg-slate-950' name="" id="">
                                <option value="en">English</option>
                                <option value="fr">French</option>
                                <option value="es">Spanish</option>
                                <option value="zh">Chinese</option>
                                <option value="ar">Arabic</option>
                                <option value="de">German</option>
                                <option value="he">Hebrew</option>
                                <option value="it">Italian</option>
                                <option value="nl">Dutch</option>
                                <option value="no">Norwegian</option>
                                <option value="pt">Portuguese</option>
                                <option value="ru">Russian</option>
                                <option value="sv">Swedish</option>
                                <option value="ud">Pakistan</option>
                            </select>
                        </li>
                    }
                    {pathName === "/Everything" &&
                        <li className='hidden md:flex'>
                            <div className="relative flex group">

                                <span className=" hover:cursor-pointer">News Source</span>


                                <div className="z-50 absolute top-6 left-0 hidden group-hover:duration-300 group-hover:block  group-hover:ease-in-out shadow-md rounded-md w-48 text-black">

                                    <ul className='z-50 px-2 overflow-y-scroll overflow-x-hidden  h-52 w-52 '>
                                        {urls && urls?.sources?.map((data) =>
                                            <option key={data?.id} onClick={(e) => e.target.tagName === "OPTION" && setDomains(e.target.value)} value={`${data.url.replace(exR, "$2")}`} className=" px-2 py-2 hover:bg-blue-900 border-b text-white bg-blue-950">{data.url.replace(exR, "$2")}</option>
                                        )}

                                    </ul>
                                </div>
                            </div>
                        </li>}
                    {pathName === "/" &&
                        <li className='hidden md:flex'>
                            <div className="relative flex group">

                                <span className=" hover:cursor-pointer">News Source</span>


                                <div className="z-50 absolute top-6 left-0 hidden group-hover:duration-300 group-hover:block  group-hover:ease-in-out shadow-md rounded-md w-48 text-black">

                                    <ul className='z-50 px-2 overflow-y-scroll overflow-x-hidden  h-52 w-52 '>
                                        {sources && sources?.sources?.map((data) =>
                                            <option key={data?.id} onClick={(e) => e.target.tagName === "OPTION" ? setHeadlines(e.target.value) : console.log(e.target.value)} value={`${data?.id}`} className=" px-2 py-2 hover:bg-blue-900 border-b text-white bg-blue-950 cursor-pointer">{data?.id}</option>
                                        )}

                                    </ul>
                                </div>
                            </div>
                        </li>}

                    <Link className='hidden md:flex' href="/Everything">
                        <li className='hover:text-md hover:duration-150 hover:font-medium'>All the notices</li>
                    </Link>
                    <Link className='hidden md:flex' href="/">
                        <li className='hover:text-md hover:duration-150 hover:font-medium'>
                            Top Headlines
                        </li>
                    </Link>
                    <li className='hidden md:flex '>
                        <div className="relative flex group">

                            <span className=" hover:cursor-pointer ">Search source</span>


                            <div className="z-50 absolute top-6 left-0 hidden opacity-0 group-hover:duration-700   group-hover:opacity-100 group-hover:block group-hover:ease-in-out shadow-md rounded-md w-full text-black ">

                                <ul className='z-50 px-2 overflow-x-hidden  h-52 w-60 bg-blue-900 rounded-xl pt-4 flex flex-col items-center'>
                                <li className='flex flex-col items-center w-full'>
                                        <input ref={inputRef} placeholder='Write it like this: google.com' id='specificDomain' className='w-full rounded-xl outline-none px-2 py-1  ' type="text" />
                                        <button onClick={handleSearch} className='w-1/2 bg-blue-500 flex justify-center items-center text-white font-bold rounded-xl py-1 mt-4'>Search</button>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </li>

                </ul>
                <div className='h-1/2  w-[30%] me-5 hidden md:flex items-center rounded-xl border border-black bg-white'>
                    <Magnifying className="text-black" />
                    <input placeholder='Busca por palabra o por frase especifica' onChange={(e) => e.target.value.length > 3 ? setQuery(e.target.value) : console.log("hello world")} id='dinamic' className='w-full h-full  rounded-e-xl outline-none ps-2 py-2 text-black' type="text" />
                </div>
            </nav>

        </>
    )
}
