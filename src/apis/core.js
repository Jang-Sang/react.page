import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  // vite의 경우 import.meta.env.키값(VITE_)
})

