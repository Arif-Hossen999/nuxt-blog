<template>
    <div>
      <h3>{{ myPost.title }}</h3>
      <p>{{myPost.post}}</p>
    </div>
  
</template>

<script>
export default {
  
  props: {
    myPost: Object
  }
  
};
</script>
