import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.gstatic.com/charts/loader.js",
});
