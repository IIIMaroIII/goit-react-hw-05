import Axios from 'axios';

// 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const tmdbOptions = Axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmNjNGYwZjA5N2FjMzdkZDlhYmQ1ZTBmYTFmMTZjMCIsInN1YiI6IjY2MTMxOWFiNTkwMDg2MDBlMzdjMzY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wHa7hrlSSamGXao1M4eihwwIHJBX5-Lny9KjpEcWSqg',
  },
  params: {
    language: 'en-US',
  },
});
const getTrendingMovies = async () => {
  try {
    const response = await tmdbOptions.get('/3/trending/movie/day');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const API = {
  getTrendingMovies,
};

export default API;

API.getTrendingMovies();
