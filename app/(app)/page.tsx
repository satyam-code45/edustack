import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Link from "next/link";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Expert-Led Curriculum",
    description:
      "Dive into professionally designed courses led by industry veterans, tailored to deliver real-world skills.",
    icon: "🎓",
  },
  {
    title: "Interactive Learning",
    description:
      "Engage with dynamic videos, quizzes, and hands-on projects that make learning fun and effective.",
    icon: "🧠",
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your learning journey with real-time progress tracking and performance insights.",
    icon: "📈",
  },
  {
    title: "Anytime, Anywhere Access",
    description:
      "Learn at your own pace with 24/7 access to all course materials across devices.",
    icon: "🌐",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative pt-20 pb-10 lg:pt-42 px-3 md:px-0">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <Badge variant="outline" className="md:text-lg p-1 px-4">
            Redefining Learning in the Digital Age
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
            Take Your Learning to the Next Level
          </h1>
          <p className="md:max-w-2xl lg:max-w-5xl text-muted-foreground md:text-xl">
            Step into a smarter educational experience with our dynamic LMS.
            Enjoy interactive modules, on-demand learning, and tools that adapt
            to your pace and style—anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 text-xl font-bold">
            <Link
              className={buttonVariants({
                size: "lg",
              })}
              href="/courses"
            >
              Explore Courses
            </Link>
            <Link
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
              href="/login"
            >
              Sign In
            </Link>
            <Link
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
              href="/admin"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-32 md:pt-3 lg:pt-10 lg:mx-9 gap-6 mx-5">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
