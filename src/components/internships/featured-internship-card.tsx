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
  deadline: string | null;
  application_opens: string | null;
}

export function FeaturedInternshipCard({
  internship,
}: {
  internship: Internship;
}) {
  const todayISO = new Date().toISOString().slice(0, 10);
  const deadlineFuture =
    internship.deadline !== null && internship.deadline >= todayISO;
  const opensFuture =
    internship.application_opens !== null &&
    internship.application_opens >= todayISO;
  const opensPast =
    internship.application_opens !== null &&
    internship.application_opens < todayISO;
  const deadlinePast =
    internship.deadline !== null && internship.deadline < todayISO;

  const showDeadline = deadlineFuture;
  const showOpens =
    internship.application_opens !== null &&
    (opensFuture ||
      (internship.deadline !== null && opensPast && deadlinePast));

  const deadlineText = internship.deadline
    ? formatDate(internship.deadline)
    : null;
  const opensText = internship.application_opens
    ? formatDate(internship.application_opens)
    : null;

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
          {showDeadline && (
            <Badge variant="outline">Deadline: {deadlineText}</Badge>
          )}
          {showOpens && <Badge variant="outline">Opens: {opensText}</Badge>}
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
