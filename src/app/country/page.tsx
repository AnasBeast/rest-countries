'use client'
import React, { useEffect, useState } from 'react';
import CountryInfos from './Country';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useTheme } from '../Context/ThemeContext';

interface Country {
  name: string;
  capital: string;
  population: number;
  region: string;
  flag: string;
}

const CountryPage: React.FC = () => {
  const searchParams = useSearchParams();
  const countryName = searchParams.get('name') || '';
  const {theme} = useTheme();
  
  return (
    <div className={`w-full sm:h-screen overflow-y-hidden ${theme==='dark'?"bg-background":"bg-lightback"}`}>
      <div className={`w-10/12 mx-auto py-10 `}>
      <CountryInfos countryName={countryName} />
      </div>
    </div>
  );
};

export default CountryPage;