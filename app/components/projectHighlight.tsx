"use client";

import { SiGoogleplay, SiApple } from "react-icons/si";
import { CgBrowser } from "react-icons/cg";

interface ProjectHighlightProps {
  title: string;
  description: string;
  href?: string;
  platforms?: {
    playstore?: string[];
    appstore?: string[];
    web?: string
  };
}

export function ProjectHighlight({
  title,
  description,
  href,
  platforms,
}: ProjectHighlightProps) {
  const isLink = Boolean(href);
  const Wrapper = isLink ? "a" : "div";

  return (
    <Wrapper
      {...(isLink
        ? {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className="border-2 border-black p-4 block hover:opacity-80 transition"
    >
      <h4 className="font-bold uppercase">{title}</h4>

      <p className="mt-2 text-sm">{description}</p>

      {/* PLATFORMS */}
      {platforms && (
        <div className="flex items-center gap-3 mt-3">
          {/* PLAYSTORE*/}
          {platforms.playstore?.map((url, index) => (
            <a
              key={`playstore-${url}-${index}`}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs underline"
            >
              <SiGoogleplay size={16} />
              Play Store
            </a>
          ))}

          {/* APPSTORE*/}
          {platforms.appstore?.map((url, index) => (
            <a
              key={`appstore-${url}-${index}`}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs underline"
            >
              <SiApple size={16} />
              App Store
            </a>
          ))}

          {/* WEB */}
          {platforms.web && (
            <a
              href={platforms.web}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs underline"
            >
              <CgBrowser size={16} />
              Web
            </a>
          )}
        </div>
      )}
    </Wrapper>
  );
}
