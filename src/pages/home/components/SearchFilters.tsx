import { Search, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type SearchFiltersProps = {
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function SearchFilters({ searchQuery, onSearchChange }: SearchFiltersProps) {
  return (
    <div className="relative z-20 -mt-7 px-4 w-full">
      <div className="rounded-2xl bg-white p-8 shadow-xl">
        {/* Search row */}
        <div className="mb-3 flex gap-2">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={searchQuery}
              placeholder="Search by property name or city..."
              className="h-10 rounded-xl border-gray-200 pl-9"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          <Button
            variant="ghost"
            className="h-10 gap-1.5 rounded-xl text-gray-600"
          >
            <SlidersHorizontal />
            Filters
          </Button>
        </div>
      </div>
    </div>
  )
}
