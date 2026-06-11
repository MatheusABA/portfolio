import { ReactNode } from "react";

interface TechChipProps {
  icon: ReactNode;
  label: string;
  color: string;
}

export function TechChip({
  icon,
  label,
  color,
}: TechChipProps) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-4
        border-2
        border-black
        px-4
        py-2
        transition-all
        hover:-translate-y-1
        hover:shadow-[4px_4px_0px_0px_black]
      "
    >
      <span
        className="text-lg transition-colors"
        style={{ color }}
      >
        {icon}
      </span>

      <span className="text-sm font-semibold uppercase">
        {label}
      </span>
    </div>
  );
}