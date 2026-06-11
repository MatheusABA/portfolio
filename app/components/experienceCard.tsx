import { ReactNode } from "react";

interface ExperienceCardProps {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies?: string[];
  children?: ReactNode;
  featured?: boolean;
}

export function ExperienceCard({
  period,
  role,
  company,
  description,
  technologies,
  children,
  featured = false,
}: ExperienceCardProps) {
  return (
    <div
      className={`
        border-4 border-black p-8
        ${featured ? "shadow-[8px_8px_0px_0px_black]" : ""}
      `}
    >
      <span className="text-sm font-bold uppercase opacity-70">
        {period}
      </span>

      <h3
        className="
          mt-2
          font-[var(--font-space)]
          text-2xl
          md:text-3xl
          font-black
          uppercase
        "
      >
        {role}
      </h3>

      <p className="font-semibold">{company}</p>

      <p className="mt-6 leading-relaxed">
        {description}
      </p>

      {technologies && (
        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                border-2
                border-black
                px-3
                py-1
                text-sm
                uppercase
              "
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {children}
    </div>
  );
}