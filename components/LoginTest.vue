<template>
  <v-app>
    <v-card width="400px" class="mt-5 mx-a">
      <v-card-title>
        <h1 class="dispay-1">Login Test</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Email"
            v-model="login.email"
            prepend-icon="mdi-email"
          />
          <v-text-field
            type="password"
            label="Password"
            v-model="login.password"
            prepend-icon="mdi-lock"
          />
         
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
data() {
    return {
        login: {
        email: '',
        password: ''
      }
    }
},
  methods: {
    async getInput() {
      try {
          console.log("getInput");  
        let response = await this.$auth.loginWith('local', { 
           data: this.login 
            })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  },
  
};
</script>
