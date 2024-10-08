import axios from "axios";

const http = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 5000,
  withCredentials: true,
});

export { http };
