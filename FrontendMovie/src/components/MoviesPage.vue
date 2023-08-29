<template>
  <div class="bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-200">
    <!-- Movie Form -->
    <!-- <h1 class="text-3xl uppercase text-white pt-7">Movies info...</h1> -->
    <div class="container mx-auto p-10">
      <form
        @submit.prevent="submitForm"
        class="max-w-md mx-auto bg-white rounded shadow-xl p-8"
      >
        <h1
          class="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase mb-6"
        >
          Add Movies
        </h1>
        <label for="movieName" class="block font-semibold mb-2 -ml-80"
          >Movie Name:</label
        >
        <input
          type="text"
          id="movieName"
          v-model="moviesData.movieName"
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
          v-model="moviesData.releaseDate"
          required
          class="w-full p-2 rounded-md focus:outline-none"
        />
        <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />

        <button
          type="submit"
          class="w-1/2 my-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:outline-none text-white rounded-3xl p-3 transition bg-gradient-to-r hover:from-blue-500 hover:to-indigo-300"
        >
          Submit
        </button>
      </form>
    </div>
    <!-- <p>{{ fetchMovies }}</p> -->
    <!-- Movie List -->
    <div class="container mx-auto p-8">
      <!-- <h1 class=" ont-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  uppercase mb-6"> Movies Info.... </h1> -->

      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="movie in fetchMovies"
          :key="movie._id"
          class="bg-white rounded-lg shadow-md p-4"
        >
          <img
            src="../assets/Vodi.jpg"
            alt="Movie Poster"
            class="w-full h-40 object-cover rounded-md mb-2"
          />
          <h2 class="text-xl font-semibold">{{ movie.movieName }}</h2>
          <p class="text-gray-600">Release Date: {{ movie.releaseDate }}</p>
          <div class="flex justify-center items-center">
            <button
              @click="deleteMovie(movie._id)"
              class="mt-2 w-1/2 bg-red-500 text-white m-3 px-2 py-3 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Delete
            </button>
            <router-link
              :to="`/update/${movie._id}`"
              class="mt-2 w-1/2 bg-green-500 text-white m-3 px-2 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Update
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MoviesPage",
  data() {
    return {
      moviesData: {
        movieName: "",
        releaseDate: "",
      },
    };
  },
  methods: {
    ...mapActions({
      moviesCreation: "moviesCreation",
      getMovies: "getMovies",
      deleteMovies: "deleteMovie",
    }),
    //for getting the movies of all lists
    submitForm() {
      this.moviesCreation(this.moviesData);
      alert("Movie added Successfully !..");
      this.moviesData.movieName = "";
      this.moviesData.releaseDate = "";
    },
    async deleteMovie(movieId) {
      if (confirm("Are you sure you want to delete this movie?")) {
        await this.deleteMovies(movieId);

        this.getMovies();
      }
    },
  },
  computed: {
    ...mapGetters({ fetchMovies: "getMovies_Data" }),
  },
  created() {
    this.getMovies();
    console.log("Movies are coming...");
  },
};
</script>
