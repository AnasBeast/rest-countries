'use client'
import React, { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar'
import Countries from './Countries'
import { useSearch } from '../Context/SearchContext'
import { useTheme } from '../Context/ThemeContext';

interface Country {
    name: string,
    flags: {
        png: string
    },
    population: number,
    region: string,
    capital: string,
}

const HomePage = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [displayedCountries, setDisplayedCountries] = useState<Country[]>([]);
    const [limit, setLimit] = useState<number>(1);
    const { searchQuery, filter} = useSearch();
    const { theme } = useTheme();

    useEffect(() => {
        const fetchCountries = async () => {
            fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const filteredCountries = data.filter((country:Country) => 
                    country.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                    country.region.toLowerCase().includes(filter.toLowerCase())
                );
                searchQuery!==""?setLimit(1):null;
                setCountries(filteredCountries);
            });
        };
        fetchCountries();
    }, [searchQuery, filter]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setDisplayedCountries(countries.slice((limit - 1) * 12, limit * 12));
    }, [countries, limit]);


    return (
        <div className='w-10/12 space-y-8 mx-auto'>
            <SearchBar />
            <Countries countries={displayedCountries} />
            <div className={`flex justify-between py-8 ${theme === 'dark'?"text-white":"text-gray-800"}`}>
                <button onClick={() => limit==1?null:setLimit(limit-1)} className={`${theme==='dark'?"bg-element":"bg-white"} shadow-md p-4 rounded-md`}>Previous ({limit-1})</button>
                <button onClick={() => limit==Math.round(countries.length/12)?null:setLimit(limit+1)} className={`${theme==='dark'?"bg-element":"bg-white"} shadow-md p-4 rounded-md`}>Next ({limit})</button>
            </div>
        </div>
    )
}

export default HomePage
