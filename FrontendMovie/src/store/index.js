import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router';
export default createStore({
  state: {
    user: {
      //for registering the user when logged In
      users: [],
      tokens: '',
      errors: [],

    },
    moviesArray: [],
  },
  mutations: {
    SET_WEB_TOKENS(state, payload) {
      state.user.tokens = payload;
    },
    SET_MOVIE_LIST(state, payload) {
      if (payload && Array.isArray(payload)) {
        state.moviesArray = payload.filter(movie => movie && movie._id);
      } else {
        state.moviesArray = [];
      }
    },
    //logout
    LOGOUT(state) {
      state.user.tokens = ''
    }
  },
  actions: {
    async registerUser(_, payload) {
      try {

        const response = await axios.post('/users/register', payload);

        if (response.status === 201) {
          console.log("User registered successfully");
        } else if (response.status === 400) {
          const validationErrors = response.data.errors;
          validationErrors.forEach(error => {
            console.log("errors in authentication ==>, ", error);
          });
        }
      } catch (error) {
        console.error("An error occurred:", this.state.user.errors);
      }
    },
    async authenticateUser({ commit }, payload) {
      try {
        const response = await axios.post('/users/authenticate', payload);

        if (response.status === 200) {
          const token = response.data.data.token;
          commit("SET_WEB_TOKENS", token);
        } else {
          console.log("Authentication failed.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    async moviesCreation(_, payload) {
      const token = this.state.user.tokens;
      console.log("tokens in action is ==>", token);
      const config = {
        headers: {
          'x-access-token': token,
          'Content-type': 'application/json',
        },
      };
      //post request (URL, data,  config);
      const response = await axios.post('/movies', payload, config);
      console.log(" payload moviesCreation in actions==>", response.data);
      if (this.state.user.tokens !== '') {
        router.push('/movies');
      }
    },
    async getMovies({ commit }) {
      try {
        const token = this.state.user.tokens;
        const config = {
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
          }
        };

        const response = await axios.get('/movies', config);

        if (Array.isArray(response.data)) { // Check if response.data is an array
          const formattedMovies = response.data.map(movie => ({
            ...movie,
            releaseDate: new Date(movie.releaseDate).toLocaleDateString()
          }));

          commit('SET_MOVIE_LIST', formattedMovies);
        } else {
          console.error('Invalid data format received from the API.');
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },


    async deleteMovie({ commit }, id) {
      try {
        const token = this.state.user.tokens;
        const config = {
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
          }
        }
        const response = await axios.delete(`/movies/${id}`, config);
        if (response.status === 200) {
          commit('SET_MOVIE_LIST', this.state.moviesArray.filter(movie => movie._id != id))
        }

      } catch (error) {
        console.log("No movie Is deleted", error)
      }
    },

    async updateMovie({ commit }, updatedMovie) {
      try {
        const token = this.state.user.tokens;
        // console.log('token---->', token)
        const config = {
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
          }

        };
        // console.log("token is ==> in action", token);
        // console.log("update movie in action ", updatedMovie)
        const { data } = await axios.put(`/movies/${updatedMovie._id}`, updatedMovie, config);
        // console.log('Movie updated:', data.data.movies);
        commit('SET_MOVIE_LIST', data.data.movies)
      } catch (error) {
        console.error('Error creating movie:', error);
      }
    },


    // async updatePassword({  state }, updatedPassword) {
    //   try {
    //     const token = state.user.tokens;
    //     const config = {
    //       headers: {
    //         'x-access-token': token,
    //         'Content-Type': 'application/json'
    //       }
    //     };

    //     const updatedUser = {
    //       _id: state.user.id, // Replace with the actual user ID
    //       password: updatedPassword,
    //     };

    //     const response = await axios.put(`/users/${updatedUser._id}`, updatedUser, config);
    //     console.log('Password updated:', response.data.message);

    //     // You might want to redirect or show a success message here
    //   } catch (error) {
    //     console.error('Error updating password:', error);
    //   }
    // },




    async logout({ commit }) {
      commit('LOGOUT')
    }

  },
  getters: {
    getMovies_Data(state) {
      return state.moviesArray.filter(movie => movie && movie._id);
    },

  },
}) 
