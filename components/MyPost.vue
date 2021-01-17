<template>
  <div>
    <h4>{{ myPost.title }}</h4>
    <p>{{ myPost.post }}</p>
    <!-- link for edit post -->
    <nuxt-link :to="'/editpost/' + myPost.id"><v-btn>Edit</v-btn></nuxt-link>
    <!-- link for delete post -->
    <v-btn @click="deleted(myPost.id)">Delete</v-btn>
    <br /><br />
  </div>
</template>

<script>
export default {
  props: {
    myPost: Object
  },
  methods: {
    // delete post
    async deleted(id) {
      await this.$axios
        .$delete("/api/post/" + id)
        .then(response => {
          this.$toast.success("Successfully deleted");
          // refersh page
          this.$nuxt.refresh();
        })
        .catch(error => {
          this.$toast.error("Something went wrong.");
        });
      // console.log(id, "id");
    }
  }
};
</script>
