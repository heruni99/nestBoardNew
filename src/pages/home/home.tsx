import { HeroSection } from "./components/HeroSection";
import { SearchFilters } from "./components/SearchFilters";
import { PropertyList } from "./components/PropertyList";
import { properties } from "@/data/properties";

export function Home() {
  return (
    <>
      <HeroSection />
      <SearchFilters />
      <PropertyList properties={properties} />
    </>
  );
}
