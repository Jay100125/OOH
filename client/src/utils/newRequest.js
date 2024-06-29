import axios from "axios";

const newRequest = axios.create({
   baseURL: "https://designhive.onrender.com/api",
  withCredentials: true,
});

export default newRequest;