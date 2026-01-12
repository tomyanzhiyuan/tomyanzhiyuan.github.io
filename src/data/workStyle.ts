export interface Principle {
  id: string;
  title: string;
  description: string;
}

export interface Example {
  id: string;
  context: string;
  action: string;
}

export const principles: Principle[] = [
  {
    id: "clarity",
    title: "Clarity First",
    description:
      "I cut complexity until the core idea is obvious. If I can't explain it simply, I don't understand it well enough.",
  },
  {
    id: "ownership",
    title: "Full Ownership",
    description:
      "I ship end-to-end: design, code, deploy, iterate. No handoffs, no excuses, no waiting for permission.",
  },
  {
    id: "polish",
    title: "Polish Matters",
    description:
      "Details compound. I sweat the micro-interactions, the loading states, the edge cases others skip.",
  },
];

export const examples: Example[] = [
  {
    id: "1",
    context: "This website",
    action:
      "Built with a custom WebGL fluid simulation, then simplified to prioritize clarity over flash when it distracted from content.",
  },
  {
    id: "2",
    context: "Project architecture",
    action:
      "Always start with the simplest thing that works, then add complexity only when real problems demand it.",
  },
];

