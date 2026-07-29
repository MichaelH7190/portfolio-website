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
  tagline: string;
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
    tagline: "TODO: one line on what this work is",
    stack: ["TODO", "TODO"],
    contribution:
      "TODO: 2-3 sentences on what you specifically built. Lead with the verb: built, designed, shipped, migrated.",
    decision:
      "TODO: one real decision or tradeoff. e.g. 'Chose X over Y because Z, accepting the cost of W.'",
    metric: "TODO: a number if you have one — otherwise delete this line",
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
