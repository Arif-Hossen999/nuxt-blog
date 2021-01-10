import clientAPI from "./AxiosConfig";

const baseURL = "http://127.0.0.1:3333";
export default {
  // user registration
  userRegister({ username, email, password }) {
    return clientAPI(baseURL).post("/api/auth/register", {
      username,
      email,
      password
    });
  },
  // get all posts
  getPost() {
    return clientAPI(baseURL).get("/api/allpost");
  }
};
