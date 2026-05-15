import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { formatDate } from "~/lib/dates";
import type { Internship } from "./featured-internship-card";
import { SaveButton } from "./save-button";

interface InternshipCardProps {
  internship: Internship;
  saved?: boolean;
  userId?: string | null;
}

export function InternshipCard({
  internship,
  saved = false,
  userId = null,
}: InternshipCardProps) {
  const deadlineText = internship.deadline
    ? formatDate(internship.deadline)
    : null;
  const opensText = internship.application_opens
    ? formatDate(internship.application_opens)
    : null;

  const card = (
    <Card className="gap-0">
      <CardHeader className="pb-0">
        <CardTitle className="text-base leading-snug pr-6">
          {internship.name}
        </CardTitle>
        <CardDescription>{internship.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-0">
        <div className="flex flex-wrap gap-2 py-3">
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

  return (
    <div className="relative">
      {internship.url ? (
        <a
          href={internship.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-opacity hover:opacity-80"
        >
          {card}
        </a>
      ) : (
        card
      )}
      <SaveButton
        internshipId={internship.id}
        initialSaved={saved}
        userId={userId}
        className="absolute top-2 right-2"
      />
    </div>
  );
}
