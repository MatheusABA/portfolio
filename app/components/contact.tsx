import { FaLinkedin } from "react-icons/fa";
import { FiMail, FiGithub } from "react-icons/fi";

export function Contact() {
  return (
    <section id="contact" className="border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* HEADER */}
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold uppercase md:text-6xl">Contact</h2>

          <p className="mt-4 text-lg opacity-80">
            Let’s build something meaningful together.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-4 border-2 border-black p-6">
          <p className="text-sm leading-relaxed opacity-80">
            I’m currently open to new opportunities in full-stack and backend
            engineering roles. Feel free to reach out if you want to discuss
            projects, collaborations or opportunities.
          </p>

          {/* LINKS */}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="mailto:matheus.alencar02199@gmail.com"
              className="flex items-center gap-3 text-sm font-medium hover:underline"
            >
              <FiMail />
              matheus.alencar02199@gmail.com
            </a>

            <a
              href="https://github.com/MatheusABA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium hover:underline"
            >
              <FiGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/matheus-alexandre-b69ab3224/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium hover:underline"
            >
              <FaLinkedin color="#0077B5"/>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
