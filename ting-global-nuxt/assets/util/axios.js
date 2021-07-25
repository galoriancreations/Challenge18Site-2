import axios from "axios";

export const baseURL = "http://193.46.199.76:8087";

export default axios.create({ baseURL });