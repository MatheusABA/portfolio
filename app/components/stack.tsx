import {
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiMongodb,
  SiFirebase,
  SiPrisma,
  SiExpo,
  SiNginx,
  SiGooglecloud,
  SiDigitalocean,
  SiNodedotjs,
  SiSequelize,
  SiPython,
  SiMapbox,
  SiMongoose,
  SiPm2,
  SiMercadopago,
  SiSocketdotio,
  SiLinux,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";

import { StackCard } from "./stackCard";
import { TechChip } from "./techChip";

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
            name="Mobile"
            description="React Native ecosystem"
            icons={[
              { icon: <SiReact />, color: "#61dafb" },
              { icon: <SiExpo />, color: "#000000" },
            ]}
          />

          <StackCard
            icons={[{ icon: <SiReact />, color: "#61dafb" }]}
            name="React.JS"
            description="Web applications"
          />

          <StackCard
            icons={[{ icon: <SiNextdotjs />, color: "#000000" }]}
            name="Next.js"
            description="Full-stack web applications"
          />

          <StackCard
            name="Backend"
            description="NestJS (Node.js), scalable APIs, real-time systems, integrations"
            icons={[
              { icon: <SiNodedotjs />, color: "#3C873A" },
              { icon: <SiNestjs />, color: "#E0234E" },
            ]}
          />

          <StackCard
            icons={[{ icon: <BiLogoPostgresql />, color: "#336791" }]}
            name="PostgreSQL"
            description="SQL database"
          />

          <StackCard
            icons={[{ icon: <SiMongodb />, color: "#47A248" }]}
            name="MongoDB"
            description="NoSQL database"
          />

          <StackCard
            icons={[{ icon: <SiPrisma />, color: "#2D3748" }]}
            name="Prisma"
            description="Database ORM"
          />

          <StackCard
            icons={[{ icon: <SiFirebase />, color: "#FFCA28" }]}
            name="Firebase"
            description="Auth & cloud services"
          />

          <StackCard
            name="Infrastructure"
            description="Linux, NGINX, server deployment & production systems"
            icons={[
              { icon: <SiLinux />, color: "#FCC624" },
              { icon: <SiNginx />, color: "#009639" },
              { icon: <SiDigitalocean />, color: "#0080FF" },
            ]}
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
          <TechChip icon={<FaAws />} label="AWS" color="#FF9900" />

          <TechChip
            icon={<SiGooglecloud />}
            label="Google Cloud"
            color="#4285F4"
          />

          <TechChip icon={<SiPython />} label="Python" color="#3776AB" />

          <TechChip icon={<FaJava />} label="Java" color="#E4772B" />

          <TechChip
            icon={<BiLogoSpringBoot />}
            label="Spring Boot"
            color="#6DB33F"
          />

          <TechChip icon={<FcLinux />} label="Linux" color="#FCC624" />

          <TechChip icon={<SiPm2 />} label="PM2" color="#2B037A" />

          <TechChip icon={<SiMapbox />} label="Mapbox" color="#000000" />

          <TechChip
            icon={<TbBrandGoogleMaps />}
            label="Google Maps"
            color="#34A853"
          />

          <TechChip icon={<SiFirebase />} label="Firestore" color="#FFCA28" />

          <TechChip icon={<SiMongoose />} label="Mongoose" color="#880000" />

          <TechChip icon={<SiSequelize />} label="Sequelize" color="#52B0E7" />

          <TechChip
            icon={<SiSocketdotio />}
            label="WebSockets"
            color="#010101"
          />

          <TechChip
            icon={<SiMercadopago />}
            label="Mercado Pago Checkout"
            color="#00B1EA"
          />
        </div>
      </div>
    </section>
  );
}
