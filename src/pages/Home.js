import fetchTrendingMovies from 'API/get_trending';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';
import logo from '../images/logo.png';

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
      <ul className={css.mainList}>
        {movies.map(movie => (
          <li className={css.mainItems} key={movie.id}>
            <Link
              className={css.mainLink}
              key={movie.id}
              to={`movies/${movie.id}`}
              state={{ from: location }}
            >
              <div className={css.mainLinkItem}>
                <img
                  width={300}
                  height={400}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : logo
                  }
                  alt={movie.original_title}
                />
                {movie.original_title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
