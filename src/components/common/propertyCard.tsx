import { Star } from "lucide-react"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"

export function PropertyCard() {
  return (
    <Card>
      {/* Background image */}
      <img
        src={
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=500&fit=crop"
        }
        alt={"title"}
      />
      {/* Rating badge */}
      <Badge>
        <Star />
      </Badge>

      {/* Bottom info */}
      <div>
        <Badge>House</Badge>
        <h3>Green Villa Colombo</h3>
        <p>Colombo, Sri Lanka</p>
        <p>
          <span>LKR 25K</span>
          <span> /Month</span>
        </p>
      </div>
    </Card>
  )
}
