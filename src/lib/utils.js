import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn = "class names"
 * Combines conditional classes (clsx) and merges Tailwind conflicts (twMerge).
 *
 * Example:
 * cn("px-4", isActive && "bg-rose-500", "px-6")
 * → "bg-rose-500 px-6"
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}