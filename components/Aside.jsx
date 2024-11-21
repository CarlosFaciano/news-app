"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import ArrowRight from './icons/ArrowRight'
import ArrowDown from './icons/ArrowDown'
import Link from 'next/link'
import MyContext from '@/context/myContext'
import { usePathname } from 'next/navigation'
import sourcesContext from '@/context/sourcesContext'

export default function Aside({aside, setAside, setDomains, setHeadlines, setLanguage}) {
    const {sources, setSources} = useContext(sourcesContext)
    const {urls, setUrls} = useContext(MyContext)
    const [dropdown, setDropdown] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [dropdown3, setDropdown3] = useState(false)
    const pathName = usePathname()
    
    const inputRef = useRef(null);

    const handleSearch = () => {
        const domainValue = inputRef.current.value;
        setDomains(domainValue)



        inputRef.current.value = '';
    };

   
   

    const exR = /https?:\/\/(www\.)?([^\/]+)(\/[^\s]*)?/i

   
    
    return (
        <aside className={`${aside === true ? "flex flex-col ease-out  translate-x-0 opacity-100 blur-none bg-slate-900 scale-100" : " -translate-x-full opacity-0 blur-sm bg-slate-800 scale-90" } duration-500 z-50 h-screen w-3/5 text-white overflow-y-auto absolute top-0 left-0 `}>
            <h2 onClick={()=>setAside(false) && setDropdown(false) && setDropdown2(false)} className='text-white text-end font-bold text-2xl mt-2 me-4'>&times;</h2>
            <h2 className='text-white text-center font-bold text-2xl '>Filters</h2>
            <ul className='flex flex-col'>
                {pathName === "/Everything" &&
                <li className=''>
                    <h2 onClick={() =>setDropdown(!dropdown) && setDropdown2(false)} className='transition duration-150 flex gap-x-1 items-center font-medium cursor-pointer'><span className=''>{dropdown === false ? <ArrowRight /> : <ArrowDown />}</span>Language</h2>
                    <ul className={`ms-9 ${dropdown === true ? "flex flex-col" : "hidden"}  `}>
                        <li onClick={(e) =>e.target.tagName === "OPTION" && setLanguage(e.target.value)}>
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
                </li>}
                {pathName === "/Everything" ?
                <li>
                <h2 onClick={()=>setDropdown2(!dropdown2) && setDropdown(false)} className='transition duration-150 flex gap-x-1 items-center font-medium cursor-pointer'><span className=''>{dropdown2 === false ? <ArrowRight /> : <ArrowDown />}</span>News Source</h2>
                    <ul  className={`z-50 px-2 ms-9 ${dropdown2 === true ? "flex flex-col" : "hidden"}`}>
                        {urls && urls.sources.map((data)=>
                          <option key={data.id} onClick={(e) => e.target.tagName === "OPTION" && setDomains(e.target.value)} value={`${data.url.replace(exR,"$2") }`} className=" text-white cursor-pointer transition duration-150 font-medium hover:ease-in-out hover:bg-white hover:text-black rounded-xl max-w-52 px-2">{data.url.replace(exR,"$2") }</option> 
                        )}
                        

                    </ul>
                </li>
                :
                <li>
                <h2 onClick={()=>setDropdown2(!dropdown2) && setDropdown(false)} className='transition duration-150 flex gap-x-1 items-center font-medium cursor-pointer'><span className=''>{dropdown2 === false ? <ArrowRight /> : <ArrowDown />}</span>News Source</h2>
                    <ul  className={`z-50 px-2 ms-9 ${dropdown2 === true ? "flex flex-col" : "hidden"}`}>
                        {sources && sources.sources.map((data)=>
                          <option key={data.id} onClick={(e) => e.target.tagName === "OPTION" && setHeadlines(e.target.value)} value={data?.id} className=" text-white cursor-pointer transition duration-150 font-medium hover:ease-in-out hover:bg-white hover:text-black rounded-xl max-w-52 px-2">{data?.id }</option> 
                        )}
                        

                    </ul>
                </li>}
                <li>
                <h2 onClick={()=>setDropdown3(!dropdown3)} className='transition duration-150 flex gap-x-1 items-center font-medium cursor-pointer'><span className=''>{dropdown2 === false ? <ArrowRight /> : <ArrowDown />}</span>Search Source</h2>
                    <ul  className={`z-50 px-2 ms-4 ${dropdown3 === true ? "flex flex-col items-center" : "hidden"}`}>
                        <input ref={inputRef} className='w-full rounded-xl outline-none px-2 py-1 mt-5 me-2 text-black '>
                             </input>
                        <li onClick={handleSearch} className='w-1/2 bg-blue-500 flex justify-center items-center text-white font-bold rounded-xl py-1 mt-4'>Search</li>

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
