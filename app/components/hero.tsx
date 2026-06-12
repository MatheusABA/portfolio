import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";

export function Hero() {
  return (
    <section id="hero" className="border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-10">
        <h1
          className="
            text-6xl
            font-black
            uppercase
            leading-[0.85]
            md:text-8xl
            lg:text-[10rem]
          "
        >
          <span className="block">Matheus</span>

          <span className="block text-(--accent)">Alexandre</span>
        </h1>

        <h2
          className="
            mt-6
            font-(--font-space)
            text-xl
            font-bold
            uppercase
            tracking-[0.2em]
            md:text-2xl
          "
        >
          Software Engineer
        </h2>

        <p
          className="
            font-stretch-semi-condensed
            mt-6
            max-w-2xl
            text-lg
            leading-relaxed
            md:text-xl
          "
        >
          Building and operating production systems across mobile, web, backend,
          and cloud infrastructure, with end-to-end ownership from architecture
          to deployment.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/matheus-alexandre-b69ab3224/"
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-2
            border-4
            border-black
            bg-white
            px-6
            py-3
            font-(--font-space)
            uppercase
            shadow-[6px_6px_0px_0px_black]
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-[10px_10px_0px_0px_black]
              "
          >
            <FaLinkedin size={18} color="#0077B5" />
            LinkedIn
          </a>

          <a
            href="https://github.com/MatheusABA"
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-2
            border-4
            border-black
            bg-white
            px-6
            py-3
            font-(--font-space)
            uppercase
            shadow-[6px_6px_0px_0px_black]
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-[10px_10px_0px_0px_black]
              "
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href="https://gitlab.com/MatheusABA"
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-2
            border-4
            border-black
            bg-white
            px-6
            py-3
            font-(--font-space)
            uppercase
            shadow-[6px_6px_0px_0px_black]
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-[10px_10px_0px_0px_black]
              "
          >
            <FaGitlab size={18} color="orange" />
            GitLab
          </a>

          <a
            href="/cv_developer_matheus_alexandre.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
                        flex
            items-center
            gap-2
            border-4
            border-black
            bg-white
            px-6
            py-3
            font-(--font-space)
            uppercase
            shadow-[6px_6px_0px_0px_black]
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-[10px_10px_0px_0px_black]
          "
          >
            <FaFilePdf size={18} color="red" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
