<template>
    <div>
      <br>
      <a href="/createpost">Create Post</a>
      <br><br>
      <h3>My Post</h3>
      <br>
    <MyPost 
    v-for="(myPost, index) in myPosts"
      :key="index"
      :myPost="myPost"
    />
    </div>
</template>
<script>
import MyPost from "@/components/MyPost.vue";
import { mapState } from "vuex";
export default {
  MyPost,
   
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
// get all post from state
  computed: mapState({
    myPosts: state => state.myPost.myPosts
  })
}
</script>
