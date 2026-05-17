"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

interface CityOption {
  city: string;
  count: number;
}

interface CityFilterProps {
  cities: CityOption[];
  selected: string | null;
  onSelect: (city: string | null) => void;
}

export function CityFilter({ cities, selected, onSelect }: CityFilterProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const totalCount = cities.reduce((s, c) => s + c.count, 0);
  const label = selected ?? "Location";

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
          selected
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        )}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-70"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border bg-popover p-1 shadow-md">
          {[{ city: "All", count: totalCount }, ...cities].map(
            ({ city, count }) => {
              const isAll = city === "All";
              const isActive = isAll ? selected === null : selected === city;
              return (
                <button
                  key={city}
                  type="button"
                  onClick={() => {
                    onSelect(isAll ? null : city);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-accent font-medium text-accent-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <span>{city}</span>
                  <span className="text-muted-foreground">({count})</span>
                </button>
              );
            },
          )}
        </div>
      )}
    </div>
  );
}
