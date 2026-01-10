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
    context: "Building Monty",
    action:
      "Shipped an ugly MVP in 2 weeks, then iterated 12 times based on real player feedback before App Store submission.",
  },
  {
    id: "2",
    context: "ImageR architecture",
    action:
      "Chose on-device ML over cloud APIs—slower to build, but users keep their photos private and it works offline.",
  },
];

