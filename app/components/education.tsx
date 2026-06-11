export function Education() {
  return (
    <section id="education" className="border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold uppercase md:text-6xl">
            Education
          </h2>

          <p className="mt-4 text-lg opacity-80">
            Academic background in software engineering and computer systems.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {/* UNIVERSITY */}
          <div className="border-2 border-black p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="text-lg font-bold uppercase">
                Universidade Católica Dom Bosco
              </h3>

              <span className="text-sm opacity-70">
                Jan 2020 — Dec 2024
              </span>
            </div>

            <p className="mt-3 text-sm font-medium">
              Bachelor’s Degree in Computer Engineering
            </p>

            <p className="mt-3 text-sm leading-relaxed opacity-80">
              Focused on software engineering, distributed systems,
              algorithms, data structures, and full-stack development.
              Built strong foundations in backend architecture, networking,
              and software design principles.
            </p>

            {/* HIGHLIGHTS */}
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                <span>Software engineering and system design fundamentals</span>
              </li>

              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                <span>Data structures, algorithms, and problem solving</span>
              </li>

              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                <span>Backend systems, APIs, and distributed architecture</span>
              </li>

              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                <span>Full-stack development with modern web technologies</span>
              </li>
            </ul>
          </div>

          {/* OPTIONAL: EXTRA */}
          <div className="border-2 border-black p-6 opacity-80">
            <h3 className="text-lg font-bold uppercase">
              Continuous Learning
            </h3>

            <p className="mt-3 text-sm leading-relaxed">
              Ongoing self-study in system design, scalable backend
              architecture, cloud infrastructure (AWS, GCP), and advanced
              frontend engineering patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}