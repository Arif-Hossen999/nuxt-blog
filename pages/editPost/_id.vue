<template>
  <div>
    <v-app>
      <v-card width="400px" class="mt-5 mx-a">
        <v-card-title>
          <h3 class="dispay-1">Update Post</h3>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
             label="Title" 
             v-model="result.title" 
             />
            <v-textarea 
            label="Description" 
            v-model="result.post" />
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success" @click="update()">Update</v-btn>
        </v-card-actions>
      </v-card>
    </v-app>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      result: ""
    };
  },
  methods: {
    // find data for update post
    async getData() {
      try {
        this.result = this.myPosts.find(i => i.id == this.$route.params.id);
      } catch (error) {
        // console.log(error);
      }
      
    },
    // update post
    async update() {
      await this.$axios.$patch("/api/post/" + this.$route.params.id,{
        title: this.result.title,
        post: this.result.post,
      }).then(response => {
          // console.log(response);
          if(response.length){
              this.$toast.error("Invalid access to resource"); 
          }else{
              this.$toast.success("Successfully updated");
              this.$router.push({ name: "mypost" });  
          }
      }).catch(error => {
          this.$toast.error("Something went wrong.");
      });
    }
  },
  // get my post for edit
  computed: mapState({
    myPosts: state => state.myPost.myPosts
  }),
  mounted() {
    this.getData();
  }
};
</script>
