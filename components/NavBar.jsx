"use client"
import React, { useContext, useEffect, useState } from 'react'
import Modal from './Modal'
import Magnifying from './icons/Magnifying'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Menu from './icons/Menu'
import fetchData from '@/utils/fetchData'
import fetchDomains from '@/utils/fetchDomains'
import Aside from './Aside'
import MyContext from '@/context/myContext'


export default function NavBar({ setQuery, setLanguage, setDomains }) {

    const { urls, setUrls } = useContext(MyContext)
    const [aside, setAside] = useState(false)
    const pathName = usePathname()
    const exR = /https?:\/\/(www\.)?([^\/]+)(\/[^\s]*)?/i
    /* const urlDomain=`https://newsapi.org/v2/top-headlines/sources?apiKey=a89f4b9d029844f4a3df7764ec28a592` */

    console.log(urls)



    console.log(urls)
    return (
        <>
            <nav className='flex items-center h-24 w-full border-b border-black justify-between bg-slate-950 text-white'>
                <ul className='m-5 flex  items-center gap-x-6 w-full  md:justify-normal'>
                    <li onClick={() => setAside(true)} className='text-white font-bold flex md:hidden '><Menu /></li>
                    <li className=''>
                        <img className='w-36 md:w-48' src="https://www.lagaceta.com.ar/assets/2022/images/brand.svg" alt="" />
                    </li>

                    <Aside aside={aside} setAside={setAside} />
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
                    </li>
                    <Link className='hidden md:flex' href="/Everything">
                        <li className='hover:text-lg hover:duration-150 hover:font-medium'>All the notices</li>
                    </Link>
                    <Link className='hidden md:flex' href="/">
                        <li className='hover:text-lg hover:duration-150 hover:font-medium'>
                            Top Headlines
                        </li>
                    </Link>

                </ul>
                <div className='h-1/2  w-[30%] me-5 hidden md:flex items-center rounded-xl border border-black bg-white'>
                    <Magnifying className="text-black" />
                    <input placeholder='Busca por palabra o por frase especifica' onChange={(e) => e.target.value.length > 3 && setQuery(e.target.value)} id='dinamic' className='w-full h-full  rounded-e-xl outline-none ps-2 py-2 text-black' type="text" />
                </div>
            </nav>

        </>
    )
}
