<template>
  <div
    class="min-h-screen justify-center items-center flex bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-300"
  >
    <div class="bg-white p-7 mt-5 rounded-lg shadow-lg w-full max-w-lg">
      <h1
        class="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase mb-6"
      >
        Change Password
      </h1>

      <div class="mb-4">
        <label class="mb-1 font-mono p-1 -ml-96" for="password">Username</label>
        <div class="relative mt-5">
          <input
            id="name"
            type="text"
            v-model="username"
            class="w-full p-2 pl-10 rounded-md focus:outline-none ml-3"
            placeholder="Type your Name"
          />
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span
            class="material-symbols-outlined absolute left-1 top-2 pr-2 text-gray-400"
            >person</span
          >
        </div>
      </div>
      <div class="mb-4">
        <label class="mb-1 font-mono p-1 -ml-96" for="password">Password</label>
        <div class="relative mt-3">
          <input
            id="password"
            type="password"
            v-model="password"
            class="w-full p-2 pl-10 rounded-md focus:outline-none ml-3"
            placeholder="Type your password"
          />
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span
            class="material-symbols-outlined absolute left-1 top-2 pr-2 text-gray-400"
            >password</span
          >
        </div>
      </div>
      <button 
        class="w-1/2 my-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:outline-none text-white rounded-3xl p-3 transition bg-gradient-to-r hover:from-blue-400 hover:to-indigo-700"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
  data() {
    return {
      usernameUpdated: "",
      passwordUpdated: "",
    };
  },
  methods: {
    // async changePassword() {
    //   try {
    //     await this.$store.dispatch('updatePassword', this.password);

    //     // Password updated successfully, you can redirect or show a message
    //     this.$router.push('/login'); // Redirect to home page
    //   } catch (error) {
    //     console.error('Error changing password:', error);
    //   }
    // },
  },
};
</script>

<style></style>
