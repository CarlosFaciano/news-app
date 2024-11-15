import React from 'react'

export default async function fetchData(url, urlDomain) {
   try {
      const data = await fetch(url? url : urlDomain)
      const rs = await data.json()
      return rs
   } catch (error) {
      return(
        <div className='h-screen w-screen flex items-center justify-center'>
         <section className='w-1/2 h-1/2 justify-center items-center font-bold bg-slate-700 text-white'>There was an error: {error.message}</section>
        </div>
      )
   }

}
