<template>
  <v-app>
    <v-card width="400px" class="mt-5 mx-a">
      <v-card-title>
        <h1 class="dispay-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Email"
            :value="loginEmail"
            @input="setLoginEmail"
            prepend-icon="mdi-email"
          />
          <!-- show frontend error message -->
          <p>{{loginFormErrorEmail}}</p>
          <!-- show backend error message -->
          <p>{{ loginErrorEmail }}</p>
          <!-- show backend try error message -->
          <p>{{ loginErrorEmailCheck }}</p>
          <v-text-field
            type="password"
            label="Password"
            :value="loginPassword"
            @input="setLoginPassword"
            prepend-icon="mdi-lock"
          />
          <!-- show frontend error message -->
          <p>{{loginFormErrorPassword}}</p>
          <!-- show backend error message -->
          <p>{{ loginErrorPassword }}</p>
          <!-- show backend try error message -->
          <p>{{ loginErrorPasswordCheck }}</p>
          <!-- show backend catch error message -->
          <p>{{ loginError }}</p>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-action>
        <v-btn color="success" @click="getRegister()">Register</v-btn>
        <v-btn color="info" @click="getInput()">Login</v-btn>
      </v-card-action>
    </v-card>
  </v-app>
</template>

<script>
// import vuex for use store
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "App",

  methods: {
    // pass form input value
    ...mapMutations("login", [
      "setLoginEmail", 
      "setLoginPassword"
      ]),
    ...mapActions("login", [
      "getInput", 
      "getRegister"
      ])
  },
  computed: {
    ...mapState("login", [
      // show form input value
      "loginEmail",
      "loginPassword",
      // show frontend form validation error message
      'loginFormErrorEmail',
      'loginFormErrorPassword',
      // show backend validation error message
      "loginErrorEmail",
      "loginErrorPassword",
      // show backend try error message
      "loginErrorEmailCheck",
      "loginErrorPasswordCheck",
      // show backend catch error message
      "loginError"
    ])
  }
};
</script>
