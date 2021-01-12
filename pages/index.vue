<template>
    <div>
      <h1>All Post</h1>
    <Index 
    v-for="(post, index) in posts"
      :key="index"
      :post="post"
    />
    </div>
</template>
<script>
import Index from "@/components/Index.vue";
import { mapState } from "vuex";
export default {
  Index,
   
    async fetch({ store, error }) {
    try {
      await store.dispatch("postView/fetchPosts");
      // console.log(data);
    } catch (e) {
      error({
        statusCode: 503,
        message: "We cannot find the user"
      });
    }
  },

  computed: mapState({
    posts: state => state.postView.allPosts
  })
}
</script>