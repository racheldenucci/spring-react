import axios from "axios";

export default axios.create({
    //pode mudar dependendo da url da api rest
  baseURL: "http://localhost:8080/api", 
  headers: {
    "Content-type": "application/json"
  }
});
