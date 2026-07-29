import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16 sm:py-24">
      {/* Header */}
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {site.name}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">{site.title}</p>
        <nav className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-teal-600 dark:hover:text-teal-400"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-teal-600 dark:hover:text-teal-400"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="underline underline-offset-4 hover:text-teal-600 dark:hover:text-teal-400"
          >
            Email
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-teal-600 dark:hover:text-teal-400"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* Intro */}
      <p className="max-w-2xl pt-8 leading-relaxed text-zinc-700 dark:text-zinc-300">
        {site.intro}
      </p>

      {/* Projects */}
      <main className="flex flex-col gap-16 pt-16 sm:gap-20">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </main>

      {/* Footer */}
      <footer className="pt-20 pb-4 text-sm text-zinc-500 dark:text-zinc-400">
        <a
          href={`mailto:${site.email}`}
          className="underline underline-offset-4 hover:text-teal-600 dark:hover:text-teal-400"
        >
          {site.email}
        </a>
      </footer>
    </div>
  );
}
