import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { formatDate } from "~/lib/dates";

export interface Internship {
  id: string;
  name: string;
  city: string;
  type: "virtual" | "in-person";
  category: string;
  featured: boolean;
  created_at: string;
  url: string | null;
  deadline?: string | null;
  application_opens?: string | null;
}

export function FeaturedInternshipCard({
  internship,
}: {
  internship: Internship;
}) {
  const deadlineText = internship.deadline
    ? formatDate(internship.deadline)
    : null;
  const opensText = internship.application_opens
    ? formatDate(internship.application_opens)
    : null;

  const card = (
    <Card className="border-l-4 border-l-primary gap-0">
      <CardHeader className="pb-0">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">Featured</Badge>
          <Badge variant="outline">{internship.category}</Badge>
        </div>
        <CardTitle className="text-xl">{internship.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-0">
        <div className="flex flex-wrap items-center gap-2 py-3">
          <Badge variant="secondary">{internship.city}</Badge>
          <Badge variant="outline">{internship.type}</Badge>
        </div>
        <div className="border-t pt-3 flex gap-6">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Application Deadline
            </span>
            <span className="text-sm text-foreground">
              {deadlineText ?? "—"}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Applications Open
            </span>
            <span className="text-sm text-foreground">{opensText ?? "—"}</span>
          </div>
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
