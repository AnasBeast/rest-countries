'use client'

import HomePage from "./components/HomePage";
import { SearchProvider } from "./Context/SearchContext";
import { useTheme } from "./Context/ThemeContext";

export default function Home() {
  const {theme} = useTheme();
  return (
    <div className={`${theme==='dark'?"bg-background":"bg-lightback"}`}>
      <SearchProvider>
      <HomePage />
      </SearchProvider>
    </div>
  );
}
