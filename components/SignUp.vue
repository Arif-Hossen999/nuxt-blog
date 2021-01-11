<template>
  <v-app>
    <v-card width="400px" class="mt-5 mx-a">
      <v-card-title>
        <h1 class="dispay-1">Sign up</h1>
      </v-card-title>
      
      <v-card-text>
        <v-form>
          <v-text-field
            label="User Name"
            :value="registerUsername"
            @input="setRegisterUsername"
            prepend-icon="mdi-account-circle"
          />
          <!-- show frontend error message -->
          <p>{{registerFormErrorUsername}}</p>
          <!-- show backend error message -->
          <p>{{registerErrorUsername}}</p>

          <v-text-field
            label="Email"
            :value="registerEmail"
            @input="setRegisterEmail"
            prepend-icon="mdi-email"
          />
          <!-- show frontend error message -->
          <p>{{registerFormErrorEmail}}</p>
          <!-- show backend error message -->
          <p>{{registerErrorEmail}}</p>
          <p>{{registerErrorEmailUnique}}</p>
          <v-text-field
            type="password"
            label="Password"
            :value="registerPassword"
            @input="setRegisterPassword"
            prepend-icon="mdi-lock"
          />
          <!-- show frontend error message -->
          <p>{{registerFormErrorPassword}}</p>
          <!-- show backend error message -->
          <p>{{registerErrorPassword}}</p>
          <!-- show backend catch error message -->
          <p>{{registerError}}</p>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-action>
        <v-btn color="success" @click="getInput()">Register</v-btn>
      </v-card-action>

    </v-card>
  </v-app>
</template>

<script>
// import vuex for use store
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  name: "App",

  methods: {
    // pass form input value
    ...mapMutations('registration', [
      'setRegisterUsername',
      'setRegisterEmail',
      'setRegisterPassword',
    ]),
  // actions work when click any function
    ...mapActions('registration', [
      'getInput',
    ]),
  },
  computed: {
    // use state value
    ...mapState('registration', [
      //use for show form input value
      'registerUsername',
      'registerEmail',
      'registerPassword',
      //use for show frontend form validation error message
      'registerFormErrorUsername',
      'registerFormErrorEmail',
      'registerFormErrorPassword',
      //use for show backend validation error message
      'registerErrorUsername',
      'registerErrorEmail',
      'registerErrorEmailUnique',
      'registerErrorPassword',
      //use for show backend catch error message
      'registerError',

    ]),
  },
};
</script>
