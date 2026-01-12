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
    description: "Chasing fresh powder in NA, Asia, and Europe. Favorite: Val Thorens.",
    emoji: "⛷️",
  },
  {
    id: "photography",
    title: "Photography",
    description: "Street and portrait work. Sony shooter.",
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
    description: "Everyday must: Breakfast Omelette ",
    emoji: "🍳",
  },
];

