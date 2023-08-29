<template>
   <nav
    class="flex justify-around bg-gradient-to-r from-gray-500 to-gray-700 p-7"
  >
  <router-link to="/" class="text-2xl font-semibold text-white nav-link"
      ><span class="material-symbols-outlined   " style="font-size:44px"> home </span></router-link
    >
    
    <router-link to="/movies" class="text-2xl font-semibold text-white nav-link"
      ><span class="material-symbols-outlined" style="font-size:44px"> live_tv </span></router-link
    >
    <router-link to="#" class="text-2xl font-semibold text-white nav-link"
      ><span class="material-symbols-outlined" style="font-size:44px"> movie </span></router-link
    >
    <!-- <router-link to="#" class="text-2xl font-semibold text-white nav-link"
      >COMING SOON</router-link
    > -->
    <router-link to="/login" class="text-2xl font-semibold text-white nav-link"
      ><span class="material-symbols-outlined" style="font-size:44px"> login </span></router-link
    >
    
    <router-link to="/login" class="text-2xl font-semibold text-white nav-link"
      ><span class="material-symbols-outlined " style="font-size:44px"> logout </span></router-link
    >
  </nav>

</template>

<script>
export default {
    name:'HeaderCom'

}
</script>

<style>

</style>