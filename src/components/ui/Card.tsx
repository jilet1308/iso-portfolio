import type CardProps from "../../props/CardProps";

function Card({ children, accent = "teal" }: CardProps) {
  const accentClass =
    accent === "teal"
      ? "border-l-4 border-l-teal-400 dark:border-l-teal-500"
      : accent === "amber"
        ? "border-l-4 border-l-amber-400 dark:border-l-amber-500"
        : "";

  return (
    <div
      className={`border border-black dark:border-stone-500 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_theme(colors.stone.500)] p-5 dark:bg-stone-800 ${accentClass}`}
    >
      {children}
    </div>
  );
}

export default Card;
