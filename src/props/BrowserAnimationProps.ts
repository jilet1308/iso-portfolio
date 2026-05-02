import type { Phase } from "../types/HomeTypes";

export default interface BrowserAnimationProps {
  phase: Phase;
  typedText: string;
  visibleResults: number;
  loadProgress: number;
  browserVisible: boolean;
  isTransitioning: boolean;
  addressBar: string;
  skip: () => void;
}
