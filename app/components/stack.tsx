import {
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiPrisma,
  SiExpo,
  SiNginx,
  SiGooglecloud,
  SiExpress,
  SiDigitalocean,
  SiNodedotjs,
} from "react-icons/si";

import { StackCard } from "./stackCard";

export function Stack() {
  return (
    <section id="stack" className="border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="max-w-3xl">
          <h2
            className="
              font-(--font-space)
              text-4xl
              font-bold
              uppercase
              md:text-6xl
            "
          >
            Tech Stack
          </h2>

          <p className="mt-4 text-lg leading-relaxed font-(--font-space) font-mono">
            Technologies I currently use to build mobile applications, backend
            services and scalable cloud solutions.
          </p>
        </div>

        <div className="mt-4 grid gap-6 md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3">
          <StackCard
            icon={<SiReact />}
            iconColor="#61DAFB"
            name="React Native"
            description="Cross-platform mobile apps"
          />

          <StackCard
            icon={<SiExpo />}
            iconColor="#000000"
            name="Expo"
            description="Rapid mobile development"
          />

          <StackCard
            icon={<SiReact />}
            iconColor="#61DAFB"
            name="React.JS"
            description="Web applications"
          />

          <StackCard
            icon={<SiNextdotjs />}
            iconColor="#000000"
            name="Next.js"
            description="Full-stack web applications"
          />

          <StackCard
            icon={<SiNodedotjs />}
            iconColor="#339933"
            name="Express"
            description="Backend framework"
          />

          <StackCard
            icon={<SiNestjs />}
            iconColor="#E0234E"
            name="NestJS"
            description="Backend framework"
          />

          <StackCard
            icon={<SiPostgresql />}
            iconColor="#336791"
            name="PostgreSQL"
            description="SQL database"
          />

          <StackCard
            icon={<SiMongodb />}
            iconColor="#47A248"
            name="MongoDB"
            description="NoSQL database"
          />

          <StackCard
            icon={<SiPrisma />}
            iconColor="#2D3748"
            name="Prisma"
            description="Database ORM"
          />

          <StackCard
            icon={<SiFirebase />}
            iconColor="#FFCA28"
            name="Firebase"
            description="Auth & cloud services"
          />

          <StackCard
            icon={<SiDigitalocean />}
            iconColor="#0080FF"
            name="DigitalOcean"
            description="Cloud infrastructure"
          />

          <StackCard
            icon={<SiNginx />}
            iconColor="#009639"
            name="NGINX"
            description="Web server & reverse proxy"
          />
        </div>

        <h3
          className="
        font-[var(--font-space)]
        text-2xl
        font-bold
        uppercase
        mt-4
      "
        >
          Also Worked With
        </h3>

        <p className="mt-2 text-sm uppercase opacity-70">
          Technologies used across different projects and environments.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "AWS",
            "Google Cloud",
            "Python",
            "Linux",
            "PM2",
            "WebSockets",
            "Mapbox",
            "Google Maps",
            "Mercado Pago",
            "Firestore",
            "Mongoose",
            "Sequelize",
          ].map((tech) => (
            <span
              key={tech}
              className="
            border-2
            border-black
            px-4
            py-2
            text-sm
            font-semibold
            uppercase
            transition-all
            hover:-translate-y-1
            hover:shadow-[4px_4px_0px_0px_black]
          "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
