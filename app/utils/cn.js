"use client"
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export async function cn(...inputs) {
  return twMerge(clsx(inputs));
}