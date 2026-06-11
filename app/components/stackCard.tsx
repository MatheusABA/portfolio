import { ReactNode } from "react";

interface StackIcon {
  icon: ReactNode;
  color?: string;
  label?: string;
}

interface StackCardProps {
  name: string;
  description: string;
  icons: StackIcon[];
}
export function StackCard({
  icons,
  name,
  description,
}: StackCardProps) {
  return (
    <div className="group border-4 border-black p-6 transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_black]">
      
      <div className="mb-4 flex items-center gap-3 text-3xl">
        {icons.map((item, index) => (
          <span key={index} className="text-black">
            
            <span
              className="transition-colors duration-200 group-hover:text-[var(--hover-color)]"
              style={{
                "--hover-color": item.color ?? "#000",
              } as React.CSSProperties}
            >
              {item.icon}
            </span>

          </span>
        ))}
      </div>

      <h3 className="font-(--font-space) text-sm uppercase font-black">
        {name}
      </h3>

      <p className="mt-2 text-xs uppercase font-light">
        {description}
      </p>
    </div>
  );
}