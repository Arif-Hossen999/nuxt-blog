import HTTP from "@/services/HTTP.js";
export const state = () => ({
  allPosts: [],
  
});
export const mutations = {
  // mutations for all post
  SET_POST(state, postResponseData) {
    state.allPosts = postResponseData;
  },
  
};
export const actions = {
  // fetch all post
  fetchPosts({ commit }) {
    return HTTP.getPost().then(response => {
      commit("SET_POST", response.data);
    });
  },
  
};
