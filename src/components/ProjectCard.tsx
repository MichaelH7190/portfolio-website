import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const flipped = index % 2 === 1;

  return (
    <article
      className={`flex flex-col gap-6 md:items-center md:gap-10 ${
        flipped ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Media — real image if provided, styled placeholder otherwise */}
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg border border-zinc-200 md:w-[45%] dark:border-zinc-800">
        {project.media ? (
          <Image
            src={project.media.src}
            alt={project.media.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 45vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-zinc-100 dark:bg-zinc-900">
            <span className="font-mono text-sm text-zinc-400 dark:text-zinc-600">
              {project.name}
            </span>
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold tracking-tight">
          {project.name}
          <span className="font-normal text-zinc-500 dark:text-zinc-400">
            {" "}
            — {project.tagline}
          </span>
        </h3>

        <ul className="flex flex-wrap gap-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-zinc-200 px-2.5 py-0.5 dark:border-zinc-800"
            >
              {tech}
            </li>
          ))}
        </ul>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {project.contribution}
        </p>

        {/* The tradeoff line gets visual distinction on purpose */}
        <p className="border-l-2 border-teal-500 pl-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            Design decision:
          </span>{" "}
          {project.decision}
        </p>

        {project.metric && (
          <p className="text-sm font-medium text-teal-600 dark:text-teal-400">
            {project.metric}
          </p>
        )}

        <div className="flex flex-wrap gap-4 pt-1 text-sm">
          {project.links.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:text-teal-600 dark:hover:text-teal-400"
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="text-zinc-500 dark:text-zinc-400"
              >
                {link.label}
              </span>
            )
          )}
        </div>
      </div>
    </article>
  );
}
