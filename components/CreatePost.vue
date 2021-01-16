<template>
<div>
  <v-app>
    <v-card width="400px" class="mt-5 mx-a">
      <v-card-title>
        <h3 class="dispay-1">Create Post</h3>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Title"
            :value="postTitle"
            @input="setPostTitle"
          />
          <!-- show frontend error message -->
          <p>{{ postFormErrorTitle }}</p>
          <!-- show backend error message -->
          <p>{{ postErrorTitle }}</p>
          <v-textarea
            label="Description"
            :value="postDescription"
            @input="setPostDescription"
          />
          <!-- show frontend error message -->
          <p>{{ postFormErrorDescription }}</p>
          <!-- show backend error message -->
          <p>{{ postErrorDescription }}</p>
          <!-- show backend catch error message -->
          <p>{{ postError }}</p>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success" @click="getInput()">Submit</v-btn>
      </v-card-actions>
    </v-card>
   
  </v-app>
  </div>
    
</template>

<script>
// import vuex for use store
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  // props: {
  //   post: Object
  // },
  methods: {
    // pass form input value
    ...mapMutations("postCreate", [
        "setPostTitle", 
        "setPostDescription",
        ]),
    ...mapActions("postCreate", [
        "getInput",
        "removeData"
        ])
  },
  computed: {
    ...mapState("postCreate", [
      //show input value
      "postTitle",
      "postDescription",
      // show backend validation error message
      "postErrorTitle",
      "postErrorDescription",
      //use for show backend catch error message
      "postError",
      //use for show frontend form validation error message
      "postFormErrorTitle",
      "postFormErrorDescription",
    ]),
    //get login user id 
    // ...mapGetters('login',[
    //   'userId'
    // ])
  },
  mounted() {
    this.removeData();
  },
};
</script>
