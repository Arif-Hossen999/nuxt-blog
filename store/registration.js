import HTTP from "@/services/HTTP.js";
import iview from "@/plugins/iview.js";
export const state = () => ({
  registerUsername: null,
  registerEmail: null,
  registerPassword: null,
  registerErrorUsername: null,
  registerErrorEmail: null,
  registerErrorEmailUnique: null,
  registerErrorPassword: null,
  registerError: null,
  registerSuccess: null
});
export const mutations = {
  setRegisterUsername(state, username) {
    state.registerUsername = username;
  },
  setRegisterEmail(state, email) {
    state.registerEmail = email;
  },
  setRegisterPassword(state, password) {
    state.registerPassword = password;
  },
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
  setRegisterError(state, error) {
    state.registerError = error;
  },
  setRegisterSuccess(state, message) {
    state.registerSucess = message;
  }
};
export const actions = {
  getInput({ state, commit }) {
    console.log(state, "state");
    return HTTP.userRegister({
      username: state.registerUsername,
      email: state.registerEmail,
      password: state.registerPassword
    })
      .then(response => {
        console.log(response.data);
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
          // commit("setRegisterSuccess", "Sign up successfull.");
          alert("Sign up successfull.");
          // this.iview.s("Sign up successfull.");
          this.$router.push({ name: "auth-login" });
        }
      })
      .catch(error => {
        commit("setRegisterError", "Something went wrong.");
      });
  }
};
