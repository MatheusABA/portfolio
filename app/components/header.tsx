import { MdDarkMode } from "react-icons/md";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-[#f5f5f5]">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-start px-6">

        <nav
          className="
            font-(--font-space)
            flex
            font-black
            items-center
            gap-8
            text-sm
            uppercase
            tracking-wide
          "
        >
          <a
            href="#stack"
            className="transition-opacity hover:opacity-60"
          >
            Stack
          </a>

          <a
            href="#experience"
            className="transition-opacity hover:opacity-60"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="transition-opacity hover:opacity-60"
          >
            Projects
          </a>

          <a
            href="#education"
            className="transition-opacity hover:opacity-60"
          >
            Education
          </a>

          <a
            href="#contact"
            className="transition-opacity hover:opacity-60"
          >
            Contact
          </a>
        </nav>

        {/* <button
          className="
            absolute
            right-6
            flex
            h-10
            w-10
            items-center
            justify-center
            border-2
            border-black
            transition-all
            hover:-translate-y-1
          "
          aria-label="Toggle theme"
        >
          <MdDarkMode size={18} />
        </button> */}

      </div>
    </header>
  );
}