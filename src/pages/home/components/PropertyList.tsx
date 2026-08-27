import { PropertyCard } from "@/components/common/propertyCard"
import type { Property } from "@/types/property"

interface PropertyListProps {
  properties: Property[]
}

export function PropertyList({ properties }: PropertyListProps) {
  return (
    <section className="mt-6 px-8 pb-10">
      <div className="max-md grid grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </section>
  )
}
