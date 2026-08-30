import { PropertyCard } from "@/components/common/propertyCard";
import type { Property } from "@/types/property";

interface PropertyListProps {
  properties: Property[];
}

export function PropertyList({ properties }: PropertyListProps) {
  return (
    <section className="w-full mx-auto px-4 py-8">
      <div className="w-full grid grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </section>
  );
}
