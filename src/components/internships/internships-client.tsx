"use client";

import { useState } from "react";
import { CityFilter } from "./city-filter";
import type { Internship } from "./featured-internship-card";
import { InternshipCard } from "./internship-card";

interface InternshipsClientProps {
  internships: Internship[];
  cities: string[];
}

export function InternshipsClient({
  internships,
  cities,
}: InternshipsClientProps) {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const filtered = selectedCity
    ? internships.filter((i) => i.city === selectedCity)
    : internships;

  return (
    <section className="flex flex-col gap-6">
      <CityFilter
        cities={cities}
        selected={selectedCity}
        onSelect={setSelectedCity}
      />
      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          No internships found in {selectedCity}.
        </p>
      )}
    </section>
  );
}
