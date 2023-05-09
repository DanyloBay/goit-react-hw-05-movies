import fetchMovie from 'API/get_movie_api';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import MovieForm from 'components/MovieFrom/MovieForm';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleSearchSubmit = async query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchMovie = searchParams.get('query');
        const {
          data: { results },
        } = await fetchMovie(`/search/movie?query=${searchMovie}`);
        setSearchMovies([...results]);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (searchParams.has('query')) {
      fetchData();
    }
  }, [searchParams]);

  return (
    <>
      <MovieForm onSubmit={handleSearchSubmit} />
      <MovieList movies={searchMovies} location={location} />
    </>
  );
};

export default Movies;
