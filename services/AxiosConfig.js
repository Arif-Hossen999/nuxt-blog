import axios from "axios";

const clientAPI = url =>
  axios.create({
    baseURL: url,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

// console.log(clientAPI);

// clientAPI.defaults.headers.common["header1"] = "value"; // for all requests
export default clientAPI;
