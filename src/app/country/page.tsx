'use client'
import React, { Suspense } from 'react';
import CountryInfos from './Country';
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
  const { theme } = useTheme();

  return (
    <div className={`w-full sm:h-screen overflow-y-hidden ${theme === 'dark' ? "bg-background" : "bg-lightback"}`}>
      <div className={`w-10/12 mx-auto py-10`}>
        <Suspense fallback={<div>Loading...</div>}>
          <CountryInfoWrapper />
        </Suspense>
      </div>
    </div>
  );
};

const CountryInfoWrapper: React.FC = () => {
  const searchParams = useSearchParams();
  const countryName = searchParams.get('name') || '';

  return <CountryInfos countryName={countryName} />;
};

export default CountryPage;