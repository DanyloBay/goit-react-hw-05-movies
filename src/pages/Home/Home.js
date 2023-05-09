import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './Home.module.css';
import MovieList from 'components/MovieList/MovieList';
import fetchMovie from 'API/get_movie_api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await fetchMovie('/trending/movie/day');
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className={css.mainTitle}>Movie Trends For Day</h1>
      <MovieList movies={movies} location={location} />
    </>
  );
};

export default Home;
