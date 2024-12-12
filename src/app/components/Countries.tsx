'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from '../Context/ThemeContext'

interface Country {
    name: string,
    flags: {
        png: string
    },
    population: number,
    region: string,
    capital: string,
}
interface Props {
    countries: Country[]
}

const Countries = ({ countries }: Props) => {
    const router = useRouter();
    const {theme} = useTheme();
    return (
        <div>
            {countries.length==0?
                <div className='text-3xl w-full text-center'>No countries found</div>
                :
                <div className='grid grid-cols-4 gap-12'>
                {countries.map((country: Country) => (
                    <div 
                        key={country.name}
                        className={`rounded-md shadow-xl hover:shadow-2xl cursor-pointer ${theme === 'dark' ? 'bg-element' : 'bg-white'}`}
                        onClick={()=>router.push(`/country?name=${country.name}`)}
                    >
                        <img
                            src={country.flags.png}
                            alt={`${country.name} flag`}
                            className='w-full h-64 object-cover'
                        />
                        <div className='p-8'>
                            <h1 className={`font-bold text-3xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{country.name}</h1>
                            <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}><span className='font-semibold'>Population: </span> {country.population}</p>
                            <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}><span className='font-semibold'>Region: </span> {country.region}</p>
                            <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}><span className='font-semibold'>Capital: </span> {country.capital}</p>
                            
                        </div>
                    </div>
                ))}
                </div>
            }
        </div>
    )
}

export default Countries
