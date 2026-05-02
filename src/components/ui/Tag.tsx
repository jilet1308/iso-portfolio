import type TagProps from "../../props/TagProps";

function Tag({ label, color = "teal" }: TagProps) {
  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs border border-black dark:border-stone-400 font-bold ${
        color === "teal"
          ? "bg-teal-300 dark:bg-teal-800 dark:text-teal-100"
          : "bg-amber-300 dark:bg-amber-800 dark:text-amber-100"
      }`}
    >
      {label}
    </span>
  );
}

export default Tag;
