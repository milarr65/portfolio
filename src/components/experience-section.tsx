"use client";

import { useLocale } from "@/contexts/locale-context";

export default function ExperienceSection() {
  const { lang, dict } = useLocale();

  return (
    <section
      id="experience"
      className="w-full flex flex-col items-center h-fit gap-8 px-4 sm:px-8 mt-12"
    >
      <div className="w-full max-w-4xl flex flex-col mb-4">
        <h2 className="text-3xl font-bold w-full text-left">
          {lang === "en" ? "Experience" : "Experiencia"}
        </h2>
      </div>

      <div className="w-full max-w-4xl">
        <div className="relative border-l border-muted-foreground/30 ml-3 md:ml-4">
          {dict.experience.map((exp) => (
            <div key={exp.id} className="mb-10 ml-8 relative">
              <span className="absolute -left-[39px] flex items-center justify-center w-4 h-4 rounded-full bg-primary ring-4 ring-background mt-1.5" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-2 sm:gap-0">
                <h3 className="text-xl font-bold text-foreground">
                  {exp.role}{" "}
                  <span className="text-muted-foreground font-normal">
                    · {exp.company}
                  </span>
                </h3>
                <time className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-muted px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </time>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-4 mt-2">
                <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                  {exp.location}
                </span>
                <span className="text-xs font-semibold bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full">
                  {exp.environment}
                </span>
                {exp.methodology && (
                  <span className="text-xs font-semibold bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full">
                    {exp.methodology}
                  </span>
                )}
              </div>
              <ul className="space-y-2 mt-4 text-muted-foreground list-none">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-primary mt-1">•</span>
                    <span className="text-[15px] leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
