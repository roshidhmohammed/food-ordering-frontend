import axios from "axios";
import { RESTAURANT_API } from "../utils/constants";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
