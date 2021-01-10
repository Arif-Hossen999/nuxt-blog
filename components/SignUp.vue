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
          <p>{{registerErrorUsername}}</p>

          <v-text-field
            label="Email"
            :value="registerEmail"
            @input="setRegisterEmail"
            prepend-icon="mdi-email"
          />
          <p>{{registerErrorEmail}}</p>
          <p>{{registerErrorEmailUnique}}</p>
          <v-text-field
            type="password"
            label="Password"
            :value="registerPassword"
            @input="setRegisterPassword"
            prepend-icon="mdi-lock"
          />
          <p>{{registerErrorPassword}}</p>
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
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  name: "App",
  data() {
    return {
    };
  },

  methods: {
    ...mapMutations('registration', [
      'setRegisterUsername',
      'setRegisterEmail',
      'setRegisterPassword',
    ]),
    ...mapActions('registration', [
      'getInput',
    ]),
  },
  computed: {
    ...mapState('registration', [
      'registerUsername',
      'registerEmail',
      'registerPassword',
      'registerErrorUsername',
      'registerErrorEmail',
      'registerErrorEmailUnique',
      'registerErrorPassword',
      'registerError',
      'registerSuccess',

    ]),
  },
};
</script>
