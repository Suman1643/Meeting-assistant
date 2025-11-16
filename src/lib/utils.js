import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        removeToken();
        return null;
      }
      return token;
    } catch (error) {
      console.log(error);
      removeToken();
      return null;
    }
  }
  return null;
};

export const removeToken = () => {
  localStorage.removeItem("token");
};


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const baseURL = "https://meeting-assistant-backend.me";

export const API = axios.create({
  baseURL: baseURL,
});