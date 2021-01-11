import HTTP from "@/services/HTTP.js";
// state for user registration
export const state = () => ({
  // variable for store registraion form input
  registerUsername: null,
  registerEmail: null,
  registerPassword: null,
  // variable for store frontend form validation error message
  registerFormErrorUsername: null,
  registerFormErrorEmail: null,
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
  getInput({ state, commit }) {
    // console.log(state, "state");

    if (
      state.registerUsername &&
      state.registerEmail &&
      state.registerPassword != null
    ) {
      return HTTP.userRegister({
        username: state.registerUsername,
        email: state.registerEmail,
        password: state.registerPassword
      })
        .then(response => {
          // console.log(response.data);
          // check backend validation error message
          if (response.data.length) {
            if (response.data[0].message == "username is required.") {
              commit("setRegisterErrorUsername", response.data[0].message);
            }
            if (response.data[0].message == "email is required.") {
              commit("setRegisterErrorEmail", response.data[0].message);
            }
            if (
              response.data[0].message == "This email has already been taken."
            ) {
              commit("setRegisterErrorEmailUnique", response.data[0].message);
            }
            if (response.data[0].message == "password is required.") {
              commit("setRegisterErrorPassword", response.data[0].message);
            }
          } else {
            // show success message and redirect login page
            this.$toast.success("Sign up successfull");
            this.$router.push({ name: "auth-login" });

            // remove state data
            state.registerUsername = state.registerEmail = state.registerPassword = state.registerFormErrorUsername = state.registerFormErrorEmail = state.registerFormErrorPassword = state.registerErrorUsername = state.registerErrorEmail = state.registerErrorEmailUnique = state.registerErrorPassword = state.registerError = null;
          }
        })
        .catch(error => {
          // check bankend catch error message
          commit("setRegisterError", "Something went wrong.");
        });
    }

    // check frontend form validation
    if (state.registerUsername == null) {
      commit("setRegisterFormErrorUsername", "Username is required.");
    }
    if (state.registerEmail == null) {
      commit("setRegisterFormErrorEmail", "Password is required.");
    }
    if (state.registerPassword == null) {
      commit("setRegisterFormErrorPassword", "Password is required.");
    }
  }
};
