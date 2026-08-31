import { HeroSection } from "./components/HeroSection";
import { SearchFilters } from "./components/SearchFilters";
import { PropertyList } from "./components/PropertyList";
import { properties } from "@/data/properties";
import { useState } from "react";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  
  // Function that gets triggered when search changes
  const handleSearchChange = (query: string) => {
    setSearchQuery(query) // Update the local state with the new search query
    console.log("Search query changed:", query) // Log the updated query
  }
  
  return (
    <>
      <HeroSection />
      <SearchFilters onSearchChange={handleSearchChange} />
      <h3 className="text-center">{searchQuery}</h3>
      <PropertyList properties={properties} />
    </>
  );
}
