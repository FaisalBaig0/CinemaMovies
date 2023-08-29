<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-300"
  >
    <div class="bg-white rounded-lg shadow-2xl w-full max-w-lg py-24  my-10 px-10">
      <h1 class="text-2xl font-bold -mt-20 mb-24 font-mono">登錄表單</h1>
      <div class="mb-4">
        <label class="mb-4 -ml-96 font-mono" for="email">Email</label>
        <div class="relative mt-5">
          <input
            id="email"
            type="email"
            v-model="form.email"
            class="w-full p-2 pl-10 rounded-md focus:outline-none ml-3"
            placeholder="Type your email"
          />
          <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
          <span
            class="material-symbols-outlined absolute left-1 mr-4 top-2 pr-2 text-gray-400"
            >mail</span
          >
        </div>
      </div>
      <div class="mb-4">
        <label class="mb-1 font-mono p-1 -ml-96" for="password">Password</label>
        <div class="relative mt-5">
          <input
            id="password"
            type="password"
            v-model="form.password"
            class="w-full p-2 pl-10 rounded-md focus:outline-none ml-3"
            placeholder="Type your password"
          />
          <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
          <span
            class="material-symbols-outlined absolute left-1 top-2 pr-2 text-gray-400"
            >lock</span
          >
        </div>
      </div>
      <router-link to="#">
        <p class="ml-72">Forget Password ?</p>
      </router-link>

      <div class=" ">
        <button
          @click="SaveData"
          class="w-full my-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:outline-none text-white rounded-3xl p-3 transition bg-gradient-to-r hover:from-blue-500 hover:to-indigo-300"
        >
          Login
        </button>
        <p class="mt-8 font-mono -mb-4">Or Sign Up Using</p>
        <div class="flex justify-center items-center p-4 m-4">
          
        <img
          src="../assets/facebook.png"
          class="rounded-full w-10 h-10 mx-2 cursor-pointer"
          alt="facebook"
        />
        <img
          src="../assets/twitter.png"
          class="rounded-full w-10 h-10 mx-2 cursor-pointer"
          alt="facebook"
        />
        <img
          src="../assets/social.png"
          class="rounded-full w-10 h-10 mx-2 cursor-pointer"
          alt="facebook"
        />
      </div>
        <p class=" mt-28  font-mono">Or Sign Up Using</p>
        <p class="font-bold cursor-pointer my-3 font-mono" @click="signUp">
          SIGN UP
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({ authenticateUser: "authenticateUser" }),
    async SaveData() {
      await this.authenticateUser(this.form);
      alert("Login Successfully .........");

      this.$router.push("/movies");
    },
    signUp() {
      this.$router.push("/");
    },
  },
};
</script>
