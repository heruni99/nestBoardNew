import { HeroSection } from "./components/HeroSection";
import { SearchFilters } from "./components/SearchFilters";
import { PropertyList } from "./components/PropertyList";
import { properties } from "@/data/properties";
import { useState } from "react";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProperties = properties.filter((p) => {
    return (
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <>
      <HeroSection />
      <SearchFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <PropertyList properties={filteredProperties} />
    </>
  )
}
