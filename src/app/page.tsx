import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const linkStyle =
  "text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-teal-600 hover:decoration-teal-500 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-teal-400";

const navLinks = [
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Email", href: `mailto:${site.email}`, external: false },
  { label: "Resume", href: site.resume, external: true },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16 sm:py-24">
      <header className="flex flex-col gap-1.5">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          {site.name}
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400">{site.title}</p>
        <nav className="flex flex-wrap gap-5 pt-3 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={linkStyle}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <p className="max-w-2xl pt-10 leading-relaxed text-zinc-700 dark:text-zinc-300">
        {site.intro}
      </p>

      <main className="flex flex-col pt-16">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </main>

      <footer className="flex items-baseline justify-between gap-4 border-t border-zinc-200 pt-8 pb-4 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        <a href={`mailto:${site.email}`} className={linkStyle}>
          {site.email}
        </a>
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}
