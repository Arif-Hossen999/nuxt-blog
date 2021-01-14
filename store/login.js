import HTTP from "@/services/HTTP.js";
export const state = () => ({

  // variable for store login form input
  loginEmail: null,
  loginPassword: null,
  // variable for store frontend form validation error message
  loginFormErrorEmail: null,
  loginFormErrorPassword: null,
  // variable for store backend validation error message
  loginErrorEmail: null,
  loginErrorPassword: null,
  // variable for store backend try error message
  loginErrorEmailCheck: null,
  loginErrorPasswordCheck: null,
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
  setLoginErrorEmail(state, error) {
    state.loginErrorEmail = error;
  },
  setLoginErrorPassword(state, error) {
    state.loginErrorPassword = error;
  },
  // store backend try error message
  setLoginErrorEmailCheck(state, error) {
    state.loginErrorEmailCheck = error;
  },
  setLoginErrorPasswordCheck(state, error) {
    state.loginErrorPasswordCheck = error;
  },
  // store backend catch error message
  setLoginError(state, error) {
    state.loginError = error;
  },

};

export const actions = {
  // go to sign up page
  getRegister() {
    this.$router.push({ name: "auth-signup" });
  },
  // user login function
  async getInput({ state, commit }) {
    try {
      if (state.loginEmail && state.loginPassword != null) {
        console.log("getInput");
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
        })
        .catch(error => {
          console.log(error);
        });
      }
      // check frontend form validation
      if (state.loginEmail == null) {
        commit("setLoginFormErrorEmail", "Email is required.");
      }
      if (state.loginPassword == null) {
        commit("setLoginFormErrorPassword", "Password is required.");
      }
      
    } catch (error) {
      console.log(error);
    }
    if (state.loginEmail && state.loginPassword != null) {
      // then(response => {
      //   console.log("response then");
      //   if (response) {
      //     console.log("error");
      //     // check backend validation error message
      //     // if (response.data[0].message == "email is required.") {
      //     //   commit("setLoginErrorEmail", response.data[0].message);
      //     // }
      //     // if (response.data[0].message == "password is required.") {
      //     //   commit("setLoginErrorPassword", response.data[0].message);
      //     // }
      //     // check email and password match or not
      //     if (response.data == "Sorry, this email is not recognized") {
      //       commit("setLoginErrorEmailCheck", response.data);
      //     }
      //     // if (response.data == "Password doesn't match") {
      //     //   commit("setLoginErrorPasswordCheck", response.data);
      //     // }
      //   } else {
      //     // store response user token and id
      //     commit("setUserToken", response.data.user_token);
      //     commit("setUserId", response.data.userId);
      //     // show success message and redirect login page
      //     this.$toast.success("Login successfull");
      //     this.$router.push({ name: "index" });
      //     // remove state data
      //     commit("resetForm", null);
      //   }
      // })
      // .catch(error => {
      //   // check bankend catch error message
      //   commit("setLoginError", "Something went wrong.");
      // });
    }
    
   
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
