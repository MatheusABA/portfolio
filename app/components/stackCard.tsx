import { ReactNode } from "react";

interface StackCardProps {
  icon: ReactNode;
  name: string;
  description: string;
  iconColor?: string;
}

export function StackCard({
  icon,
  name,
  description,
  iconColor,
}: StackCardProps) {
  return (
    <div
      className="
    group
    border-4
    border-black
    p-6
    transition-all
    hover:-translate-y-2
    hover:shadow-[8px_8px_0px_0px_black]
      "
    >
      <div
        className="
          mb-4
          text-4xl
          transition-all
          duration-200
        "
        style={
          {
            "--icon-hover-color": iconColor ?? "#000",
          } as React.CSSProperties
        }
      >
        <span
          className="
            block
            transition-colors
            duration-200
            group-hover:[color:var(--icon-hover-color)]
          "
        >
          {icon}
        </span>
      </div>

      <h3
        className="
          font-(--font-space)
          text-xl
          uppercase
        "
      >
        {name}
      </h3>

      <p className="mt-2 text-sm uppercase">{description}</p>
    </div>
  );
}
