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
//   media        drop the file in /public/projects/, import it below, and
//                reference the import here (static imports let Next.js size
//                the thumbnail to the image's real proportions);
//                omit the field entirely to show a styled placeholder

import type { StaticImageData } from "next/image";

import crayonsImg from "../../public/projects/crayons-to-classrooms.png";
import landerImg from "../../public/projects/intuitive-machines.jpg";
import researchImg from "../../public/projects/research.png";
import rosterImg from "../../public/projects/roster.png";

export type Project = {
  name: string;
  tagline?: string; // omit to show the name alone
  context?: string; // small uppercase line under the name, e.g. "NASA contractor · Software Intern · Summer 2025"
  stack: string[];
  contribution: string;
  decision: string;
  metric?: string;
  links: { label: string; href?: string }[];
  media?: { src: StaticImageData; alt: string; portrait?: boolean }; // portrait: true → tall box (for photos); default is a wide laptop-screen box
};

export const projects: Project[] = [
  {
    name: "Intuitive Machines",
    context: "NASA contractor · Software Engineer Intern · Summer 2026",
    stack: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Docker"],
    contribution:
      "Built a full-stack sensor list web app that replaces Excel tracking for multiple lunar lander programs. A tree structured device hierarchy where engineers add and manage devices at any depth and define new tables and columns with minimal code changes.",
    decision:
      "Design: The tables are just two generic data models where the data is self-describing. A versioning system that tracks deltas on each branch with immutable and tagged versions.",
    metric: "~20 engineers · designed to scale to 10,000+ devices",
    links: [{ label: "Code is private" }],
    media: {
      src: landerImg,
      alt: "Intuitive Machines Nova-C lunar lander standing on its test stand",
      portrait: true,
    },
  },
  {
    name: "Roster",
    context: "YC S26 · Code Contributor · Feb – Mar 2026",
    stack: ["TypeScript", "React", "Tailwind CSS"],
    contribution:
      "Built the founding demo: a sports-betting frontend prototype where users compete against each other instead of the house. Pick players, bet the over/under head-to-head against an opponent, and the winner takes the pot.",
    decision:
      "Built just the frontend against a fake data layer so we could present a demo and get feedback from investors.",
    metric: "3 game modes · 30+ NBA players",
    links: [{ label: "Code is private" }],
    media: {
      src: rosterImg,
      alt: "Roster sports-betting prototype showing live NBA matchups and duel modes",
      portrait: true,
    },
  },
  {
    name: "Crayons to Classrooms",
    context: "Change++ at Vanderbilt · Sep 2025 – Apr 2026",
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Material UI",
    ],
    contribution:
      "Inventory management for a nonprofit supplying school materials. Developed full-stack undo functionality for inventory movements and built the storage locations routes with Zod schema validation. Also built the main dashboard. Collaborated on a team of 9 students with a PM, EM, and designer.",
    decision:
      "Design: Did not define data models twice. Instead, used Zod to validate data at the API before it causes problems downstream.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ChangePlusPlusVandy/crayons-to-classrooms",
      },
    ],
    media: {
      src: crayonsImg,
      alt: "Crayons to Classrooms inventory dashboard with quick actions, inventory health, and undoable activity log",
    },
  },
  {
    name: "Object Detection for Medical Imaging",
    context:
      "Vanderbilt Mobile Health for Global Health Lab · Software Developer · Mar – Dec 2025",
    stack: ["Python", "PyTorch", "COCO"],
    contribution:
      "Trained and validated object detection models on 200+ annotated medical images. Built the pipelines for training, testing, and loss tracking. Evaluated performance with precision, recall, and mean average precision across multiple IoU thresholds.",
    decision:
      "TODO: one real decision or tradeoff — e.g. why compare two-stage (Faster/Mask R-CNN) against single-stage architectures? Accuracy vs. inference speed for a mobile health deployment?",
    metric: ">95% mAP across all classes at IoU ≤ 0.8",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MichaelH7190/computer-vision-training",
      },
    ],
    media: {
      src: researchImg,
      alt: "Chart of overall and class-wise mAP holding near 1.0 until IoU 0.8, then declining",
    },
  },
];
