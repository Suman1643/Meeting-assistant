import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import axios from "axios";


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const baseURL = "https://meeting-assistant-backend.me";

export const API = axios.create({
  baseURL: baseURL,
});