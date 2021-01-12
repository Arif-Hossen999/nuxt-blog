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
  // user login
  userLogin({email, password }) {
    return clientAPI(baseURL).post("/api/auth/login", {
      email,
      password
    });
  },
  // create post
  createPost({title, post, user_id }) {
    return clientAPI(baseURL).post("/api/create/post", {
      title,
      post,
      user_id
    });
  },
  // get all posts
  getPost() {
    return clientAPI(baseURL).get("/api/allpost");
  }
};
