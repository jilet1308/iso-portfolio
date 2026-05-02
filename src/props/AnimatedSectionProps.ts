import type { ReactNode } from "react";

export default interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}
