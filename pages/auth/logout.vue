<template>
    
</template>
<script>
// import vuex for user store value
import {  mapActions } from "vuex";
export default {
    // methods:{
    //     ...mapActions('login',[
    //         'logout'
    //     ])
    // },
    async mounted() {
        // this.logout()
        this.$auth.logout();
    },
}
</script>