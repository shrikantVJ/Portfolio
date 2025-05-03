import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines Tailwind classes and merges duplicates intelligently
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
