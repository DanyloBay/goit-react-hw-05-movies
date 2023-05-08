import axios from 'axios';

const _BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const _API_KEY = 'fad1dac50e579af21566a97119bea488';

const fetchSearchMovies = async query => {
  const { data } = await axios(
    `${_BASE_URL}?query=${query}&api_key=${_API_KEY}`
  );
  return data;
};

export default fetchSearchMovies;
