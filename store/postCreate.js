export const state = () => ({
  // variable for store form input
  postTitle: null,
  postDescription: null,
  // variable for store frontend form validation error message
  postFormErrorTitle: null,
  postFormErrorDescription: null,
  // variable for store backend validation message
  postErrorTitle: null,
  postErrorDescription: null,
  // variable for store backend catch error message
  postError: null
});
export const mutations = {
  // store form input data
  setPostTitle(state, title) {
    state.postTitle = title;
  },
  setPostDescription(state, description) {
    state.postDescription = description;
  },
  // store form validation error message
  setPostFormErrorTitle(state, error) {
    state.postFormErrorTitle = error;
  },
  setPostFormErrorDescription(state, error) {
    state.postFormErrorDescription = error;
  },
  // store backend validation error message
  setPostErrorTitle(state, error) {
    state.postErrorTitle = error;
  },
  setPostErrorDescription(state, error) {
    state.postErrorDescription = error;
  },
  // store backend catch error message
  setPostError(state, error) {
    state.postError = error;
  }
};
export const actions = {
  async getInput({ state, commit }) {
    // console.log("get input");
    if (state.postTitle && state.postDescription != '') {
      // console.log("with form data");
      await this.$axios
        .$post("/api/create/post", {
          title: state.postTitle,
          post: state.postDescription,
          user_id: this.$auth.user.id
        })
        .then(response => {
          // console.log(response);
          // check backend validation error message
          if (response.length) {
            if (response[0].message == "Title is required.") {
              commit("setPostErrorTitle", response[0].message);
            }
            if (response[0].message == "Description is required.") {
              commit("setPostErrorDescription", response[0].message);
            }
          } else {
            // show success message
            this.$toast.success("Successfully posted");
            this.$router.push({ name: "mypost" });
            // remove state data
            commit("setPostTitle", "");
            commit("setPostDescription", "");
            commit("setPostFormErrorTitle", "");
            commit("setPostFormErrorDescription", "");
            commit("setPostErrorTitle", "");
            commit("setPostErrorDescription", "");
            commit("setPostError", "");
          }
        })
        .catch(error => {
          // check bankend catch error message
          commit("setPostError", "Something went wrong.");
        });
    }
    // check frontend form validation
    if (state.postTitle == '') {
      console.log("with out post title");
      commit("setPostFormErrorTitle", "Title is required.");
    }
    if (state.postDescription == '') {
      console.log("with out post description");
      commit("setPostFormErrorDescription", "Description is required.");
    }
  },
  async removeData({ commit }) {
    // console.log("remove data");
    commit("setPostTitle", "");
    commit("setPostDescription", "");
    commit("setPostFormErrorTitle", "");
    commit("setPostFormErrorDescription", "");
    commit("setPostErrorTitle", "");
    commit("setPostErrorDescription", "");
    commit("setPostError", "");
  }
};
