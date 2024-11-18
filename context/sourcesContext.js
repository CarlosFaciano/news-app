"use client"
import fetchDomains from '@/utils/fetchDomains';
import React, { createContext, useEffect, useState } from 'react';



const sourcesContext = createContext();

export const MyProviderSources = ({ children }) => {

    const [sources, setSources] = useState()

    const urlDomain = `https://newsapi.org/v2/top-headlines/sources?apiKey=716cffddaf1946a199d81f0d5147b014`

    useEffect(() => {
        try {
            fetchDomains(urlDomain)
                .then((el)=> el && setSources(el))
        } catch (error) {
            console.log(error.message)
        }


    }, [])

    return (
        <sourcesContext.Provider value={{ sources, setSources }}>
            {children}
        </sourcesContext.Provider>
    );
};

export default sourcesContext