import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export interface Internship {
  id: string;
  name: string;
  city: string;
  type: "virtual" | "in-person";
  category: string;
  featured: boolean;
  created_at: string;
  url: string | null;
}

export function FeaturedInternshipCard({
  internship,
}: {
  internship: Internship;
}) {
  const card = (
    <Card className="border-l-4 border-l-primary gap-4">
      <CardHeader className="pb-0">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">Featured</Badge>
          <Badge variant="outline">{internship.category}</Badge>
        </div>
        <CardTitle className="text-xl">{internship.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{internship.city}</Badge>
          <Badge variant="outline">{internship.type}</Badge>
        </div>
      </CardContent>
    </Card>
  );

  if (!internship.url) return card;
  return (
    <a
      href={internship.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-opacity hover:opacity-80"
    >
      {card}
    </a>
  );
}
