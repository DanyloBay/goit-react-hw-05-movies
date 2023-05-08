import axios from 'axios';

const _BASE_URL = 'https://api.themoviedb.org/3/movie';
const _API_KEY = 'fad1dac50e579af21566a97119bea488';

const fetchGetMovie = async movie_id => {
  const { data } = await axios(`${_BASE_URL}/${movie_id}?api_key=${_API_KEY}`);
  return data;
};

export default fetchGetMovie;
