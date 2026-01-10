export interface Interest {
  id: string;
  title: string;
  description: string;
  emoji: string;
  link?: string;
}

export const interests: Interest[] = [
  {
    id: "skiing",
    title: "Skiing",
    description: "Chasing fresh powder in the Northeast. Bristol Mountain regular.",
    emoji: "⛷️",
  },
  {
    id: "photography",
    title: "Photography",
    description: "Street and portrait work. Fujifilm shooter.",
    emoji: "📷",
  },
  {
    id: "gaming",
    title: "Gaming",
    description: "CS:GO skins collector and competitive player.",
    emoji: "🎮",
  },
  {
    id: "cooking",
    title: "Cooking",
    description: "Experimenting with recipes. Always perfecting my dumplings.",
    emoji: "🍳",
  },
];

