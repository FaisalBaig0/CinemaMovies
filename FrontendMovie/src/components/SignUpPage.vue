<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-300"
  >
    <div class="bg-white p-7 mt-5 rounded-lg shadow-lg w-full max-w-lg">
      <h1 class="text-2xl font-semibold mb-4">報名表</h1>
      <div class="mb-4">
        <label class="mb-1 font-mono p-1 -ml-96" for="password">Username</label>
        <div class="relative mt-5">
          <input
            id="name"
            type="text"
            v-model="form.username"
            class="w-full p-2 pl-10 rounded-md focus:outline-none ml-3"
            placeholder="Type your password"
          />
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span
            class="material-symbols-outlined absolute left-1 top-2 pr-2 text-gray-400"
            >person</span
          >
        </div>
      </div>

      <div class="mb-4">
        <label class="mb-1 font-mono p-1 -ml-96" for="email">Email</label>
        <div class="relative mt-3">
          <input
            id="text"
            type="text"
            v-model="form.email"
            class="w-full p-2 pl-10 rounded-md focus:outline-none ml-3"
            placeholder="Type your Email"
          />
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span
            class="material-symbols-outlined absolute left-1 top-2 pr-2 text-gray-400"
            >mail</span
          >
        </div>
      </div>

      <div class="mb-4">
        <label class="mb-1 font-mono p-1 -ml-96" for="password">Password</label>
        <div class="relative mt-3">
          <input
            id="password"
            type="password"
            v-model="form.password"
            class="w-full p-2 pl-10 rounded-md focus:outline-none ml-3"
            placeholder="Type your password"
          />
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span
            class="material-symbols-outlined absolute left-1 top-2 pr-2 text-gray-400"
            >lock</span
          >
        </div>
      </div>
      <div class="mb-4">
        <label class="mb-1 font-mono p-1 -ml-80" for="repeatPassword"
          >Repeat Password</label
        >
        <div class="relative mt-3">
          <input
            id="repeatPassword"
            type="password"
            v-model="form.rPassword"
            class="w-full p-2 pl-10 rounded-md focus:outline-none ml-3"
            placeholder="Repeat Your Password"
          />
          <hr class="h-px my-2 bg-gray-300 border-0 dark:bg-gray-700" />
          <span
            class="material-symbols-outlined absolute left-1 top-2 pr-2 text-gray-400"
          >
            password
          </span>
        </div>
      </div>
      <router-link to="/password">
        <p class="font-bold ml-80 cursor-pointer">Forget ?</p>
      </router-link>

      <div class="my-4">
        <p class="my-6 text-base font-bold">Select Image</p>
        <input
          class="mt-3"
          id="imageInput"
          type="file"
          accept="image/*"
          @change="handleImageUpload"
        />
      </div>
      
      <div class="flex justify-center align-middle items-center">
        <button
          @click="SaveData"
          class="w-1/2 my-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:outline-none text-white rounded-3xl p-3 transition bg-gradient-to-r hover:from-blue-500 hover:to-indigo-300"
        >
          Sign Up
        </button>

        <p @click="GoLogin" class="cursor-pointer ml-10 font-bold">SIGN IN</p>
        <span class="material-symbols-outlined"> arrow_right_alt </span>
      </div>
    </div>
    <!-- <div v-if="passwordMismatch" class="text-red-500 font-bold">
      Password is not matched
    </div> -->
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "SignUpPage",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        rPassword: "",
        image: null,
      },
      passwordMismatch: false,
    };
  },
  methods: {
    ...mapActions({ registerUser: "registerUser" }),
    SaveData() {
      if (this.form.password !== this.form.rPassword) {
        this.passwordMismatch = true;

        return;
      }
      this.passwordMismatch = false;
      this.registerUser(this.form);
      alert("Registration Successfully .....");
      this.$router.push("/login");
      this.form.username = "";
      this.form.email = "";
      this.form.password = "";
      this.form.rPassword = "";
    },
    GoLogin() {
      this.$router.push("/login");
    },
    handleImageUpload(event) {
      this.form.image = event.target.files[0];
    },
  },
};
</script>
<style scoped>
.custom-bg {
  background-color: #3bd6c6;
}
</style>
