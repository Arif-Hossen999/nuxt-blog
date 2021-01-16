<template>
  <div>
    <CreatePost />
  </div>
</template>
<script>
import CreatePost from "~/components/CreatePost.vue";
import { mapState } from "vuex";
export default {
  components: {
    CreatePost
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("myPost/fetchMyPosts");
      // console.log(data);
    } catch (e) {
      error({
        statusCode: 503,
        message: "We cannot find the user"
      });
    }
  },
  computed:{
    // get my post from state
  //   ...mapState({
  //   myPosts: state => state.myPost.myPosts
  // }),
  }
  
};
</script>
