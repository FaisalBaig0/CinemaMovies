<template>
  <div>

    <button @click="logoutUser" class="text-white">Logout</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
name:'logoutPage',

  methods: {
    ...mapActions(['logout']), 

    logoutUser() {
      this.logout(); 
      this.$router.push('/login');
    }
  },

};
</script>
