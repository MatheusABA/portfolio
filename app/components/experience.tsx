import {
  SiDigitalocean,
  SiExpo,
  SiExpress,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiReact,
} from "react-icons/si";
import { ExperienceCard } from "./experienceCard";
import { ProjectHighlight } from "./projectHighlight";
import { BiLogoPostgresql } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";

export function Experience() {
  return (
    <section id="experience" className="border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="max-w-4xl">
          <h2
            className="
              font-[var(--font-space)]
              text-4xl
              font-bold
              uppercase
              md:text-6xl
            "
          >
            Experience
          </h2>

          <p className="mt-2 text-lg opacity-80 leading-relaxed font-[var(--font-space)]">
            Building products used by real customers.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          <ExperienceCard
            period="Mar 2025 — Apr 2026"
            role="Software Engineer"
            company="Talento Transfer LLC · Remote"
            description="
              Software Engineer responsible for end-to-end delivery of production systems across mobile, web, backend, and cloud infrastructure.
            "
            technologies={[
              "React Native",
              "Expo",
              "Next.js",
              "NestJS",
              "Express",
              "PostgreSQL",
              "MongoDB",
              "Firebase",
              "DigitalOcean",
              "AWS",
              "Google Cloud",
            ]}
          >
            <div className="mt-4">
              <ul className="space-y-3 text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                  <span>
                    Delivered multiple production applications across mobile
                    (React Native), web (Next.js), and backend (NestJS/Express)
                    systems with full lifecycle ownership.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                  <span>
                    Designed and implemented real-time systems including chat,
                    live updates, and synchronization using WebSockets.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                  <span>
                    Built payment processing flows with Mercado Pago,
                    implementing webhook-based architecture and idempotent
                    transaction handling.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                  <span>
                    Architected backend systems using PostgreSQL, MongoDB, and
                    Firestore with Prisma, Mongoose, and Sequelize depending on
                    domain requirements.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                  <span>
                    Managed production infrastructure on Linux (DigitalOcean),
                    including NGINX reverse proxy, SSL, firewall configuration,
                    Fail2Ban, and PM2 deployments.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                  <span>
                    Integrated cloud services across AWS, Firebase, and Google
                    Cloud for storage, authentication, and serverless
                    processing.
                  </span>
                </li>
              </ul>
            </div>

            {/* PROJECTS */}
            <div className="mt-10 grid gap-4 md:grid-cols-2" id="projects">
              <ProjectHighlight
                title="Parking Platform"
                description="Mobile parking ecosystem with reservations, real-time check-in/out, and multi-role admin dashboard for owners and attendants."
              />

              <ProjectHighlight
                title="Social Competition Platform"
                description="Gamified platform with global rankings, rewards system, social feed, and AI assistant."
                platforms={
                  {
                    playstore: ["https://play.google.com/store/apps/details?id=com.globalflyingzone.mobile"],
                    appstore: ["https://apps.apple.com/br/app/global-flying-zone/id6758558055"],
                  }
                }
              />

              <ProjectHighlight
                title="Internal Communication System"
                description="Real-time communication platform with WebSocket chat, feeds, and media sharing."
                platforms={
                  {
                    playstore: ["https://play.google.com/store/apps/details?id=com.sumar.mobile"]
                  }
                }
              />

              <ProjectHighlight
                title="Geo-Based Community Marketplace"
                description="Location-based platform for discovering nearby communities, joining groups, and accessing events and products."
                platforms={
                  {
                    playstore: ["https://play.google.com/store/apps/details?id=com.cantabria.clubsapp"],
                    appstore: ["https://apps.apple.com/us/app/weedestiny/id6760399311"]
                  }
                }
              />

              <ProjectHighlight
                title="Ticket Marketplace"
                description="Peer-to-peer ticket resale platform integrated with Mercado Pago and secure transaction flows."
                platforms={
                  {
                    web: "https://www.renametravel.com"
                  }
                }
              />

              <ProjectHighlight
                title="Transit Cooperative System"
                description="Fleet management platform for transport cooperatives with route creation, driver assignment, and passenger booking system."
                platforms={
                  {
                    playstore: ["https://play.google.com/store/apps/details?id=ec.innovatech.taxiapp", "https://play.google.com/store/apps/details?id=com.matheusaba.conductorexpo"]
                  }
                }
              />
            </div>

            {/* STACK */}
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              <div className="border-2 border-black p-4">
                <div className="flex gap-2">
                  <SiReact size={28} color="#61DAFB" />
                  <SiExpo size={28} />
                </div>
                <p className="mt-3 text-sm font-bold uppercase">Mobile Apps</p>
                <p className="mt-2 text-xs opacity-70">
                  React Native + Expo for iOs and Android
                </p>
              </div>

              <div className="border-2 border-black p-4">
                <SiNextdotjs size={28} />
                <p className="mt-3 text-sm font-bold uppercase">Frontend</p>
                <p className="mt-2 text-xs opacity-70">Next.js + React</p>
              </div>

              <div className="border-2 border-black p-4">
                <div className="flex gap-2">
                  <SiNestjs size={28} color="#E02344" />
                  <SiExpress size={28} />
                  <BiLogoPostgresql size={28} color="#336791" />
                  <SiMongodb size={28} color="#47A248"/>
                </div>
                <p className="mt-3 text-sm font-bold uppercase">Backend</p>
                <p className="mt-2 text-xs opacity-70">NestJS + Express + MongoDB + PostgreSQL</p>
              </div>

              <div className="border-2 border-black p-4">
                <div className="flex gap-2">
                  <SiDigitalocean size={28} color="#0080FF" />
                  <SiNginx size={28} color="#009639" />
                  <FcLinux size={28} color="#FCC624" />
                </div>
                <p className="mt-3 text-sm font-bold uppercase">
                  Infrastructure
                </p>
                <p className="mt-2 text-xs opacity-70">Linux + NGINX + Digital Ocean</p>
              </div>
            </div>

            {/* INFRA SECTION */}
            <div className="mt-10 border-2 border-black p-5">
              <h4 className="font-bold uppercase">Infrastructure & Cloud</h4>

              <p className="mt-3 text-sm leading-relaxed">
                Managed production-grade infrastructure on Linux servers,
                implementing secure networking, reverse proxies, SSL, and
                deployment. Integrated hybrid cloud services across
                Digital Ocean, Firebase, and Google Cloud to support scalable backend
                systems.
              </p>
            </div>
          </ExperienceCard>

          <ExperienceCard
            period="Nov 2024 — Dec 2024"
            role="Backend Developer Intern"
            company="Funilize · Remote"
            description="
              Developed backend services using AWS,
              Stripe integrations and scraping automation.
            "
            technologies={[
              "Node.js",
              "Python",
              "AWS Lambda",
              "API Gateway",
              "Cognito",
              "Stripe",
              "PostgreSQL",
            ]}
          />

          <ExperienceCard
            period="Sep 2023 — Nov 2024"
            role="IT Support Intern"
            company="IBGE · Campo Grande, Brazil"
            description="
              Responsible for technical support,
              inventory management and maintenance
              of field devices.
            "
          />
        </div>
      </div>
    </section>
  );
}
