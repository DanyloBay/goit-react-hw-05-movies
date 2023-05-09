import fetchTrendingMovies from 'API/get_trending';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './Home.module.css';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await fetchTrendingMovies();
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
