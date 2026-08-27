import { Search, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchFilters() {
  return (
    <div className="relative z-20 -mt-7 px-4">
      <div className="rounded-2xl bg-white p-8 shadow-xl">
        {/* Search row */}
        <div className="mb-3 flex gap-2">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by property name or city..."
              className="h-10 rounded-xl border-gray-200 pl-9"
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
