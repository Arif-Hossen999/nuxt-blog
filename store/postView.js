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
  async fetchPosts({ commit }) {
    await this.$axios
      .$get("/api/allpost").then(response => {
      commit("SET_POST", response);
    });
  },
  
};
