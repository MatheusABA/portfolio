import Image from "next/image";

export function Education() {
  return (
    <section id="education" className="border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        
        {/* HEADER */}
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold uppercase md:text-6xl">
            Education
          </h2>

          <p className="mt-4 text-lg opacity-80">
            Academic background in software engineering and computer systems.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-4 flex flex-col gap-6">

          {/* UNIVERSITY CARD */}
          <div className="border-2 border-black p-6">
            
            <div className="flex items-start gap-4">
              
              {/* LOGO SLOT */}
              <div className="w-12 h-12 flex items-center justify-center border-2 border-black">
                <Image src="/ucdb_logo.png" alt="UCDB" width={42} height={42} />
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-lg font-bold uppercase">
                    Universidade Católica Dom Bosco
                  </h3>

                  <span className="text-sm opacity-70">
                    Jan 2020 — Dec 2024
                  </span>
                </div>

                <p className="mt-2 text-sm font-medium">
                  Bachelor’s Degree in Computer Engineering
                </p>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}