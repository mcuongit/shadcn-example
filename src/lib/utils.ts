import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Type guard
 * @param obj Object need to check
 * @param props List of props in object
 * @returns true if safe, false if unsafe
 */
export function isSafe<T>(obj: unknown, props: string[]): obj is T {
  if (obj === null || typeof obj !== "object") {
    return false;
  }
  for (const prop of props) {
    if (!(prop in obj)) {
      return false;
    }
  }
  return true;
}
