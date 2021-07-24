import axios from "axios";

console.log(process.env.EMAILJS_TEMPLATE)

export const baseURL = "http://193.46.199.76:8087";

export default axios.create({ baseURL });