// ─── Projects ────────────────────────────────────────────────
// One entry per project, in display order. Fill in the TODOs.
//
// Per-field guide (from the mentor spec):
//   tagline      one line on what it is
//   stack        the technologies used
//   contribution 2-3 sentences on what YOU specifically built
//   decision     one real decision or tradeoff you made — this is
//                the line interviewers ask about, make it concrete
//   metric       a number if you have one (omit the field if not)
//   links        href present → rendered as a link
//                href omitted → rendered as plain text ("Code is private")
//   media        drop the file in /public/projects/ and reference it here;
//                omit the field entirely to show a styled placeholder

export type Project = {
  name: string;
  tagline?: string; // omit to show the name alone
  context?: string; // small uppercase line under the name, e.g. "NASA contractor · Software Intern · Summer 2025"
  stack: string[];
  contribution: string;
  decision: string;
  metric?: string;
  links: { label: string; href?: string }[];
  media?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    name: "Intuitive Machines",
    context: "NASA contractor · Software Engineer Intern · Summer 2026",
    stack: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Docker"],
    contribution:
      "Built a full-stack sensor list web app that replaces Excel tracking for multiple lunar lander programs.",
    decision:
      "a tree-structured device hierarchy rendered as a dynamic table, where engineers add and manage devices at any depth and define new tables and columns without code changes.",
    // TODO: verify these numbers with your manager before deploying
    metric: "~20 engineers · designed to scale to 10,000+ devices",
    links: [{ label: "Code is private" }],
    // media: { src: "/projects/intuitive-machines.png", alt: "TODO" },
  },
  {
    name: "Roster",
    tagline: "TODO: one line on what it is",
    stack: ["TODO", "TODO"],
    contribution: "TODO: 2-3 sentences on what you specifically built.",
    decision: "TODO: one real decision or tradeoff you made.",
    metric: "TODO: a number if you have one — otherwise delete this line",
    links: [
      { label: "Live demo", href: "https://TODO" },
      { label: "GitHub", href: "https://github.com/TODO" },
    ],
    // media: { src: "/projects/roster.png", alt: "TODO" },
  },
  {
    name: "Crayons to Classrooms",
    tagline: "TODO: one line on what it is",
    stack: ["TODO", "TODO"],
    contribution: "TODO: 2-3 sentences on what you specifically built.",
    decision: "TODO: one real decision or tradeoff you made.",
    links: [{ label: "GitHub", href: "https://github.com/TODO" }],
    // media: { src: "/projects/crayons-to-classrooms.png", alt: "TODO" },
  },
  {
    name: "Research",
    tagline: "TODO: one line on what the research is",
    stack: ["TODO", "TODO"],
    contribution: "TODO: 2-3 sentences on what you specifically did.",
    decision: "TODO: one real decision or tradeoff you made.",
    links: [{ label: "Paper", href: "https://TODO" }],
    // media: { src: "/projects/research.png", alt: "TODO" },
  },
];
