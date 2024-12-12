"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTheme } from "../Context/ThemeContext";

interface CountryProps {
  countryName: string;
}

interface Country {
  name: string;
  flag: string;
  flags: {
    png: string;
  };
  nativeName:string,
  alpha3Code:string,
  subregion:string,
  topLevelDomain:string,
  currencies: {name: string}[],
  languages: {name: string}[],
  borders:string[],
  population: number;
  region: string;
  capital: string;

}


const CountryInfos = ({ countryName }: CountryProps) => {
  const [country, setCountry] = useState({} as Country);
  const [countries, setCountries] = useState([] as Country[])
  const router = useRouter();
  const {theme} = useTheme();
  

  useEffect(() => {
    const fetchCountry = async () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
          setCountries(data)
          const filteredCountry = data.find(
            (country: Country) => country.name == countryName
          );
          setCountry(filteredCountry);
        });
    };
    fetchCountry();
  }, [countryName]);

    const getCountryByCode = (code:string)=>{
        const borderCountry = countries.find((country: Country) => country.alpha3Code === code);
        return borderCountry ? borderCountry.name : null;
    }   
  return (
    <div className="space-y-8">
      <button
        onClick={() => router.push("/")}
        className={`${theme === "dark"?"dark:text-white bg-element":"bg-white text-gray-800"} flex gap-2 p-4 rounded-md`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>

        Back
      </button>
      <div className={`grid grid-cols-2 items-center ${theme==="dark"?"text-white":"text-gray-800"}`}>
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="w-10/12 h-full object-cover shadow-md justify-self-center"
        />
        <div className="p-8 space-y-12">
          <div>
            <h1 className="font-bold text-3xl">{country.name}</h1>
          </div>
          <div className="grid grid-cols-2">
            <div className="space-y-3">
                <p>
                    <span className="font-semibold">Native Name: </span>{country.nativeName}
                </p>
                <p>
                    <span className="font-semibold">Population: </span>{country.population}
                </p>
                <p>
                    <span className="font-semibold">Region: </span> {country.region}
                </p>
                <p>
                    <span className="font-semibold">Sub Region: </span> {country.subregion}
                </p>
                <p>
                    <span className="font-semibold">Capital: </span> {country.capital}
                </p>
            </div>

            <div className="space-y-3">
                <p>
                    <span className="font-semibold">Top Level Domain: </span> {country.topLevelDomain}
                </p>
                <p>
                    <span className="font-semibold">Currencies: </span> {country.currencies ? country.currencies.map((currency) => currency.name).join(', ') : null}
                </p>
                <p>
                    <span className="font-semibold">languages: </span> {country.languages ? country.languages.map((language) => language.name).join(', ') : null}
                </p>
            </div>
          </div>
          <div>
                <h1 className="font-semibold text-2xl">Border Countries:</h1>
                {country.borders ? (
                    <div key={"borders"} className="flex flex-wrap gap-6">
                    { country.borders ?
                        country.borders.map((border)=>{
                            return <button className={`${theme==="dark"?"bg-element dark:text-white" :"text-gray-800 bg-white"} shadow-md p-3 rounded-md`} onClick={() => router.push(`/country?name=${getCountryByCode(border)}`)}>{getCountryByCode(border)}</button>
                        })  
                        :
                        null
                    }
                </div>
                    
                ) : 
                <p>None</p>
                }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfos;
