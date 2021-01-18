// state for user registration
export const state = () => ({
  // variable for store registraion form input
  registerUsername: null,
  registerEmail: null,
  registerPassword: null,
  // variable for store frontend form validation error message
  registerFormErrorUsername: null,
  registerFormErrorEmail: null,
  registerFormErrorEmailValidation: null,
  registerFormErrorPassword: null,
  // variable for store backend validation message
  registerErrorUsername: null,
  registerErrorEmail: null,
  registerErrorEmailUnique: null,
  registerErrorPassword: null,
  // variable for store backend catch error message
  registerError: null
});
// mutations for user registration
export const mutations = {
  // store form input data
  setRegisterUsername(state, username) {
    state.registerUsername = username;
  },
  setRegisterEmail(state, email) {
    state.registerEmail = email;
  },
  setRegisterPassword(state, password) {
    state.registerPassword = password;
  },
  // store form validation error message
  setRegisterFormErrorUsername(state, error) {
    state.registerFormErrorUsername = error;
  },
  setRegisterFormErrorEmail(state, error) {
    state.registerFormErrorEmail = error;
  },
  setRegisterFormErrorEmailValidation(state, error) {
    state.registerFormErrorEmailValidation = error;
  },
  setRegisterFormErrorPassword(state, error) {
    state.registerFormErrorPassword = error;
  },
  // store backend validation error message
  setRegisterErrorUsername(state, error) {
    state.registerErrorUsername = error;
  },
  setRegisterErrorEmail(state, error) {
    state.registerErrorEmail = error;
  },
  setRegisterErrorEmailUnique(state, error) {
    state.registerErrorEmailUnique = error;
  },
  setRegisterErrorPassword(state, error) {
    state.registerErrorPassword = error;
  },
  // store backend catch error message
  setRegisterError(state, error) {
    state.registerError = error;
  }
};
// actions for user registration
export const actions = {
  async getInput({ state, commit }) {
    // console.log(state, "state");

    if (
      state.registerUsername &&
      state.registerEmail &&
      state.registerPassword != ""
    ) {
      // email validation
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const result = re.test(state.registerEmail);
      if (!result) {
        console.log(result, "result");
        commit("setRegisterFormErrorEmailValidation", "Valid email required.");
      } else {
        await this.$axios
        .$post("/api/auth/register", {
          username: state.registerUsername,
          email: state.registerEmail,
          password: state.registerPassword
        })
        .then(response => {
          // console.log(response);
          // check backend validation error message
          if (response.length) {
            // console.log("error length");
            if (response[0].message == "username is required.") {
              commit("setRegisterErrorUsername", response[0].message);
            }
            if (response[0].message == "email is required.") {
              commit("setRegisterErrorEmail", response[0].message);
            }
            if (response[0].message == "This email has already been taken.") {
              commit("setRegisterErrorEmailUnique", response[0].message);
            }
            if (response[0].message == "password is required.") {
              commit("setRegisterErrorPassword", response[0].message);
            }
          } else {
            // show success message and redirect login page
            this.$toast.success("Sign up successfull");
            this.$router.push({ name: "auth-login" });
            // remove state data
            commit("setRegisterUsername", "");
            commit("setRegisterEmail", "");
            commit("setRegisterPassword", "");

            commit("setRegisterFormErrorUsername", "");
            commit("setRegisterFormErrorEmail", "");
            commit("setRegisterFormErrorEmailValidation", "");
            commit("setRegisterFormErrorPassword", "");
            commit("setRegisterErrorUsername", "");
            commit("setRegisterErrorEmail", "");

            commit("setRegisterErrorEmailUnique", "");
            commit("setRegisterErrorPassword", "");
            commit("setRegisterError", "");
          }
        })
        .catch(error => {
          // check bankend catch error message
          commit("setRegisterError", "Something went wrong.");
        });
      }
    }

    // check frontend form validation
    if (state.registerUsername == "") {
      commit("setRegisterFormErrorUsername", "Username is required.");
    }
    if (state.registerEmail == "") {
      commit("setRegisterFormErrorEmail", "Password is required.");
    }
    if (state.registerPassword == "") {
      commit("setRegisterFormErrorPassword", "Password is required.");
    }
  },
  async removeData({ commit }) {
    // console.log("remove data");
    commit("setRegisterUsername", "");
    commit("setRegisterEmail", "");
    commit("setRegisterPassword", "");

    commit("setRegisterFormErrorUsername", "");
    commit("setRegisterFormErrorEmail", "");
    commit("setRegisterFormErrorEmailValidation", "");
    commit("setRegisterFormErrorPassword", "");
    commit("setRegisterErrorUsername", "");
    commit("setRegisterErrorEmail", "");

    commit("setRegisterErrorEmailUnique", "");
    commit("setRegisterErrorPassword", "");
    commit("setRegisterError", "");
  }
};
