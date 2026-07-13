import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter((part) => part.length > 0)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export function isExternalLink(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

export function normalizePath(path: string): string {
  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function isActivePath(currentPath: string, targetPath: string): boolean {
  const current = normalizePath(currentPath);
  const target = normalizePath(targetPath);
  return (
    current === target || (target !== "/" && current.startsWith(`${target}/`))
  );
}

export function getOptionLabel(options: { value: string; label: string }[], value: string): string {
  return options.find((option) => option.value === value)?.label ?? "";
}


