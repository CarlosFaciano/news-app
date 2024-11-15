"use client"
import fetchDomains from '@/utils/fetchDomains';
import React, { createContext, useEffect, useState } from 'react';



const MyContext = createContext();

export const MyProvider = ({ children }) => {

    const [urls, setUrls] = useState()

    const urlDomain = `https://newsapi.org/v2/top-headlines/sources?apiKey=716cffddaf1946a199d81f0d5147b014`

    useEffect(() => {
        try {
            fetchDomains(urlDomain)
                .then((el) => setUrls(el))
        } catch (error) {
            console.log(error.message)
        }


    }, [])

    return (
        <MyContext.Provider value={{ urls, setUrls }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext