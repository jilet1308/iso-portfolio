import { useContext } from "react";
import { type ThemeContextType } from "./ThemeContextType";
import { ThemeContext } from "./ThemeContext";

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
