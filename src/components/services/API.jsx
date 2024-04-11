import Axios from 'axios';

// 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const TMDBApi = Axios.create({
  baseURL: 'https://api.themoviedb.org/3',
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
    const response = await TMDBApi.get('/trending/movie/day');
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
const getMovieById = async id => {
  try {
    const response = await TMDBApi.get(`/movie/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getSearchMovie = async q => {
  const params = {
    query: q,
  };
  try {
    const response = await TMDBApi.get(`/search/movie`, { params });
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getCredits = async id => {
  try {
    const response = await TMDBApi.get(`/movie/${id}/credits`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getReviews = async id => {
  try {
    const response = await TMDBApi.get(`/movie/${id}/reviews`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const API = {
  getTrendingMovies,
  getMovieById,
  getSearchMovie,
  getCredits,
  getReviews,
};

export default API;

/*
movie by ID

{
    "adult": false,
    "backdrop_path": "/bDIYX0ZSX4CXBEPtOOxwTiaUeFE.jpg",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
        {
            "id": 18,
            "name": "Drama"
        }
    ],
    "homepage": "https://www.netflix.com/title/81600418",
    "id": 1083658,
    "imdb_id": "tt21279806",
    "original_language": "en",
    "original_title": "Scoop",
    "overview": "Inspired by real events, this fictional dramatization gives an insider account of how the women of Newsnight secured Prince Andrew's infamous interview.",
    "popularity": 139.979,
    "poster_path": "/agWt9bJzr2m1HY3A5InxXveUyIe.jpg",
    "production_companies": [
        {
            "id": 192801,
            "logo_path": "/d0KI2qXN79CoXexD3Il8v7SmggH.png",
            "name": "The Lighthouse",
            "origin_country": "GB"
        },
        {
            "id": 69829,
            "logo_path": "/bVqcTaxWPIzckkPaMFUfGBGTLPg.png",
            "name": "Voltage TV",
            "origin_country": "GB"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "GB",
            "name": "United Kingdom"
        }
    ],
    "release_date": "2024-03-27",
    "revenue": 0,
    "runtime": 103,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "One interview can change everything.",
    "title": "Scoop",
    "video": false,
    "vote_average": 6.182,
    "vote_count": 22
}

*/
