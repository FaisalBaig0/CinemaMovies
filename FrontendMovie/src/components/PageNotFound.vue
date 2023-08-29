<template>
  <div class="bg-cyan-900  min-h-screen justify-center items-center flex">
    <div class="bg-gray-50  max-w-4xl w-full py-20 my-20 shadow-lg rounded">
      <h1 class="text-9xl font-extrabold  m-10 p-5 py-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-800">404</h1>
      
      <p class="font-bold text-slate-800 text-2xl py-2">Page Not Found</p>
      <p class="font-bold text-slate-700 p-2 mb-10">This page you're looking for does not seems to exist</p>
      <router-link to="/" class=" bg-emerald-700 w-96 text-white p-4 my-10  "> Go to Home </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style></style>
