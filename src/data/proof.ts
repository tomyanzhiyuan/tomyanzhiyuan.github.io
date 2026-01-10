import { Smartphone, GraduationCap, Users, Award, Cpu } from "lucide-react";

export interface ProofTile {
  id: string;
  icon: typeof Smartphone;
  label: string;
  metric?: string;
  link?: string;
}

export const proofTiles: ProofTile[] = [
  {
    id: "apps",
    icon: Smartphone,
    label: "iOS Apps Shipped",
    metric: "3",
  },
  {
    id: "research",
    icon: GraduationCap,
    label: "CS @ Rochester",
    metric: "3.8 GPA",
  },
  {
    id: "leadership",
    icon: Users,
    label: "SSA Co-founder",
    metric: "Student org",
  },
  {
    id: "military",
    icon: Award,
    label: "Military Leadership",
    metric: "Recon unit",
  },
  {
    id: "focus",
    icon: Cpu,
    label: "Current Focus",
    metric: "Applied AI",
  },
];

