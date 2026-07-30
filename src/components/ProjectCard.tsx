import Image from "next/image";
import type { Project } from "@/data/projects";

const linkStyle =
  "text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-teal-600 hover:decoration-teal-500 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-teal-400";

// A full-width horizontal band: oversized mono number on the left,
// text in the middle, small thumbnail on the right.
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="flex flex-col gap-6 border-t border-zinc-200 py-10 sm:flex-row sm:gap-10 dark:border-zinc-800">
      {/* Big number, the band's anchor */}
      <span
        aria-hidden
        className="shrink-0 font-mono text-4xl font-semibold text-zinc-200 sm:text-5xl dark:text-zinc-800"
      >
        {number}
      </span>

      {/* Text — dominates the band */}
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {project.name}
            {project.tagline && (
              <span className="font-normal text-zinc-500 dark:text-zinc-400">
                {" "}
                — {project.tagline}
              </span>
            )}
          </h3>
          {project.context && (
            <p className="font-mono text-[11px] font-medium tracking-widest text-teal-600 uppercase dark:text-teal-400">
              {project.context}
            </p>
          )}
        </div>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {project.contribution}
        </p>

        <p className="border-l-2 border-teal-500 pl-3.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {project.decision}
        </p>

        {project.metric && (
          <p className="font-mono text-sm font-medium text-teal-600 dark:text-teal-400">
            {project.metric}
          </p>
        )}

        <ul className="flex flex-wrap gap-1.5 font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 dark:border-zinc-800 dark:bg-zinc-900"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-baseline gap-5 text-sm">
          {project.links.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium ${linkStyle}`}
              >
                {link.label}
                <span aria-hidden className="ml-1 inline-block text-xs">
                  ↗
                </span>
              </a>
            ) : (
              <span
                key={link.label}
                className="text-zinc-500 italic dark:text-zinc-400"
              >
                {link.label}
              </span>
            )
          )}
        </div>
      </div>

      {/* Small thumbnail on the right */}
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg border border-zinc-200 sm:w-52 dark:border-zinc-800">
        {project.media ? (
          <Image
            src={project.media.src}
            alt={project.media.alt}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 13rem, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-zinc-50 dark:bg-zinc-900/60">
            <span className="px-2 text-center font-mono text-[10px] tracking-widest text-zinc-400 uppercase dark:text-zinc-600">
              {project.name}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
