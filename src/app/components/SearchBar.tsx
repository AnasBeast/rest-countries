'use client'
import React, { useState, useEffect } from "react";
import { useSearch } from '../Context/SearchContext';
import { useTheme } from "../Context/ThemeContext";

export const SearchBar = () => {
    const { searchQuery, setSearchQuery, filter, setFilter } = useSearch();
    const {theme} = useTheme();
    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        console.log(e.target.value);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
        console.log(e.target.value);
    };

    useEffect(() => {
        // Any client-side only logic can go here
    }, []);

    return (
        <div className="flex sm:flex-row gap-4 flex-col justify-between py-10">
            <div className={`flex ${theme === 'dark' ? 'dark:bg-element' : 'bg-white'} shadow-md p-4 gap-4 rounded-md`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="gray"
                    className="size-6 cursor-pointer"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={search}
                    placeholder="Search for a country..."
                    className={`bg-transparent ${theme === 'dark' ? 'bg-element text-white' : 'bg-white text-gray-800'} outline-none md:w-96`}
                />
            </div>
            <div>
                <select value={filter} onChange={handleFilterChange} name="" id="" 
                    className={`${theme === 'dark'?"bg-element dark:text-white":"bg-white text-gray-800 "} font-semibold 
                    sm:w-52 rounded-md shadow-md hover:shadow-lg cursor-pointer gap-4 p-4 outline-none border-none`}>
                    <option disabled selected={true}>Filter By Region</option>
                    <option value="">WordlWide</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>

            </div>
        </div>
    );
};
