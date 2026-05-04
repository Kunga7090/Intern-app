import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { Internship } from "./featured-internship-card";

export function InternshipCard({ internship }: { internship: Internship }) {
  const card = (
    <Card className="gap-3">
      <CardHeader className="pb-0">
        <CardTitle className="text-base leading-snug">
          {internship.name}
        </CardTitle>
        <CardDescription>{internship.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
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
