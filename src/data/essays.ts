export interface Essay {
  id: string;
  title: string;
  hook: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
  published: boolean;
}

export const essays: Essay[] = [
  {
    id: "1",
    title: "Why I Build in Public",
    hook: "Shipping ugly work early taught me more than any course.",
    date: "2024-12-15",
    readTime: "5 min",
    slug: "build-in-public",
    tags: ["process", "learning"],
    published: true,
  },
  {
    id: "2",
    title: "From Reconnaissance to Code",
    hook: "What military training taught me about debugging complex systems.",
    date: "2024-11-20",
    readTime: "7 min",
    slug: "recon-to-code",
    tags: ["career", "systems"],
    published: true,
  },
  {
    id: "3",
    title: "Designing for Clarity",
    hook: "The single question I ask before adding any feature.",
    date: "2024-10-08",
    readTime: "4 min",
    slug: "designing-clarity",
    tags: ["design", "product"],
    published: true,
  },
];

export const getPublishedEssays = () =>
  essays.filter((e) => e.published).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

