import Axios from "axios";
import { API_URL } from "../config";

const axios = Axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: 'json',
});

export default axios;
