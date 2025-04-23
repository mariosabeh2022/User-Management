import axios from "axios";
import { useSessionStore } from "../store/session/sessionStore";
export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
});
export const protectedInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
});
protectedInstance.interceptors.request.use(
  (req) => {
    const token = useSessionStore((state) => state.accessToken);
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    req.headers["Content-type"] = "application/json";
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);
