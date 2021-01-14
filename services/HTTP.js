import clientAPI from "./AxiosConfig";

const baseURL = "http://127.0.0.1:3333";
export default {
  // user login
  userLogin({ email, password }) {
    return clientAPI(baseURL).post("/api/auth/login", {
      email,
      password
    });
  },
  
  // get all posts
  getPost() {
    return clientAPI(baseURL).get("/api/allpost");
  },
  // get my posts
  getMyPost() {
    return clientAPI(baseURL).get("/api/mypost");
  }
};
