"use client";

import { useLocale } from "@/contexts/locale-context";
import SkillHoverIcon from "@/components/SkillHoverIcon";

export default function SkillsSection() {
  const { lang, dict } = useLocale();
  // console.log(SkillHoverIcon);

  return (
    <section
      id="skills"
      className="w-full flex flex-col justify-center items-center h-fit gap-4"
    >
      <h1 className="text-3xl font-bold w-11/12 text-center">
        {lang === "en" ? "Skills & Technologies" : "Aptitudes y Herramientas"}
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center w-9/10">
        {lang === "en"
          ? "Hover over the icons to learn more about each technology"
          : "Pasa el cursor sobre los iconos para ver más sobre cada tecnología."}
      </p>
      <div className="flex flex-wrap gap-5 w-full mx-auto justify-center my-3 ">
        <div className="w-11/12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 place-items-center h-fit gap-y-4">
          {dict.skills.map((skill, index) => {
            const isSmOffset = index % 3 === 2;
            const isMdOffset = index % 5 === 3;
            const isLgOffset = index % 7 === 4;

            return (
              <div
                key={skill.id}
                className={`col-span-1 sm:col-span-2 flex justify-center w-full transition-all duration-300
									${isSmOffset ? "sm:col-start-2" : "sm:col-start-auto"}
									${isMdOffset ? "md:col-start-2" : "md:col-start-auto"}
									${isLgOffset ? "lg:col-start-2" : "lg:col-start-auto"}
								`}
              >
                <SkillHoverIcon skill={skill} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
