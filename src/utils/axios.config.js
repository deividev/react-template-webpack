import axios from "axios-observable";
 
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  responseType: "json",
  timeout: 6000
});
