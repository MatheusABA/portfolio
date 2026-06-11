export function Hero() {
  return (
    <section className="border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-6xl font-black uppercase leading-none md:text-9xl">
          Matheus
          <br />
          Alexandre
        </h1>

        <p className="mt-8 max-w-2xl text-xl">
          Building mobile applications, backend services and digital products
          used by real customers.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/matheus-alexandre-b69ab3224/"
            target="_blank"
            className="border-4 border-black px-6 py-3 font-bold uppercase"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/MatheusABA"
            target="_blank"
            className="border-4 border-black px-6 py-3 font-bold uppercase"
          >
            GitHub
          </a>

          <a
            href="https://gitlab.com/MatheusABA"
            target="_blank"
            className="border-4 border-black px-6 py-3 font-bold uppercase"
          >
            GitLab
          </a>

          <a
            href="/cv_developer_matheus_alexandre.pdf"
            target="_blank"
            className="bg-black px-6 py-3 font-bold uppercase text-white"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
