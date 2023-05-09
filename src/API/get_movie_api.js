import axios from 'axios';

const _API_KEY = 'fad1dac50e579af21566a97119bea488';

const fetchMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
  },
  params: {
    api_key: _API_KEY,
  },
});

export default fetchMovie;
