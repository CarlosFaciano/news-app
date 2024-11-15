"use client"
import React, { useContext, useEffect, useState } from 'react'
import ArrowRight from './icons/ArrowRight'
import ArrowDown from './icons/ArrowDown'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import fetchData from '@/utils/fetchData'
import MyContext from '@/context/myContext'

export default function Aside({aside, setAside}) {
    const {urls, setUrls} = useContext(MyContext)
    const [dropdown, setDropdown] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [everything, setEverything] = useState()
    const pathName = usePathname()

   
   

    const exR = /https?:\/\/(www\.)?([^\/]+)(\/[^\s]*)?/i


    
    return (
        <aside className={`${aside === true ? "flex flex-col" : "hidden" } z-50 h-screen w-3/5 bg-slate-800 text-white overflow-y-auto absolute top-0 left-0`}>
            <h2 onClick={()=>setAside(false)} className='text-white text-end font-bold text-2xl mt-2 me-4'>&times;</h2>
            <h2 className='text-white text-center font-bold text-2xl '>Filters</h2>
            <ul className='flex flex-col'>
                <li className=''>
                    <h2 onClick={() =>setDropdown(!dropdown) && setDropdown2(false)} className='transition duration-150 flex gap-x-1 items-center font-medium cursor-pointer'><span className=''>{dropdown === false ? <ArrowRight /> : <ArrowDown />}</span>Language</h2>
                    <ul className={`ms-9 ${dropdown === true ? "flex flex-col" : "hidden"}  `}>
                        <li >
                            <option className='transition duration-150 font-medium cursor-pointer hover:ease-in-out hover:bg-white hover:text-black rounded-xl w-36 px-2' value="en">English</option>
                            <option className='transition duration-150 font-medium cursor-pointer hover:ease-in-out hover:bg-white hover:text-black rounded-xl w-36 px-2' value="fr">French</option>
                            <option className='transition duration-150 font-medium cursor-pointer hover:ease-in-out hover:bg-white hover:text-black rounded-xl w-36 px-2' value="es">Spanish</option>
                            <option className='transition duration-150 font-medium cursor-pointer hover:ease-in-out hover:bg-white hover:text-black rounded-xl w-36 px-2' value="zh">Chinese</option>
                            <option className='transition duration-150 font-medium cursor-pointer hover:ease-in-out hover:bg-white hover:text-black rounded-xl w-36 px-2' value="ar">Arabic</option>
                            <option className='transition duration-150 font-medium cursor-pointer hover:ease-in-out hover:bg-white hover:text-black rounded-xl w-36 px-2' value="de">German</option>
                            <option className='transition duration-150 font-medium cursor-pointer hover:ease-in-out hover:bg-white hover:text-black rounded-xl w-36 px-2' value="he">Hebrew</option>
                            <option className='transition duration-150 font-medium cursor-pointer hover:ease-in-out hover:bg-white hover:text-black rounded-xl w-36 px-2' value="it">Italian</option>
                            <option className='transition duration-150 font-medium cursor-pointer hover:ease-in-out hover:bg-white hover:text-black rounded-xl w-36 px-2' value="nl">Dutch</option>
                            <option className='transition duration-150 font-medium cursor-pointer hover:ease-in-out hover:bg-white hover:text-black rounded-xl w-36 px-2' value="no">Norwegian</option>
                            <option className='transition duration-150 font-medium cursor-pointer hover:ease-in-out hover:bg-white hover:text-black rounded-xl w-36 px-2' value="pt">Portuguese</option>
                            <option className='transition duration-150 font-medium cursor-pointer hover:ease-in-out hover:bg-white hover:text-black rounded-xl w-36 px-2' value="ru">Russian</option>
                            <option className='transition duration-150 font-medium cursor-pointer hover:ease-in-out hover:bg-white hover:text-black rounded-xl w-36 px-2' value="sv">Swedish</option>
                            <option className='transition duration-150 font-medium cursor-pointer hover:ease-in-out hover:bg-white hover:text-black rounded-xl w-36 px-2' value="ud">Pakistan</option>
                        </li>

                    </ul>
                </li>
                <li>
                <h2 onClick={()=>setDropdown2(!dropdown2) && setDropdown(false)} className='transition duration-150 flex gap-x-1 items-center font-medium cursor-pointer'><span className=''>{dropdown2 === false ? <ArrowRight /> : <ArrowDown />}</span>News Source</h2>
                    <ul  className={`z-50 px-2 ms-9 ${dropdown2 === true ? "flex flex-col" : "hidden"}`}>
                        {urls && urls.sources.map((data)=>
                          <option key={data.id} onClick={(e) => e.target.tagName === "LI" && setDomains(e.target.value)} value="bbc.com" className=" text-white ">{data.url.replace(exR,"$2") }</option> 
                        )}
                        

                    </ul>
                </li>
                <h2 className='text-white text-center font-bold text-2xl mt-5'>Pages</h2>
                <Link className='ms-6' href="/Everything">
                        <li className='hover:text-lg hover:duration-150 hover:font-medium'>All the notices</li>
                </Link>
                <Link className='ms-6' href="/">
                        <li className='hover:text-lg hover:duration-150 hover:font-medium'>
                            Top Headlines
                        </li>
                </Link>
            </ul>
        </aside>
    )
}
