<template>
  <v-app>
    <v-card width="400px" class="mt-5 mx-a">
      <v-card-title>
        <h1 class="dispay-1">Login</h1>
      </v-card-title>

      <v-card-text>
        <v-form>
          <p v-if="errors.length">
          <b>
            Please correct the following error(s):
          </b>
          <ul>
          <li v-for="error in errors">{{ error }}</li>
          </ul>
         </p>
          <v-text-field
            label="Email"
            v-model="email"
            prepend-icon="mdi-email"
          />

          <v-text-field
            type="password"
            label="Password"
            v-model="password"
            prepend-icon="mdi-lock"
          />
        </v-form>
        <!-- show validation error message -->
        <p>{{responseErrorMessage}}</p>

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
export default {
  name: "App",
  data() {
    return {
      email: null,
      password: null,
      isCheck: null,
      isCheckRegister: false,
      responseErrorMessage:"",
      responseData: false,
      errors: []
    };
  },

  methods: {
    // function for redirect sign up page
    async getRegister() {
      this.isCheckRegister = true;
      if (this.isCheckRegister) {
        this.$router.push({ name: "auth-signup" });
      }
    },
    // function for login user
    async getInput() {
      try {
        if (this.email && this.password) {
        
        this.isCheck = 1;
        // call api for send form data
        await this.callApi("post", "/mail/user/login", {
          email: this.email,
          password: this.password
        }).then(response => {
            // console.log(response);
            this.isCheck = response.data;
            // check validation error message
            if(this.isCheck.length){
                this.responseErrorMessage = this.isCheck[0].message 
            }else{
                this.responseData = true;
            }
            
            // console.log(this.responseData);
          if(this.responseData){
              if (this.isCheck == 1 && response.status == 200) {
                // console.log("inside if");
                this.suc("Login successfull");
                this.$router.push({ name: "index" });
              } else {
                // console.log("inside else");
                this.swr("Login failed");
                this.$router.push({ name: "auth-login" });
              }
          }
          
          //   close.log(isCheck);
          //   return;
        });

       }
        
        // form validation
        this.errors = [];
        if (!this.email) {
          this.errors.push("email required.");
        }
        if (!this.password) {
          this.errors.push("password required.");
        }
        
        // console.log(this.isCheck)
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
