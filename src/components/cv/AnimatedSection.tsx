import { useInView } from "../../hooks/useInView";
import type AnimatedSectionProps from "../../props/AnimatedSectionProps";

function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`cv-section ${inView ? "in-view" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
