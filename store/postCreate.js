import HTTP from "@/services/HTTP.js";

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
  getInput({ state, commit }, userId) {
    if (state.postTitle && state.postDescription != null) {
      return HTTP.createPost({
        title: state.postTitle,
        post: state.postDescription,
        user_id: userId
      })
        .then(response => {
          //   console.log(response);
          // check backend validation error message
          if (response.data.length) {
            if (response.data[0].message == "Title is required.") {
              commit("setPostErrorTitle", response.data[0].message);
            }
            if (response.data[0].message == "Description is required.") {
              commit("setPostErrorDescription", response.data[0].message);
            }
          } else {
            // show success message
            this.$toast.success("Successfully posted");
            // remove state data
            state.postTitle = state.postDescription = state.postFormErrorTitle = state.postFormErrorDescription = state.postErrorTitle = state.postErrorDescription = state.postError = null;
          }
        })
        .catch(error => {
          // check bankend catch error message
          commit("setPostError", "Something went wrong.");
        });
    }
    // check frontend form validation
    if (state.postTitle == null) {
      commit("setPostFormErrorTitle", "Title is required.");
    }
    if (state.postDescription == null) {
      commit("setPostFormErrorDescription", "Description is required.");
    }
  }
};
