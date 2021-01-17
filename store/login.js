export const state = () => ({
  // variable for store login form input
  loginEmail: null,
  loginPassword: null,
  // variable for store frontend form validation error message
  loginFormErrorEmail: null,
  loginFormErrorPassword: null,
  // variable for store backend email password check error message
  loginErrorEmailPasswordCheck: null,

  // variable for store backend validation error message
  // loginErrorEmail: null,
  // loginErrorPassword: null,

  // variable for store backend try error message
  // loginErrorEmailCheck: null,
  // loginErrorPasswordCheck: null,

  // variable for store backend catch error message
  loginError: null
});

export const mutations = {
  // store form input data
  setLoginEmail(state, email) {
    state.loginEmail = email;
  },
  setLoginPassword(state, email) {
    state.loginPassword = email;
  },
  // store form validation error message
  setLoginFormErrorEmail(state, error) {
    state.loginFormErrorEmail = error;
  },
  setLoginFormErrorPassword(state, error) {
    state.loginFormErrorPassword = error;
  },
  // store backend validation error message
  setLoginErrorEmailPasswordCheck(state, error) {
    state.loginErrorEmailPasswordCheck = error;
  },

  // store backend validation error message
  // setLoginErrorEmail(state, error) {
  //   state.loginErrorEmail = error;
  // },
  // setLoginErrorPassword(state, error) {
  //   state.loginErrorPassword = error;
  // },

  // store backend try error message
  // setLoginErrorEmailCheck(state, error) {
  //   state.loginErrorEmailCheck = error;
  // },
  // setLoginErrorPasswordCheck(state, error) {
  //   state.loginErrorPasswordCheck = error;
  // },

  // store backend catch error message
  setLoginError(state, error) {
    state.loginError = error;
  }
};

export const actions = {
  // go to sign up page
  getRegister() {
    this.$router.push({ name: "auth-signup" });
  },
  // user login function
  async getInput({ state, commit }) {
    // console.log(state, "state");
    try {
      // console.log("getInput try");
      if (state.loginEmail && state.loginPassword != '') {
        // console.log("getInput");
        let data = {
          email: state.loginEmail,
          password: state.loginPassword
        };
        await this.$auth
          .loginWith("local", {
            data: data
          })
          .then(response => {
            this.$toast.success("Login successfull");
            this.$router.push({ name: "index" });
            // remove state data
            commit("setLoginEmail", "");
            commit("setLoginPassword", "");
            commit("setLoginFormErrorEmail", "");
            commit("setLoginFormErrorPassword", "");
            commit("setLoginErrorEmailPasswordCheck", "");
          })
          .catch(error => {
            // console.log(error);
            if (error) {
              commit(
                "setLoginErrorEmailPasswordCheck",
                "Sorry, this email or password is not recognized."
              );
            }
          });
      }
      // check frontend form validation
      if (state.loginEmail == '') {
        commit("setLoginFormErrorEmail", "Email is required.");
      }
      if (state.loginPassword == '') {
        commit("setLoginFormErrorPassword", "Password is required.");
      }
    } catch (error) {
      // console.log(error);
      commit("setLoginError","Something went wrong.")
    }
  },
  async removeData({ commit }) {
    // console.log("remove data");
    commit("setLoginEmail", "");
    commit("setLoginPassword", "");
    commit("setLoginFormErrorEmail", "");
    commit("setLoginFormErrorPassword", "");
    commit("setLoginErrorEmailPasswordCheck", "");
  }
};
// store state value for use another page
export const getters = {
  // get login user id
  // userId: state => {
  //   return state.userId;
  // }
  // check user login or not
  // isLoggedIn: state => {
  //   return !!state.token;
  // }
};
