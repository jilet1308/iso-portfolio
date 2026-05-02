import type { ReactNode } from "react";

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl uppercase tracking-widest font-bold dark:text-amber-50 border-b-4 border-teal-400 dark:border-teal-500 pb-1 mb-6">
      {children}
    </h2>
  );
}

export default SectionTitle;
