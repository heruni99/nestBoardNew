import { PropertyCard } from '@/components/common/propertyCard'
import {HeroSection} from './components/HeroSection'

export function Home() {
  return (
    <>
      <HeroSection />
      
      <div className="grid grid-cols-3 gap-3">
        <PropertyCard
          image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=500&fit=crop"
          title="Green Villa Colombo"
          location="Colombo, Sri Lanka"
          type="House"
          price="LKR 25K"
          rating="4.5"
        />
      </div>
    </>
  )
}   