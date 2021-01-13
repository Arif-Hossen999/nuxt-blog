import HTTP from "@/services/HTTP.js";
export const state = () => ({
  myPosts: [],
  
});
export const mutations = {
  // mutations for all post
  SET_POST(state, postResponseData) {
    state.myPosts = postResponseData;
  },
  
};
export const actions = {
  // fetch all post
  fetchMyPosts({ commit }) {
    // console.log("fetchMyPosts");
    return HTTP.getMyPost().then(response => {
      // console.log(response);
      commit("SET_POST", response.data);
    });
  },
  
};
