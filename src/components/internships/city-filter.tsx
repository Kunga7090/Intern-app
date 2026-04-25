import { cn } from "~/lib/utils";

interface CityFilterProps {
  cities: string[];
  selected: string | null;
  onSelect: (city: string | null) => void;
}

export function CityFilter({ cities, selected, onSelect }: CityFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {["All", ...cities].map((city) => {
        const isAll = city === "All";
        const isActive = isAll ? selected === null : selected === city;
        return (
          <button
            key={city}
            type="button"
            onClick={() => onSelect(isAll ? null : city)}
            className={cn(
              "shrink-0 rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            {city}
          </button>
        );
      })}
    </div>
  );
}
