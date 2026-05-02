import type { ReactNode } from "react";

export default interface GoofyButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}
