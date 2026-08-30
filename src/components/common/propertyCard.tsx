import { Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import type { Property } from "@/types/property";

export function PropertyCard(props: Property) {
  return (
    <Card
      // overflow-hidden keeps the image inside the rounded corners
      className="relative cursor-pointer overflow-hidden rounded-2xl p-0 ring-0"
      style={{ aspectRatio: "1/1" }}
    >
      {/* Background image (Base layer: z-0) */}
      <img
        src={props.image}
        alt={props.title}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* Gradient overlay (Middle layer: z-10) */}
      {/* FIXED: Changed bg-linear-to-t to bg-gradient-to-t */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* Rating badge (Top layer: z-20) */}
      <Badge className="absolute top-2.5 right-2.5 z-20 h-auto gap-1 border-0 bg-white/90 py-0.5 text-gray-800 backdrop-blur-sm">
        <Star className="size-3 fill-yellow-400 text-yellow-400" />
        {props.rating}
      </Badge>

      {/* Bottom info (Top layer: z-20) */}
      {/* FIXED: Added absolute bottom-0 and z-20 so it never hides behind the image */}
      <div className="relative z-20 flex h-full flex-col justify-end p-3">
        <Badge
          variant="secondary"
          className="mb-1.5 h-auto border-0 bg-white/25 text-[10px] tracking-wider text-white uppercase backdrop-blur-sm hover:bg-white/25"
        >
          {props.type}
        </Badge>
        <h3 className="text-lg leading-snug font-bold text-white">
          {props.title}
        </h3>
        <p className="mb-1.5 text-[12px] text-white/65">{props.location}</p>
        <p className="text-lg text-white">
          <span className="font-bold">{props.price}</span>
          <span className="text-[12px] text-white/60"> /Month</span>
        </p>
      </div>
    </Card>
  );
}
