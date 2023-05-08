import axios from 'axios';

const _BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const _API_KEY = 'fad1dac50e579af21566a97119bea488';

const fetchTrendingMovies = async () => {
  const { data } = await axios(`${_BASE_URL}?api_key=${_API_KEY}`);
  return data;
};

export default fetchTrendingMovies;
