import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const features = [
  {
    icon: "🔍",
    title: "Search & Filter",
    description:
      "Browse hundreds of internships filtered by industry, location, and deadline.",
  },
  {
    icon: "👤",
    title: "Student Profiles",
    description:
      "Create a profile, save your favorite listings, and track your applications in one place.",
  },
  {
    icon: "🏢",
    title: "Company Listings",
    description:
      "Explore opportunities from local Massachusetts businesses and organizations.",
  },
  {
    icon: "📚",
    title: "Resources & Guides",
    description:
      "Get tips on resume writing, interview prep, and how to stand out as a high schooler.",
  },
];

const steps = [
  {
    number: "1",
    title: "Search",
    description: "Browse internships by industry, city, or keyword.",
  },
  {
    number: "2",
    title: "Apply",
    description: "Submit your application directly through our platform.",
  },
  {
    number: "3",
    title: "Get Hired",
    description: "Land your first internship and kick off your career.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-6 px-4 py-24 text-center">
        <div className="flex flex-col items-center gap-4 max-w-2xl">
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
            For Massachusetts High School Students
          </span>
          <h1 className="text-5xl font-bold tracking-tight leading-tight">
            Find Your First Internship in Massachusetts
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            InternMA connects high school students with real internship
            opportunities across Massachusetts — for free.
          </p>
          <div className="flex gap-3 mt-2">
            <Button asChild size="lg">
              <Link href="/internships">Browse Internships</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-border bg-muted/30 px-4 py-20"
      >
        <div className="mx-auto max-w-5xl flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Everything you need to get started
            </h2>
            <p className="mt-2 text-muted-foreground">
              Built specifically for high schoolers taking their first step into
              the professional world.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader className="pb-2">
                  <span className="text-3xl">{feature.icon}</span>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="mt-2 text-muted-foreground">
              Getting your first internship is easier than you think.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background text-lg font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute" />
                )}
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button asChild size="lg">
            <Link href="/internships">Browse Internships</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
