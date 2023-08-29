<template>
   <div class="bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-200 min-h-screen">
    <!-- Movie Form -->
    <!-- <h1 class="text-3xl uppercase text-white pt-7">Movies info...</h1> -->
    <div class="container mx-auto p-10 ">
      
      <form
        @submit.prevent="submitMovies"
        class="max-w-md mx-auto bg-white rounded shadow-xl p-8"
      >
       <h1 class=" font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  uppercase mb-6">Update Movies </h1>
        <label for="movieName" class="block font-semibold mb-2 -ml-80"
          >Movie Name:</label
        >
        <input
          type="text"
          id="movieName"
          v-model="updatedMovieName"
          required
          class="w-full p-2 rounded-md focus:outline-none"
        />
        <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />

        <label for="releaseDate" class="block font-semibold mb-5 -ml-80"
          >Date of Release:</label
        >

        <input
          type="date"
          id="releaseDate"
          v-model="updatedReleaseDate"
          required
          class="w-full p-2 rounded-md focus:outline-none"
        />
        <hr class="h-px my-5 bg-gray-200  border-0 dark:bg-gray-700" />

        

        <button
          type="submit"
          class="w-1/2 my-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:outline-none text-white rounded-3xl p-3 transition bg-gradient-to-r hover:from-blue-500 hover:to-indigo-300"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: 'UpdateMovies',
  data() {
    return {
      updatedMovieName: "",
      updatedReleaseDate: "",
    };
  },
  methods: {
    ...mapActions(["updateMovie"]),
    async submitMovies() {
      const updatedMovies = {
        _id: this.$route.params.id,
        movieName: this.updatedMovieName,
        releaseDate: this.updatedReleaseDate,
      };

      await this.updateMovie(updatedMovies);
      alert("Movie is updated")
                this.$router.push({ name: "movies" });

        // .then(() => {
        // })
        // .catch((error) => {
        //   console.error("Update failed:", error);
        // });
    },
  },
};
</script>
